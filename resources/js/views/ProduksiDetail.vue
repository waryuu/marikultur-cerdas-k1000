<template>
    <div>
        <base-header class="header pb-7 pt-4 pt-lg-7 d-flex align-items-center"
                     style="min-height: 100px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-8"></span> -->
            <!-- Header container -->
            <!-- <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Detail</h1>
                    </div>
                </div>
            </div> -->
        </base-header>

        <!-- Card Produksi -->
        <div class="container-fluid mt--7 bg-primary">
            <!-- <div class="row mb-3">
                <div class="col text-left">
                        <router-link to="/produksi" class="btn btn-secondary text-uppercase">
                            Kembali
                        </router-link>
                </div>
            </div> -->
            <!-- <div class="row">
                <div class="col">
                    <form class="form-inline mr-3 d-none d-flex ml-auto">
                        <div class="form-group mb-0">
                            <base-input placeholder="Cari"
                                        class="input-group-alternative"
                                        alternative=""
                                        addon-right-icon="fas fa-search">
                            </base-input>
                        </div>
                    </form>
                </div>
            </div> -->
            <div class="row">
                <div class="col">
                    <card shadow type="secondary" :noBody="true">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Detail produksi</h3>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-end">
                                   <base-pagination-dua  :pagination="meta"
                                        @paginate="getProduksi()"
                                        :offset="0">
                                    </base-pagination-dua>
                                </div>
                            </div>
                        </div>
                        <div v-for="produksi in produksis" v-bind:key="produksi.id">
                            <div v-if="produksi.jumlah_ikan != null && produksi.jumlah_ikan >= 1" class="card card-body rounded-0">
                                <div class="row">
                                    <div class="col-7">
                                        <h3 class="card-title text-left mb-0">
                                            {{produksi.nama_ikan}}
                                        </h3>
                                    </div>
                                    <div class="col">
                                        <h5 class="card-title text-right text-muted font-weight-light mb-0">
                                            ID-{{$route.params.id}}.{{produksi.id}}
                                        </h5>
                                    </div>
                                </div>
                                <div class="row mt-3 mb-2">
                                    <div class="col">
                                        <h3 class="card-subtitle text-left text-muted">
                                            {{produksi.nama_keramba}}
                                        </h3>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Jumlah
                                        </h4>
                                        <h3 class="text-center">
                                            {{produksi.jumlah_ikan}} Ekor
                                        </h3>
                                    </div>
                                    <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Ukuran
                                        </h4>
                                        <h3 class="text-center">
                                            {{produksi.panjang_ikan}} cm
                                        </h3>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Berat
                                        </h4>
                                        <h3 class="text-center">
                                            {{produksi.berat_ikan}} Gram
                                        </h3>
                                    </div>
                                    <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Pakan
                                        </h4>
                                        <h3 v-if="produksi.total_pakan" class="text-center">
                                            {{produksi.total_pakan}} Kg
                                        </h3>
                                        <h3 v-else class="text-center">
                                            Belum Ada
                                        </h3>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col">
                                        <h4 class="text-left font-weight-light">
                                            Terakhir Mencuci
                                        </h4>
                                    </div>
                                    <div v-if="produksi.tanggal_cuci" class="col">
                                        <h4 class="text-right font-italic font-weight-light">
                                            {{ produksi.tanggal_cuci | moment("DD MMM YYYY") }}
                                        </h4>
                                    </div>
                                    <div v-else class="col">
                                        <h4 class="text-right font-italic font-weight-light">
                                            Belum Pernah
                                        </h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h4 class="text-left font-weight-light">
                                            Terakhir Pindah
                                        </h4>
                                    </div>
                                    <div v-if="produksi.tanggal_pindah" class="col">
                                        <h4 class="text-right font-italic font-weight-light">
                                            {{ produksi.tanggal_pindah | moment("DD MMM YYYY") }}
                                        </h4>
                                    </div>
                                    <div v-else class="col">
                                        <h4 class="text-right font-italic font-weight-light">
                                            Belum Pernah
                                        </h4>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h4 class="text-left font-weight-light">
                                            Terakhir Makan
                                        </h4>
                                    </div>
                                    <div v-if="produksi.waktu_terakhir" class="col">
                                        <div class="row">
                                            <div class="col">
                                                <h4 class="text-right font-italic font-weight-light">
                                                    {{ produksi.waktu_terakhir | moment("[Pukul] HH:mm,") }}
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <h4 class="text-right font-italic font-weight-light">
                                                    {{ produksi.waktu_terakhir | moment("DD MMM YYYY") }}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="col">
                                        <h4 class="text-right font-italic font-weight-light">
                                            Belum Pernah
                                        </h4>
                                    </div>
                                </div>
                                <!-- Pembesaran -->
                                <div v-if="produksi.status_panen === 'Pembesaran' || produksi.status_panen === 'pembesaran'">
                                    <div class="row mb-3 mt-2 ml-1 mr-1">
                                        <div v-if="produksi.suhu_air != null && produksi.suhu_air.length" class="col card border-0 mr-1 bg-info" style="border-radius:0.25rem">
                                            <div class="row ml-1 mr-1 mt-2"><h3 class="card-title mb-0 text-white">Suhu Air</h3></div>
                                            <div class="row ml-1 mr-1 mb-2"><h4 class="card-title font-weight-light mb-0 text-white">{{produksi.suhu_air}} &#176; C</h4></div>
                                        </div>
                                        <div v-if="produksi.do_air != null && produksi.do_air.length" class="col card border-0 ml-1 bg-info" style="border-radius:0.25rem">
                                            <div class="row ml-1 mr-1 mt-2"><h3 class="card-title mb-0 text-white">Oksigen</h3></div>
                                            <div class="row ml-1 mr-1 mb-2"><h4 class="card-title font-weight-light mb-0 text-white">{{produksi.do_air}} ppm</h4></div>
                                        </div>
                                    </div>
                                    <!-- <form class="row align-items-center px-3 mt-3" action="" method="post">
                                        <button @click="showSensor(produksi.id)" type="button" class="col btn btn-primary">Detail Produksi</button>
                                    </form> -->
                                    <div>
                                        <!-- <form class="row align-items-center px-3" action="" method="post">
                                            <button @click="showSensor(produksi.keramba_sesudah)" type="button" class="col btn btn-secondary">Sensor IoT</button>
                                        </form> -->
                                        <div class="row mt-3 px-3">
                                                    <router-link :to="{ name: 'ubah', params: { id: produksi.id }}" class="col btn btn-primary">
                                                        Ubah
                                                    </router-link>
                                                    <router-link :to="{ name: 'pindah', params: { id: produksi.id }}" class="col btn btn-primary">
                                                        Pindah
                                                    </router-link>
                                        </div>
                                        <div class="row mt-3 px-3">
                                                    <router-link :to="{ name: 'pakan', params: { id: produksi.id }}" class="col btn btn-primary">
                                                        Pakan
                                                    </router-link>
                                                    <router-link :to="{ name: 'panen', params: { id: produksi.id }}" class="col btn btn-primary">
                                                        Panen 
                                                    </router-link>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Pembesaran -->
                                <!-- Panen -->
                                <div v-else>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <h4 class="text-left font-weight-light">
                                                Tanggal Panen
                                            </h4>
                                        </div>
                                        <div class="col">
                                            <h4 class="text-right font-italic font-weight-light">
                                                {{produksi.tanggal_panen}}
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <base-alert type="warning">
                                                <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                                <span class="alert-inner--text"><strong>Subproduksi sudah dipanen!</strong></span>
                                            </base-alert>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Panen -->
                            </div>
                            
                            
                        </div>
                        <div slot="footer" class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getProduksi()"
                                    :offset="0">
                            </base-pagination-dua>
                        </div>
                        <!-- Modal Sensor -->
                        <!-- <div>
                            <modal :show.sync="showModalSensor">
                                <template slot="header">
                                    <h3 class="modal-title font-weight-light" id="exampleModalLabel">Informasi Sensor</h3>
                                </template>
                                <template slot="body">
                                    <p class="text-muted">Suhu Air</p>
                                    <p class="font-weight-bold">{{sensorSuhu.suhu_air}} &#176; C</p>
                                    <p class="text-muted">Oksigen Terlarut</p>
                                    <p class="font-weight-bold">{{sensorDo.do_air}}</p>
                                </template>
                                <template slot="footer">
                                    <base-button type="link" @click="showModalSensor = false" class="text-uppercase">Kembali</base-button>
                                </template>
                            </modal>
                        </div> -->
                        <!-- End Modal Sensor -->
                    </card>
                </div>
            </div>
        </div>
        <!-- End card produksi -->

    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'produksi-detail',
    data() {
      return {
        errors: '',
        showModalSensor: false,
        showModalPakan: false,
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
          keramba_sesudah: '',
          waktu_terakhir: '',
          suhu_air: '',
          do_air: ''
        },
        cucis: [],
        cuci: {
            tanggal_cuci: '',
        },
        pindahs: [],
        pindah: {
            tanggal_pindah: '',
        },
        sensorSuhu: {
          id: '',
          suhu_air: '',
          keramba_id: ''
        },
        sensorDo: {
          id: '',
          do_air: '',
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
        links: {
            first: '',
            last: '',
            prev: '',
            next: ''
        },
      }
    },
    async mounted() {
        await this.getProduksi(this.$route.params.id);
    },
    methods:{
        async getProduksi(id) {
            await axios.all([
                axios.get(`apisubproduksi/where?produksi=${id}`),
            ])
            .then(axios.spread((responseProd) => {
                this.produksis = responseProd.data.data;
                this.meta = responseProd.data.meta;
                this.links = responseProd.data.links;
                console.log(this.produksis);
            }))
            .catch(function (error) {
                console.log('Fetch Data Produksi Error!');
            });
        },
        // async showSensor(id){
        //     this.showModalSensor = true;
        //     await axios.all([
        //         axios.get(`apisensorsuhu/where?keramba=${id}`),
        //         axios.get(`apisensordo/where?keramba=${id}`)
        //     ])
        //     .then(axios.spread((responseSuhu, responseDo) => {
        //         this.sensorSuhu = responseSuhu.data;
        //         this.sensorDo = responseDo.data;
        //     }))
        //     .catch(function (error) {
        //         console.log('Fetch Sensor Error!');
        //     });
        // }

    }
  }
</script>
<style>
    .alert{
        border-radius: .25rem;
    }
</style>
