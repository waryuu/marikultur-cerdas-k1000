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
    // Default Route untuk user terauthenticated
      path: '/',
      alias : '/index.php',
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
            path: '/tebar',
            name: 'tebar',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "demo" */ './views/Tebar.vue')
        },
        {
            path: '/cuci',
            name: 'cuci',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "demo" */ './views/Cuci.vue')
        },
        {
            path: '/pindah',
            name: 'pindah',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "demo" */ './views/Pindah.vue')
        },
        {
            path: '/panen',
            name: 'panen',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "demo" */ './views/Panen.vue')
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
            path: '/profil',
            name: 'profil',
            component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
            path: '/sensor',
            name: 'sensor',
            beforeEnter: (to, from, next) => {
                if(store.getters['auth/user'].status !== 'admin'){
                    return next({
                        name: 'beranda'
                    })
                }
                next()
            },
            component: () => import(/* webpackChunkName: "demo" */ './views/Sensor.vue')
        },
        {
            path: '/pakan',
            name: 'pakan',
            beforeEnter: (to, from, next) => {
                if(store.getters['auth/user'].status !== 'admin'){
                    return next({
                        name: 'beranda'
                    })
                }
                next()
            },
            component: () => import(/* webpackChunkName: "demo" */ './views/Pakan.vue')
        },
        {
            path: '/kelompok',
            name: 'kelompok',
            beforeEnter: (to, from, next) => {
                if(store.getters['auth/user'].status === 'user'){
                    return next({
                        name: 'beranda'
                    })
                }
                next()
            },
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
    // Default Route untuk user tidak terauthenticated
    {
      path: '/',
      alias : '/index.php',
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
    // Default Route untuk user yang tidak memiliki kelompok
    {
        path: '/',
        alias : '/index.php',
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
