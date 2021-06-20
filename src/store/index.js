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
      authPaths: [],
      hasFech: false
    },
    menus: []
  },
  getters: {
    authPaths(state) {
      return state.user.authPaths
    },
    hasFech(state) {
      return state.user.hasFech
    },
    menus(state) {
      return state.menus 
    }
  },
  mutations: {
    'SET_USER_INFO': (state, userInfo) => {
      const { name, avatar, token } = userInfo
      state.user.token = token || ''
      state.user.name = name || ''
      state.user.avatar = avatar || ''
    },
    'CLEAR_USER_INFO': (state) => {
      state.user.token = ''
      state.user.name = ''
      state.user.avatar = ''
      state.user.authPaths = []
      state.user.hasFech = false
      state.menus = []
      storage.remove('ACCESS_TOKEN')
      storage.remove('MENUS')
    },
    'SET_ROLES': (state, paths) => {
      state.user.authPaths = paths
      state.user.hasFech = true
      state.menus = paths
      console.log(state, paths)
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
      return user.getPermissionlist().then(({ data }) => {
        console.log(data)
        if (data) {
          commit('SET_ROLES', data)
          storage.remove('MENUS')
          return true
        } else {
          commit('SET_ROLES', [])
          storage.set('MENUS', data)
          return false
        }
      })
    }
  }
})
