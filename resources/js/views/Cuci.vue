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
                        <h1 class="display-2 text-white">Aktivitas Produksi</h1>
                        <p class="text-white mt-0 mb-5">Pilih produksi yang akan dilakukan pencucian atau pemindahan</p>
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
                                <button @click="showAktivitas(produksi.id)" type="button" class="col btn btn-primary">Lakukan Aktivitas</button>
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
                            <modal :show.sync="showModal">
                                <template slot="header">
                                    <h3 class="modal-title font-weight-light" id="exampleModalLabel">Form Aktivitas</h3>
                                </template>
                                <template slot="body">
                                    <form @submit.prevent="submitAktivitas" role="form">
                                        <!-- Data Cuci -->
                                        <h6 class="heading-small text-muted mb-4">Silahkan Isi Form Berikut</h6>
                                        <div class="pl-lg-4">
                                            <base-input alternative=""
                                                        label="Jumlah Ikan Terakhir"
                                                        placeholder="Masukkan Jumlah Ikan"
                                                        input-classes="form-control-alternative"
                                                        type="number"
                                                        v-model="model.jumlah_ikan"

                                            />
                                            <base-input alternative=""
                                                        label="Panjang Ikan Terakhir (cm)"
                                                        placeholder="Masukkan Panjang Ikan (cm)"
                                                        input-classes="form-control-alternative"
                                                        type="number"
                                                        v-model="model.panjang_ikan"

                                            />
                                            <base-input alternative=""
                                                        label="Berat Ikan Terakhir (gram)"
                                                        placeholder="Masukkan Berat Ikan (gram)"
                                                        input-classes="form-control-alternative"
                                                        type="number"
                                                        v-model="model.berat_ikan"

                                            />
                                            <base-input alternative=""
                                                        label="Tanggal Cuci"
                                                        placeholder="Masukkan Tanggal Cuci"
                                                        input-classes="form-control-alternative"
                                                        type="date"
                                                        v-model="model.tanggal_cuci"

                                            />
                                        </div>
                                    </form>
                                </template>
                                <template slot="footer">
                                    <base-button type="link" @click="showModal = false" class="text-uppercase">Batal</base-button>
                                    <base-button type="primary" @click="submitAktivitas()" nativeType="submit" class="text-uppercase ml-auto">Simpan</base-button>
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
    name: 'aktivitas',
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
          jumlah_ikan: '',
          panjang_ikan: '',
          tanggal_cuci: '',
          berat_ikan: '',
          produksi_id: '',
          user_id: ''
        },
        model2: {
          id: '',
          jumlah_ikan: '',
          panjang_ikan: '',
          tanggal_cuci: '',
        },
      }
    },
    mounted() {
        this.getProduksi();
        this.model.user_id = this.user.id;
    },
    methods:{
        async getProduksi() {
            await axios.get(`apiproduksi?page=${this.meta.current_page}`)
                .then((response) => {
                    this.produksis = response.data.data;
                    this.meta = response.data.meta;
                    console.log(this.produksis[0].jumlah_ikan);
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
        async submitAktivitas(){
            this.showModal = false;
            this.errors = '';
            let credentials = this.model;
            console.log(credentials);
            await axios.post('apipencucian/store', credentials)
                .then((response) => {
                    this.$router.replace({
                        name: 'beranda'
                    })
                })
                .catch(function (error) {
                        this.errors = 'Harap isi semua form dengan benar!';
                });
        },
        showAktivitas(id){
            this.showModal = true;
            this.model.produksi_id = id;
            console.log(this.produksis[id-1]);
            // this.model.jumlah_ikan = this.produksis[id-1].jumlah_ikan;
            // this.model.panjang_ikan = this.produksis[id-1].panjang_ikan;
            // this.model.berat_ikan = this.produksis[id-1].berat_ikan;
            console.log(this.model);
            // await axios.get(`apiproduksi/${id}`)
            // .then((response) => {
            //         this.model = response.data.data;
            //         console.log(this.model);
            //     })
            // .catch(() => {
            //         this.errors = 'Harap isi semua form dengan benar!';
            //     })
        },
    },
  };
</script>
<style></style>
