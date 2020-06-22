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
            component: () => import('./views/Tebar.vue')
        },
        {
            path: '/debug',
            name: 'debug',
            component: () => import('./views/DashboardBackup.vue')
        },
        {
            path: '/cuci',
            name: 'cuci',
            component: () => import('./views/Cuci.vue')
        },
        {
            path: '/riwayat',
            name: 'riwayat',
            component: () => import('./views/Riwayat.vue')
        },
        {
            path: '/produksi',
            name: 'produksi',
            component: () => import('./views/Produksi.vue')
        },
        {
            path: '/produksi/:id',
            name: 'produksi-detail',
            component: () => import('./views/ProduksiDetail.vue')
        },
        {
            path: '/produksi/ubah/:id',
            name: 'ubah',
            component: () => import('./views/UbahProduksi.vue')
        },
        {
            path: '/produksi/pindah/:id',
            name: 'pindah',
            component: () => import('./views/Pindah.vue')
        },
        {
            path: '/produksi/panen/:id',
            name: 'panen',
            component: () => import('./views/Panen.vue')
        },
        {
            path: '/produksi/pakan/:id',
            name: 'pakan',
            component: () => import('./views/Pakan.vue')
        },
        {
            path: '/keramba',
            name: 'keramba',
            component: () => import('./views/Keramba.vue')
        },
        {
            path: '/ikan',
            name: 'ikan',
            component: () => import('./views/Ikan.vue')
        },
        {
            path: '/profil',
            name: 'profil',
            component: () => import('./views/UserProfile.vue')
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
            component: () => import('./views/Sensor.vue')
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
            component: () => import('./views/Kelompok.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import('./views/Icons.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import('./views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import('./views/Tables.vue')
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
          component: () => import('./views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/Register.vue')
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
            component: () => import('./views/TambahKelompok.vue')
        }
        ]
    }
  ]
})
