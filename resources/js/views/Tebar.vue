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
                        <p class="text-white mt-0 mb-3">Silahkan isi form berikut untuk melakukan penebaran</p>
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
                                    <h3 class="mb-0">Informasi Penebaran</h3>
                                </div>
                            </div>
                        </div>
                        <div slot="body">
                            <template>
                                <form @submit.prevent="submitPenebaran" role="form">
                                    <!-- Data Penebaran -->
                                    <div class="pl-lg-4">
                                        <!-- <base-input alternative=""
                                                    label="Nama Ikan"
                                                    placeholder="Masukkan Nama Ikan"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.nama_ikan"
                                        /> -->
                                        <base-alert v-if="errors.length" class="px-lg-5" type="warning" dismissible>
                                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </base-alert>
                                        <!-- <div class="row mb-3">
                                            <div class="col-lg-12">
                                                <div class="form-control-label">Nama Ikan</div>
                                                <div class="round">
                                                    <multiselect v-model="model.nama_ikan" 
                                                                :options="ikans" 
                                                                :searchable="true" 
                                                                :close-on-select="true" 
                                                                :show-labels="false" 
                                                                :allow-empty="false" 
                                                                placeholder="Nama Ikan">
                                                    </multiselect>
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="row mb-3">
                                            <div class="col-lg-12">
                                                <div class="form-control-label">Nama Ikan</div>
                                                <div class="round">
                                                    <multiselect @input="opt => model.nama_ikan = opt.nama_ikan" 
                                                                v-model="ikan"
                                                                :value="ikan"
                                                                track-by="id"
                                                                label="nama_ikan"
                                                                :close-on-select="true" 
                                                                placeholder="Pilih Nama Ikan"
                                                                :options="ikans"
                                                                :searchable="true"
                                                                :allow-empty="false"
                                                                :show-labels="false">
                                                    </multiselect>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-muted mb-3">
                                            <small>
                                                <span class="font-italic">Tambah ikan?</span>
                                                <router-link to="/ikan"> Klik disini</router-link>
                                            </small> 
                                        </div>
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
                                    
                                    <!-- Keramba -->
                                    <!-- <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-control-label">Lokasi Tebar</div>
                                                <select v-model="model.keramba_id" class="input-group-alternative mb-3 form-control">
                                                    <option disabled value="">Pilih Lokasi Tebar</option>
                                                    <option v-for="keramba in kerambas" v-bind:value="keramba.id">{{ keramba.nama_keramba }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- <multiselect v-model="model.keramba_id" deselect-label="Anda memilih opsi ini" track-by="id" :selected="id" key="id" label="nama_keramba" placeholder="Select one" :options="kerambas" :searchable="true" :allow-empty="false">
                                    </multiselect> -->
                                        <div class="row mb-3">
                                            <div class="col-lg-12">
                                                <div class="form-control-label">Lokasi Tebar</div>
                                                <div class="round">
                                                    <multiselect @input="opt => model.keramba_id = opt.id" 
                                                                v-model="keramba"
                                                                :value="keramba"
                                                                track-by="id"
                                                                label="nama_keramba"
                                                                :close-on-select="true" 
                                                                placeholder="Pilih Lokasi Keramba"
                                                                :options="kerambas"
                                                                :searchable="true"
                                                                :allow-empty="false"
                                                                :show-labels="false">
                                                    </multiselect>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-muted">
                                            <small>
                                                <span class="font-italic">Tambah keramba?</span>
                                                <router-link to="/keramba"> Klik disini</router-link>
                                            </small> 
                                        </div>
                                    </div>
                                </form>
                            </template>
                        </div>
                        <div slot="footer" class="text-center d-flex">
                            <router-link to="/beranda" class="btn btn-link text-uppercase">Batal</router-link>
                            <base-button @click="submitPenebaran()" nativeType="submit" type="primary" class="text-uppercase ml-auto">Simpan</base-button>
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
    name: 'tebar',
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
        kerambas: [],
        keramba: '',
        ikans: [],
        ikan: '',
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
        this.getIkan();
        this.model.kelompok_id = this.user.kelompok_id;
        this.model.user_id = this.user.id;
        // console.log(this.keramba);
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
        async getIkan(){
            await axios.get(`apinamaikan`)
                .then((response) => {
                    this.ikans = response.data.data;
                    console.log(response.data);
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
        async submitPenebaran(){
            this.errors = '';
            if (!this.model.jumlah_ikan || this.model.jumlah_ikan <= 0 || !this.model.panjang_ikan || this.model.panjang_ikan <= 0 || !this.model.berat_ikan || this.model.berat_ikan <= 0 ) {
                this.errors = 'Harap isi semua form dengan benar!';
                window.scrollTo(0,0);
            }
            else{
                let credentials = this.model;
                console.log(credentials);
                await axios.post('apiproduksi/create', credentials)
                .then(() =>{
                        this.$router.replace({
                            name: 'beranda'
                        })
                    })
                .catch(() => {
                        this.errors = 'Harap isi semua form dengan benar!';
                        window.scrollTo(0,0);
                    })
            }
            
        },
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