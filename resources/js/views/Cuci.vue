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
                        <h1 class="display-2 text-white">Pencucian</h1>
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
                                <button @click="showCuci(produksi.id)" type="button" class="col btn btn-primary">Lakukan Pencucian</button>
                            </form>
                        </div>
                        <div class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getProduksi()"
                                    :offset="1">
                            </base-pagination-dua>
                        </div>
                        <!-- Modal -->
                        <div>
                            <modal :show.sync="showModal">
                                <template slot="header">
                                    <h4 class="modal-title" id="exampleModalLabel">Form Pencucian</h4>
                                </template>
                                <template>
                                    <form @submit.prevent="submitCuci" role="form">
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
                                                        label="Panjang Ikan Terakhir"
                                                        placeholder="Masukkan Panjang Ikan"
                                                        input-classes="form-control-alternative"
                                                        type="number"
                                                        v-model="model.panjang_ikan"

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
                                    <base-button type="secondary" @click="showModal = false">Batal</base-button>
                                    <base-button type="primary" nativeType="submit">Simpan</base-button>
                                </template>
                            </modal>
                        </div>
                        <!-- End Modal -->
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
    name: 'cuci',
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
          jumlah_ikan: '',
          panjang_ikan: '',
          tanggal_cuci: '',
          keramba_id: '',
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
        this.model.keramba_id = this.produksi.keramba_id;
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
        submitCuci(){
            this.errors = '';
            this.model2.jumlah_ikan = this.model.jumlah_ikan ;
            this.model2.panjang_ikan = this.model.panjang_ikan;
            this.model2.tanggal_cuci = this.model.tanggal_cuci;
            let credentials = this.model;
            let credentials2 = this.model2;
            console.log(credentials);
            axios.all([
                axios.post('apipencucian/store', credentials),
                axios.post(`apipencucian/store`, credentials),
            ])
            .then(axios.spread((responseCuci, responseProduksi) => {
                    this.$router.replace({
                        name: 'beranda'
                    })
            }))
            .catch(function (error) {
                    this.errors = 'Harap isi semua form dengan benar!';
            });
        },
        async showCuci(id){
            this.showModal = true;
            this.model.produksi_id = id;
            await axios.get(`apiproduksi/${id}`)
            .then((response) => {
                    this.model = response.data.data;
                    console.log(response);
                })
            .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
                })
        },
    },
  };
</script>
<style></style>
