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
                        <h1 class="display-2 text-white">Penebaran</h1>
                        <p class="text-white mt-0 mb-5">Silahkan isi form berikut untuk melakukan penebaran</p>
                    </div>
                </div>
            </div>
        </base-header>

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
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Informasi Penebaran</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent="submitPenebaran" role="form">
                                <!-- Data Penebaran -->
                                <div class="pl-lg-4">
                                    <base-input alternative=""
                                                label="Nama Ikan"
                                                placeholder="Masukkan Nama Ikan"
                                                input-classes="form-control-alternative"
                                                v-model="model.nama_ikan"
                                    />
                                    <base-input alternative=""
                                                label="Jumlah Ikan"
                                                placeholder="Masukkan Jumlah Ikan"
                                                input-classes="form-control-alternative"
                                                type="number"
                                                v-model="model.jumlah_ikan"

                                    />
                                    <base-input alternative=""
                                                label="Ukuran Ikan (cm)"
                                                placeholder="Masukkan Ukuran Ikan (cm)"
                                                input-classes="form-control-alternative"
                                                type="number"
                                                v-model="model.panjang_ikan"

                                    />
                                    <base-input alternative=""
                                                label="Berat Ikan (gram)"
                                                placeholder="Masukkan Berat Ikan (gram)"
                                                input-classes="form-control-alternative"
                                                type="number"
                                                v-model="model.berat_ikan"

                                    />
                                    <base-input alternative=""
                                                label="Tanggal Tebar"
                                                placeholder="Masukkan Tanggal Tebar"
                                                input-classes="form-control-alternative"
                                                type="date"
                                                v-model="model.tanggal_tebar"

                                    />
                                </div>
                                <!-- Keramba -->
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-control-label">Lokasi Tebar</div>
                                            <select v-model="model.keramba_id" class="input-group-alternative mb-3 form-control">
                                                <option disabled value="">Pilih Lokasi Tebar</option>
                                                <option v-for="keramba in kerambas" v-bind:value="keramba.id">{{ keramba.nama_keramba }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </template>
                        <div slot="footer" class="text-center">
                            <base-button @click="submitPenebaran()" nativeType="submit" type="primary" class="text-uppercase">Simpan</base-button>
                            <router-link to="/beranda" class="btn ml-auto btn-link text-uppercase">Batal</router-link>
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
    name: 'tebar',
    computed: {
        ...mapGetters({
            user: 'auth/user',
        })
    },
    data() {
      return {
        errors: '',
        kerambas: [],
        keramba: {
            id: '',
            nama_keramba: ''
        },
        model: {
            nama_ikan: '',
            jumlah_ikan: '',
            panjang_ikan: '',
            berat_ikan: '',
            tanggal_tebar: '',
            keramba_id: '',
            kelompok_id: '',
            user_id: ''
        }
      }
    },
    created() {
        this.getKeramba();
        this.model.kelompok_id = this.user.kelompok_id;
        this.model.user_id = this.user.id;
    },
    methods:{
        async getKeramba(){
            let id = this.user.kelompok_id;
            await axios.get(`apikeramba/where?kelompok=${id}`)
                .then((response) => {
                    this.kerambas = response.data;
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
        async submitPenebaran(){
            this.errors = '';
            let credentials = this.model;
            console.log(credentials);
            await axios.post('apiproduksi/store', credentials)
            .then(() =>{
                    this.$router.replace({
                        name: 'beranda'
                    })
                })
            .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
                })
        },
        consolee(){
            console.log(this.model);
        }
    }
  };
</script>
<style></style>
