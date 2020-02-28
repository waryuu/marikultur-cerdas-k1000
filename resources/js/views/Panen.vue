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
                        <h1 class="display-2 text-white">Panen</h1>
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
                                    <router-link to="/beranda" class="btn btn-sm btn-primary">Kembali</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getProduksi()"
                                    :offset="1">
                            </base-pagination-dua>
                        </div>
                        <div v-for="produksi in produksis" v-bind:key="produksi.id" class="card shadow card-body mb-3">
                            <h3 class="card-title">{{produksi.nama_ikan}}</h3>
                            <h4 class="card-subtitle text-muted">Keramba {{produksi.keramba_id}}</h4>
                            <h4 class="card-text font-weight-bold mt-2">Ukuran: {{produksi.panjang_ikan}} cm
                                <br>
                                Jumlah: {{produksi.jumlah_ikan}} Ekor
                                <br>
                                Tanggal Tebar: {{produksi.tanggal_tebar}}
                                <br>
                                Terakhir Mencuci: {{produksi.tanggal_cuci}}
                                <br>
                                Terakhir Pindah: {{produksi.tanggal_pindah}}
                            </h4>
                            <form class="row align-items-center px-3" action="" method="post">
                                <button @click="showPanen(produksi.id)" type="button" class="col btn btn-primary">Lakukan Panen</button>
                            </form>
                        </div>
                        <div class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getProduksi()"
                                    :offset="1">
                            </base-pagination-dua>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
  export default {
    name: 'panen',
    computed: {
        ...mapGetters({
            user: 'auth/user'
        })
    },
    data() {
      return {
        errors: '',
        showModal: false,
        offset: 4,
        produksis: [],
        produksi: {
          id: '',
          nama_ikan: '',
          jumlah_ikan: '',
          panjang_ikan: '',
          tanggal_tebar: '',
          tanggal_panen: '',
          tanggal_cuci: '',
          tanggal_pindah: '',
          status_panen: '',
          keramba_id: ''
        },
        meta: {
            current_page: 1,
            from: 1,
            last_page: '',
            path: '',
            per_page: '',
            to: '',
            total: ''
        },
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
        },
      }
    },
    mounted() {
        this.getProduksi();
    },
    methods:{
        async getProduksi() {
            await axios.get(`apiproduksi?page=${this.meta.current_page}`)
                .then((response) => {
                    this.produksis = response.data.data;
                    this.meta = response.data.meta;
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
        showPanen(id){
            this.showModal = true;
        },
    },
  };
</script>
<style></style>
