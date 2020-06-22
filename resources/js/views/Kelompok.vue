<template>
    <div class="bg-primary">
        <base-header class="header pb-7 pt-4 pt-lg-7 d-flex align-items-center"
                     style="min-height: 100px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-8"></span> -->
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col">
                        <!-- <h1 class="display-2 text-white">Kelompok</h1> -->
                        <p class="text-white mt-0 mb-3">Silahkan isi form berikut untuk mengubah data kelompok Anda</p>
                    </div>
                </div>
            </div>
        </base-header>

        <!-- Card -->
        <div class="container-fluid mt--7 bg-primary">
            <div class="row">
                <div class="col">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Informasi Kelompok</h3>
                                </div>
                            </div>
                        </div>
                        <div slot="body">
                            <template>
                                <form @submit.prevent="" role="form">
                                    <!-- Data Diri -->
                                    <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-12">
                                                <base-alert v-if="errors.length" class="px-lg-5" type="warning" dismissible>
                                                    <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                                    <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </base-alert>
                                            </div>
                                            <div class="col-12">
                                                <base-alert v-if="success.length" class="px-lg-5" type="success" dismissible>
                                                    <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                                                    <span class="alert-inner--text"><strong>Berhasil!</strong> {{ success }}</span>
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </base-alert>
                                            </div>
                                            <div class="col-12">
                                                <base-input alternative=""
                                                            label="Nama Kelompok"
                                                            placeholder="Nama Kelompok"
                                                            input-classes="form-control-alternative"
                                                            v-model="kel.nama_kelompok"
                                                            
                                                />
                                            </div>
                                            <div class="col-12">
                                                <base-input alternative=""
                                                            label="Ketua"
                                                            placeholder="Ketua"
                                                            input-classes="form-control-alternative"
                                                            v-model="kel.ketua_kelompok"
                                                />
                                            </div>
                                            <div class="col-12">
                                                <base-input alternative=""
                                                            label="Bendahara"
                                                            placeholder="Bendahara"
                                                            input-classes="form-control-alternative"
                                                            v-model="kel.bendahara_kelompok"
                                                />
                                            </div>
                                            <div class="col-12">
                                                <base-input alternative=""
                                                            label="Humas"
                                                            placeholder="Humas"
                                                            input-classes="form-control-alternative"
                                                            v-model="kel.humas_kelompok"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </template>
                        </div>
                        <div slot="footer" class="text-center">
                            <base-button @click="submitKelompok()" nativeType="submit" type="primary" class="text-uppercase">Ubah</base-button>
                        </div>
                    </card>
                </div>
            </div>
        </div>
        <!-- Card -->
        <!-- Card Table -->
        <template>
            <div>
                <div class="container-fluid mt-3 bg-primary">
                    <div class="row">
                        <div class="col">
                            <anggota-table title="Anggota Kelompok" :id_kelompok="user.kelompok_id"></anggota-table>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <!-- Card Table -->
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
  import AnggotaTable from './Tables/AnggotaTable'
  export default {
    name: 'kelompok',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    data() {
      return {
        errors: '',
        success: '',
        kel: {
          kelompok_id: '',
          nama_kelompok: '',
          ketua_kelompok: '',
          bendahara_kelompok: '',
          humas_kelompok: '',
        },
      }
    },
    mounted() {
        this.getData();
    },
    methods:{
        async getData() {
            await axios.get(`apikelompok/${this.user.kelompok_id}`)
                .then((response) => {
                this.kel = response.data.data;
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
        async submitKelompok() {
            this.errors = '';
            this.success = '';
            this.kel.kelompok_id = this.user.kelompok_id;
            // console.log(this.kel);
            let credentials = this.kel;
            if(this.kel.nama_kelompok != null && this.kel.nama_kelompok.length >= 1 && this.kel.ketua_kelompok != null  && this.kel.ketua_kelompok.length >= 1 && this.kel.bendahara_kelompok != null  && this.kel.bendahara_kelompok.length >= 1 && this.kel.humas_kelompok != null  && this.kel.humas_kelompok.length >= 1){
                await axios.put(`apikelompok/store`, credentials)
                .then((response) => {
                    this.success = 'Informasi berhasil diubah!';
                })
                .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
                });
            }
            else {
                this.errors = 'Harap isi semua form dengan benar!';
            }
            
        }
    },
    components: {
      AnggotaTable
    }
  };
</script>
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
