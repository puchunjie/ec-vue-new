import Vue from 'vue'
import Vuex from 'vuex'
import storage from 'store'
import user from '@/apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    user: {
      token: '',
      name: '',
      avatar: '',
      roles: []
    }
  },
  mutations: {
    'SET_USER_INFO': (state, userInfo) => {
      const { name, avatar, roles, token } = userInfo; 
      state.user.token = token || '';
      state.user.name = name || '';
      state.user.avatar = avatar || '';
      state.user.roles = roles || [];
    },
    'CLEAR_USER_INFO': (state) => {
      state.user.token = '';
      state.user.name = '';
      state.user.avatar = '';
      state.user.roles = [];
      storage.remove('ACCESS_TOKEN')
    },
    'SET_ROLES': (state, roles) => {
      console.log(state, roles)
    }
  },
  actions: {
    setUser({ commit }, userInfo) {
      commit('SET_USER_INFO', userInfo);
    },
    logOut({ commit }) {
      commit('CLEAR_USER_INFO')
    },
    getPermissionlist({ commit }) {
      user.getPermissionlist().then(res => {
        console.log(res)
        commit('SET_ROLES')
      })
    }
  }
})
