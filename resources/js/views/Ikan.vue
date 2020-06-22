<template>
    <div>
        <base-header class="header pb-7 pt-4 pt-lg-7 d-flex align-items-center"
                     style="min-height: 100px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-8"></span> -->
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col">
                        <!-- <h1 class="display-2 text-white">Penebaran</h1> -->
                        <p class="text-white mt-0 mb-3">Silahkan isi form berikut untuk menambah ikan baru</p>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7 bg-primary">
            <!-- <div class="row mb-3">
                <div class="col text-left">
                        <router-link to="/beranda" class="btn btn-secondary text-uppercase">
                            Kembali
                        </router-link>
                </div>
            </div> -->
            <div class="row">
                <div class="col">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Informasi Ikan</h3>
                                </div>
                            </div>
                        </div>
                        <div slot="body">
                            <template>
                                <form @submit.prevent="submitPenebaran" role="form">
                                    <!-- Data Penebaran -->
                                    <div class="pl-lg-4">
                                        <base-alert v-if="errors.length" class="px-lg-5" type="warning" dismissible>
                                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </base-alert>
                                        <base-input alternative=""
                                                    label="Nama Ikan"
                                                    placeholder="Masukkan Nama Ikan"
                                                    input-classes="form-control-alternative"
                                                    type="text"
                                                    v-model="model.nama_ikan"

                                        />
                                    </div>
                                </form>
                            </template>
                        </div>
                        <div slot="footer" class="text-center d-flex">
                            <a @click="$router.go(-1)" class="btn btn-link text-uppercase text-primary">Batal</a>
                            <base-button @click="submitIkan()" nativeType="submit" type="primary" class="text-uppercase ml-auto">Simpan</base-button>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'ikan',
    data() {
      return {
        errors: '',
        model: {
            nama_ikan: '',
        }
      }
    },
    methods:{
        async submitIkan(){
            this.errors = '';
            let credentials = this.model;
            console.log(credentials);
            await axios.post('apinamaikan/store', credentials)
            .then(() =>{
                    this.$router.go(-1)
                })
            .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
                })
        },
    }
  };
</script>
<style>
</style>