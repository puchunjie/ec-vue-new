import Vue from 'vue'
import Antd from 'ant-design-vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import './assets/FA5Pro/css/all.min.css' 

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
