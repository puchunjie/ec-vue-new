import Vue from 'vue'
import VueRouter from 'vue-router'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import NProgress from 'nprogress'
import storage from 'store'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'


const whiteList = ['login', '403', '404', '500']
const loginRoutePath = '/login'
// const defaultRoutePath = '/'
// const noAuth = '/403'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }]
  },
  {
    path: '/403',
    name: '403',
    component: () => import(/* webpackChunkName: "error" */ '@/views/exception/403')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "error" */ '@/views/exception/404')
  },
  {
    path: '/500',
    name: '500',
    component: () => import(/* webpackChunkName: "error" */ '@/views/exception/500')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach(async (to, from, next) => {
  NProgress.start()
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))

  if (whiteList.includes(to.name)) {
    // 在免登录白名单，直接进入
    next()
  } else {
    if (storage.get('ACCESS_TOKEN')) {
        // 获取store中权限Flag
        const { hasFech } = store.getters
        !hasFech && await store.dispatch('getPermissionlist')
        // TODO:鉴权等后端加上path
        // console.log(to)
        // const canPass = authPath(to.path)
        // console.log(canPass)
        // if (canPass) {
        //   next()
        // } else {
        //   next({ path: noAuth })
        // }
        next()
    } else {
      next({ path: loginRoutePath, query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }

})


// 递归查找
// const authPath = (path) => {
//   const { authPaths } = store.getters
//   return authPaths.includes(path)
// }

export default router
