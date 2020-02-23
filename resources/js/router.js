import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from './layout/DashboardLayout'
import AuthLayout from './layout/AuthLayout'
import store from './store'
Vue.use(Router)

export default new Router({
    mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'beranda',
      component: DashboardLayout,
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
            return next({
                name: 'login'
            })
        }
        else if(store.getters['auth/authenticated'] && store.getters['auth/user'].kelompok_id === null){
            return next({
                name: 'tambahkelompok'
            })
        }
        next()
      },
      children: [
        {
          path: '/beranda',
          name: 'beranda',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
            path: '/profil',
            name: 'profil',
            component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
            path: '/sensor',
            name: 'sensor',
            component: () => import(/* webpackChunkName: "demo" */ './views/Sensor.vue')
        },
        {
            path: '/pakan',
            name: 'pakan',
            component: () => import(/* webpackChunkName: "demo" */ './views/Pakan.vue')
        },
        {
            path: '/produksi',
            name: 'produksi',
            component: () => import(/* webpackChunkName: "demo" */ './views/Produksi.vue')
        },
        {
            path: '/keramba',
            name: 'keramba',
            component: () => import(/* webpackChunkName: "demo" */ './views/Keramba.vue')
        },
        {
            path: '/kelompok',
            name: 'kelompok',
            component: () => import(/* webpackChunkName: "demo" */ './views/Kelompok.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      beforeEnter: (to, from, next) => {
        if(store.getters['auth/authenticated']){
            return next({
                name: 'beranda'
            })
        }
        next()
      },
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    },
    {
        path: '/',
        redirect: 'tambahkelompok',
        component: AuthLayout,
        beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
            return next({
                name: 'login'
            })
        }
        else if(store.getters['auth/authenticated'] && store.getters['auth/user'].kelompok_id !== null){
            return next({
                name: 'beranda'
            })
        }
        next()
        },
        children: [
        {
            path: '/tambahkelompok',
            name: 'tambahkelompok',
            component: () => import(/* webpackChunkName: "demo" */ './views/TambahKelompok.vue')
        }
        ]
    }
  ]
})
