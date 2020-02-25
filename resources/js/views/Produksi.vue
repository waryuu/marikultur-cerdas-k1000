<template>
    <div>
        <base-header class="header pb-7 pt-6 pt-lg-7 d-flex align-items-center"
                     style="min-height: 300px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-8"></span> -->
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Produksi</h1>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Daftar Produksi</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Pengaturan</a>
                                </div>
                            </div>
                        </div>
                        <template>
                                <div class="card shadow card-body mb-3">
                                    <h3 class="card-title">Kerapu Cantang</h3>
                                    <h4 class="card-subtitle text-muted">200 Ekor</h4>
                                    <p class="card-text font-weight-bold mt-2">Ukuran: 12 cm
                                    <br>
                                    Lokasi: Keramba 1
                                    </p>
                                    <form class="row align-items-center px-3" action="" method="post">
                                        <button type="button" class="col btn btn-primary" >Detail</button>
                                    </form>
                                </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'produksi',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    data() {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
  };
</script>
<style></style>
