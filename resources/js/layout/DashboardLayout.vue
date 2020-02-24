<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Nelayan"
      title="Nelayan Cerdas K1000"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Beranda',
            icon: 'ni ni-tv-2 text-primary',
            path: '/beranda'
          }"
        />
        <sidebar-item :link="{name: 'Profil Saya', icon: 'ni ni-single-02 text-yellow', path: '/profil'}"/>
        <sidebar-item v-if="user.status === 'admin' || user.status === 'ketua'" :link="{name: 'Kelompok', icon: 'fa fa-users text-blue', path: '/kelompok'}"/>
        <sidebar-item v-if="user.status === 'admin'" :link="{name: 'Produksi', icon: 'ni ni-box-2 text-blue', path: '/produksi'}"/>
        <sidebar-item v-if="user.status === 'admin'" :link="{name: 'Keramba', icon: 'fa fa-anchor text-blue', path: '/keramba'}"/>
        <sidebar-item v-if="user.status === 'admin'" :link="{name: 'Sensor IoT', icon: 'fa fa-rss text-blue', path: '/sensor'}"/>
        <sidebar-item v-if="user.status === 'admin'" :link="{name: 'Pakan Otomatis', icon: 'fa fa-braille text-blue', path: '/pakan'}"/>
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    computed: {
        ...mapGetters({
            user: 'auth/user',
        })
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
