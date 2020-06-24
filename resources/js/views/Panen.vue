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
                        <!-- <h1 class="display-2 text-white">Panen Produksi</h1> -->
                        <p class="text-white mt-0 mb-3">Silahkan isi form berikut untuk melakukan panen</p>
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
                                        <base-alert v-if="errors.length" class="px-lg-5" type="warning" dismissible>
                                            <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </base-alert>

                                        <base-input alternative=""
                                                    label="Jumlah Ikan Yang Akan Dipanen"
                                                    placeholder="Masukkan Jumlah Ikan"
                                                    input-classes="form-control-alternative"
                                                    type="number"
                                                    v-model="model.jumlah_ikan_akhir"

                                        />
                                        <base-input alternative=""
                                                    label="Ukuran Ikan Terakhir (cm)"
                                                    placeholder="Masukkan Ukuran Ikan (cm)"
                                                    input-classes="form-control-alternative"
                                                    type="number"
                                                    v-model="model.panjang_ikan_akhir"

                                        />
                                        <base-input alternative=""
                                                    label="Berat Ikan Terakhir (gram)"
                                                    placeholder="Masukkan Berat Ikan (gram)"
                                                    input-classes="form-control-alternative"
                                                    type="number"
                                                    v-model="model.berat_ikan_akhir"

                                        />
                                        <base-input alternative=""
                                                    label="Tanggal Panen"
                                                    placeholder="Masukkan Tanggal Panen"
                                                    input-classes="form-control-alternative"
                                                    type="date"
                                                    v-model="model.tanggal_panen"

                                        />
                                    </div>
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
                                </form>
                            </template>
                        </div>
                        <div slot="footer" class="text-center d-flex">
                            <!-- <router-link to="/produksi" class="btn btn-link text-uppercase">Batal</router-link> -->
                            <a @click="$router.go(-1)" class="btn btn-link text-uppercase text-primary">Batal</a>
                            <base-button @click="showPanen()" nativeType="submit" type="primary" class="text-uppercase ml-auto">Panen</base-button>
                        </div>
                    </card>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div>
            <modal :show.sync="showModal" gradient="danger" type="danger">
                <template slot="header">
                    <h3 class="modal-title font-weight-light" id="exampleModalLabel">Lakukan Panen</h3>
                </template>
                <template slot="body">
                    <form @submit.prevent="submitProduksi()" role="form">
                        <h2 class="text-white mb-4">Apakah Anda yakin ingin melakukan panen?</h2>
                        <p>Jika sudah dipanen proses produksi selesai dan tidak dapat dikembalikan</p>
                    </form>
                </template>
                <template slot="footer">
                    <base-button type="secondary" @click="submitProduksi()" nativeType="submit" class="text-uppercase">Panen</base-button>
                    <base-button type="link" @click="showModal = false" class="text-white text-uppercase ml-auto">Batal</base-button>
                </template>
            </modal>
        </div>
        <!-- End Modal -->
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
  import Multiselect from 'vue-multiselect'
  export default {
    name: 'panen',
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
        showModal: false,
        kerambas: [],
        keramba: {
        },
        ikans: [
            'Kerapu Cantang',
            'Kerapu Macan'
        ],
        ikan: {
            nama_ikan: ''
        },
        getModel:{
            id: '',
            jumlah_ikan: '',
            jumlah_ikan_akhir: '',
            panjang_ikan: '',
            panjang_ikan_akhir: '',
            berat_ikan: '',
            berat_ikan_akhir: '',
            tanggal_panen: '',
            status_panen: '',
            kelompok_id: '',
            user_id: ''
        },
        model: {
            id: '',
            jumlah_ikan_akhir: '',
            panjang_ikan_akhir: '',
            berat_ikan_akhir: '',
            tanggal_panen: '',
            status_panen: '',
            produksi_id: '',
        }
      }
    },
    created() {
        this.getProduksi();
    },
    methods:{
        async getProduksi() {
            let id = this.user.kelompok_id;
            await axios.all([
                axios.get(`apisubproduksi/${this.$route.params.id}`),
                axios.get(`apikeramba/where?kelompok=${id}`)
            ])
            .then(axios.spread((responseProd, responseKeramba) => {
                this.getModel = responseProd.data.data;
                // console.log(this.getModel);
                this.model.id = this.getModel.id;
                this.model.jumlah_ikan_akhir = this.getModel.jumlah_ikan;
                this.model.panjang_ikan_akhir = this.getModel.panjang_ikan;
                this.model.berat_ikan_akhir = this.getModel.berat_ikan;
                this.model.produksi_id = this.getModel.produksi_id;
                this.kerambas = responseKeramba.data;
            }))
            .catch(function (error) {
                console.log('Fetch Data Produksi Error!');
            });
        },
        async submitProduksi(){
            this.errors = '';
            this.showModal = false;
            this.model.status_panen = "Panen";
            let credentials = this.model;
            console.log(credentials);
            await axios.put('apisubproduksi/panen', credentials)
            .then(() =>{
                    this.$router.replace({
                        name: 'produksi'
                    })
                })
            .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
                    window.scrollTo(0,0);
                })
        },
        showPanen(){
            if (!this.model.jumlah_ikan_akhir || this.model.jumlah_ikan_akhir < 0 || !this.model.panjang_ikan_akhir || this.model.panjang_ikan_akhir < 0 || !this.model.berat_ikan_akhir || this.model.berat_ikan_akhir || !this.model.tanggal_panen) {
                this.errors = 'Harap isi semua form dengan benar!';
                window.scrollTo(0,0);
            }
            else{
                this.showModal = true;
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
