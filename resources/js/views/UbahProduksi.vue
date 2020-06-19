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
                        <!-- <h1 class="display-2 text-white">Ubah Produksi</h1> -->
                        <p class="text-white mt-0 mb-3">Silahkan isi form berikut untuk melakukan perubahan</p>
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
                                    <h3 class="mb-0">Informasi Produksi</h3>
                                </div>
                            </div>
                        </div>
                        <div slot="body">
                            <template>
                                <form @submit.prevent="submitProduksi" role="form">
                                    <!-- Data Produksi -->
                                    <div class="pl-lg-4">
                                        <base-alert v-if="errors.length" class="px-lg-5" type="warning" dismissible>
                                            <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </base-alert>
                                        <!-- <base-input alternative=""
                                                    label="Nama Ikan"
                                                    placeholder="Masukkan Nama Ikan"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.nama_ikan"
                                        /> -->
                                        <!-- <div>
                                            <div class="row mb-3">
                                                <div class="col-lg-12">
                                                    <div class="form-control-label">Nama Ikan</div>
                                                    <div class="round">
                                                        <multiselect v-model="model.nama_ikan" 
                                                                    :options="ikans" :searchable="true" 
                                                                    :close-on-select="true" 
                                                                    :show-labels="false" 
                                                                    :allow-empty="false" 
                                                                    placeholder="Nama Ikan">
                                                        </multiselect>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        
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
                                                    label="Tanggal Cuci"
                                                    placeholder="Masukkan Tanggal Cuci"
                                                    input-classes="form-control-alternative"
                                                    type="date"
                                                    v-model="model.tanggal_cuci"

                                        />
                                        <base-input alternative=""
                                                    label="Tanggal Pindah"
                                                    placeholder="Masukkan Tanggal Pindah"
                                                    input-classes="form-control-alternative"
                                                    type="date"
                                                    v-model="model.tanggal_pindah"

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
                                                <div class="form-control-label">Lokasi Saat Ini</div>
                                                <div class="round">
                                                    <multiselect @input="opt => model.keramba_sesudah = opt.id" 
                                                                v-model="keramba"
                                                                :value="keramba"
                                                                :close-on-select="true" 
                                                                track-by="id"
                                                                label="nama_keramba"
                                                                placeholder="Pilih Lokasi Keramba"
                                                                :options="kerambas"
                                                                :searchable="true"
                                                                :allow-empty="false"
                                                                :show-labels="false">
                                                    </multiselect>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </template>
                        </div>
                        <div slot="footer" class="text-center d-flex">
                            <!-- <router-link to="/produksi" class="btn btn-link text-uppercase">Batal</router-link> -->
                            <a @click="$router.go(-1)" class="btn btn-link text-uppercase text-primary">Batal</a>
                            <base-button @click="submitProduksi()" nativeType="submit" type="primary" class="text-uppercase ml-auto">Simpan</base-button>
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
    name: 'ubah',
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
        ikans: [
            'Kerapu Cantang',
            'Kerapu Macan'
        ],
        ikan: {
            nama_ikan: ''
        },
        model: {
            jumlah_ikan: '',
            panjang_ikan: '',
            berat_ikan: '',
            tanggal_cuci: '',
            tanggal_pindah: '',
            keramba_sesudah: '',
            kelompok_id: '',
            user_id: ''
        }
      }
    },
    created() {
        this.getProduksi();
        this.model.kelompok_id = this.user.kelompok_id;
        this.model.user_id = this.user.id;
    },
    methods:{
        async getProduksi() {
            let id = this.user.kelompok_id;
            await axios.all([
                axios.get(`apisubproduksilog/whereid?subproduksi=${this.$route.params.id}`),
                axios.get(`apikeramba/where?kelompok=${id}`)
            ])
            .then(axios.spread((responseProd, responseKeramba) => {
                this.model = responseProd.data.data;
                console.log(this.model);
                this.kerambas = responseKeramba.data;
            }))
            .catch(function (error) {
                console.log('Fetch Data Produksi Error!');
            });
        },
        async submitProduksi(){
            this.errors = '';
            this.model.id = this.model.subproduksi_id;
            if (!this.model.jumlah_ikan || !this.model.panjang_ikan || !this.model.berat_ikan || !this.model.tanggal_cuci || !this.model.tanggal_pindah || !this.model.keramba_sesudah || !this.keramba) {
                this.errors = 'Harap isi semua form dengan benar!';
            }
            else {
            let credentials = this.model;
            await axios.put('apisubproduksi/update', credentials)
            .then(() =>{
                    this.$router.go(-1);
                })
            .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
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