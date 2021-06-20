"use strict";

import Vue from 'vue';
import axios from "axios";
import storage from 'store'
import store from '../store'
import { notification } from "ant-design-vue";
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    const Authorization = storage.get('ACCESS_TOKEN') || '';
    if (Authorization) {
      config.headers.common['Authorization'] = Authorization;
    }
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // console.log(response)
    if (response.data.code == 400) {
        // console.log("错误", response)
        notification.error({
            // eslint-disable-next-line no-unused-vars
            message: h => (
                <div>
                    <span style="color: red">{response.data.message}</span>
                </div>
            ),
            description: ''
        });
        return response.data
    }
    if (response.data.code == 10001) {                
        store.dispatch('logOut').then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 1500)
          })   
    }
    if (response.data.code == 200) {
      return response.data;
    }
    // Do something with response data
    return response.data;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;

export const http = _axios
