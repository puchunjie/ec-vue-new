import Vue from 'vue'
import Vuex from 'vuex'

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
    }
  },
  actions: {
    setUser({ commit }, userInfo) {
      commit('SET_USER_INFO', userInfo);
    }
  }
})
