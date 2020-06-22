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
                        <!-- <h1 class="display-2 text-white">Pindah dan Cuci Produksi</h1> -->
                        <p class="text-white mt-0 mb-3">Silahkan isi form berikut untuk memberi pakan</p>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7 bg-primary">
            <div class="row">
                <div class="col">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Informasi Pakan</h3>
                                </div>
                            </div>
                        </div>
                        <div slot="body">
                            <template>
                                <form @submit.prevent="submitPakan" role="form">
                                    <div class="pl-lg-4">
                                        <base-alert v-if="errors.length" class="px-lg-5" type="warning" dismissible>
                                            <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </base-alert>
                                        <base-input alternative=""
                                                    label="Jumlah Pakan (Kg)"
                                                    placeholder="Masukkan Jumlah Pakan"
                                                    input-classes="form-control-alternative"
                                                    type="number"
                                                    v-model="model.jumlah_pakan"

                                        />
                                        <base-input alternative=""
                                                    label="Tanggal Pakan"
                                                    placeholder="Masukkan Tanggal Pakan"
                                                    input-classes="form-control-alternative"
                                                    type="date"
                                                    v-model="model.waktu_pakan"

                                        />
                                    </div>
                                </form>
                            </template>
                        </div>
                        <div slot="footer" class="text-center d-flex">
                            <a @click="$router.go(-1)" class="btn btn-link text-uppercase text-primary">Batal</a>
                            <base-button @click="submitPakan()" nativeType="submit" type="primary" class="text-uppercase ml-auto">Simpan</base-button>
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
  import Multiselect from 'vue-multiselect'
  export default {
    name: 'pakan',
    computed: {
        ...mapGetters({
            user: 'auth/user',
        })
    },
    components: {
        Multiselect
    },
    data() {
      return {
        errors: '',
        model: {
            id: '',
            jumlah_pakan: '',
            waktu_pakan: '',
            subproduksi_id: ''
        }
      }
    },
    methods:{
        async submitPakan(){
            this.errors = '';
            this.model.subproduksi_id = this.$route.params.id;
            if (!this.model.jumlah_pakan || !this.model.waktu_pakan || !this.model.subproduksi_id || this.model.jumlah_pakan <= 0) {
                this.errors = 'Harap isi semua form dengan benar!';
            }
            else{
                let credentials = this.model;
                console.log(credentials);
                await axios.post(`apipakan/store`, credentials)
                .then(() =>{
                        this.$router.go(-1);
                    })
                .catch(() => {
                        this.errors = 'Harap isi semua form dengan benar!';
                    })
            }
        }
    }
  };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .round .multiselect__tags{
      border-radius: 1.5rem;
      box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
      border: 0px;
  }
  .alert{
        border-radius: .25rem;
    }
</style>