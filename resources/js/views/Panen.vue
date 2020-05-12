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
                        <h1 class="display-2 text-white">Pemanenan</h1>
                        <p class="text-white mt-0 mb-5">Pilih produksi yang akan dipanen</p>
                    </div>
                </div>
            </div>
        </base-header>

        <!-- Card Produksi -->
        <div class="container-fluid mt--7">
            <div class="row mb-3">
                <div class="col text-left">
                        <router-link to="/beranda" class="btn btn-secondary text-uppercase">
                            Kembali
                        </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <card shadow type="secondary" :noBody="true">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Daftar Produksi</h3>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-end">
                                   <base-pagination-dua  :pagination="meta"
                                        @paginate="getProduksi()"
                                        :offset="1">
                                    </base-pagination-dua>
                                </div>
                            </div>
                        </div>
                        <div v-for="produksi in produksis" v-bind:key="produksi.id" class="card card-body rounded-0 mb-3">
                            <h3 class="card-title">{{produksi.nama_ikan}}</h3>
                            <h4 class="card-subtitle text-muted">Keramba {{produksi.keramba_id}}</h4>
                            <div class="row mt-3">
                                <div class="col">
                                    <h4 class="text-center text-uppercase font-weight-light">
                                        Jumlah
                                    </h4>
                                    <h3 class="text-center">
                                        {{produksi.jumlah_ikan_awal}} Ekor
                                    </h3>
                                </div>
                                <div class="col">
                                    <h4 class="text-center text-uppercase font-weight-light">
                                        Ukuran
                                    </h4>
                                    <h3 class="text-center">
                                        {{produksi.panjang_ikan_awal}} cm
                                    </h3>
                                </div>
                                <div class="col">
                                    <h4 class="text-center text-uppercase font-weight-light">
                                        Berat
                                    </h4>
                                    <h3 class="text-center">
                                        {{produksi.berat_ikan_awal}} Gram
                                    </h3>
                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <h4 class="text-left">
                                        Tanggal Tebar
                                    </h4>
                                </div>
                                <div class="col">
                                    <h4 class="text-right font-italic">
                                        {{produksi.tanggal_tebar}}
                                    </h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h4 class="text-left">
                                        Tanggal Mencuci
                                    </h4>
                                </div>
                                <div class="col">
                                    <h4 class="text-right font-italic">
                                        {{produksi.tanggal_cuci}}
                                    </h4>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <h4 class="text-left">
                                        Tanggal Pindah
                                    </h4>
                                </div>
                                <div class="col">
                                    <h4 class="text-right font-italic">
                                        {{produksi.tanggal_pindah}}
                                    </h4>
                                </div>
                            </div>
                            <form class="row align-items-center px-3" action="" method="post">
                                <button @click="showPanen(produksi.id)" type="button" class="col btn btn-primary">Lakukan Panen</button>
                            </form>
                        </div>
                        <div slot="footer" class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getProduksi()"
                                    :offset="1">
                            </base-pagination-dua>
                        </div>
                        <!-- Modal -->
                        <div>
                            <modal :show.sync="showModal" gradient="danger" type="danger">
                                <template slot="header">
                                    <h3 class="modal-title font-weight-light" id="exampleModalLabel">Lakukan Panen</h3>
                                </template>
                                <template slot="body">
                                    <form @submit.prevent="" role="form">
                                        <h2 class="text-white mb-4">Apakah Anda yakin ingin melakukan panen?</h2>
                                        <p>Jika sudah dipanen proses produksi selesai dan tidak dapat dikembalikan</p>
                                    </form>
                                </template>
                                <template slot="footer">
                                    <base-button type="secondary" @click="" nativeType="submit" class="text-uppercase">Panen</base-button>
                                    <base-button type="link" @click="showModal = false" class="text-white text-uppercase ml-auto">Batal</base-button>
                                </template>
                            </modal>
                        </div>
                        <!-- End Modal -->
                    </card>
                </div>
            </div>
        </div>
        <!-- End card produksi -->
        
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
          jumlah_ikan_awal: '',
          panjang_ikan_awal: '',
          berat_ikan_awal: '',
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
