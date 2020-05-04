<template>
    <div>
        <base-header type="gradient-primary" class="mb-8 pt-5 pb-5 pt-md-8">
            <!-- Buttons -->
            <div class="card">
                <div class="row">
                    <div class="col">
                        <div class="align-items-center mt-3 mb-3">
                            <h3 class="card-title text-center text-primary mb-0"><i class="fas fa-map-marker-alt"></i> Kepulauan Seribu</h3>
                        </div>
                    </div>
                </div>
                <div class="row ml-4 mr-4">
                    <div class="col">
                        <div class="card border-0 mt-3 mb-3">
                            <h3 class="card-title mb-0"><i class="fas fa-temperature-low"></i> Suhu</h3>
                            <h3 class="card-title mb-0"><i class="fas fa-hand-holding-water"></i> Kelembaban</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-0 mt-3 mb-3">
                            <h3 class="card-title text-right mb-0">{{sensorHumTemp.temperature}}&#176;C</h3>
                            <h3 class="card-title text-right mb-0">{{sensorHumTemp.humidity}}%</h3>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 mb-3 ml-2 mr-2">
                    <router-link to="/tebar" class="col">
                        <div class="card border-0 align-items-center">
                            <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-red">
                                <i class="fas fa-fish"></i>
                            </div>
                            <h4 class="card-title text-center font-weight-light mb-0">Penebaran</h4>
                        </div>
                    </router-link>
                    <router-link to="/cuci" class="col">
                        <div class="card border-0 align-items-center">
                            <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-red">
                                <i class="fas fa-user-edit"></i>
                            </div>
                            <h4 class="card-title text-center font-weight-light mb-0">Aktivitas</h4>
                        </div>
                    </router-link>
                    <router-link to="/panen" class="col">
                        <div class="card border-0 align-items-center">
                            <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-red">
                                <i class="fas fa-clipboard-list"></i>
                            </div>
                            <h4 class="card-title text-center font-weight-light mb-0">Panen</h4>
                        </div>
                    </router-link>
                </div>
            </div>
        </base-header>
        <!-- Card Produksi -->
        <div class="container-fluid mt--7">
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
                                <div class="col">
                                    <h4 class="text-center text-uppercase font-weight-light">
                                        Berat
                                    </h4>
                                    <h3 class="text-center">
                                        {{produksi.berat_ikan}} Gram
                                    </h3>
                                </div>

                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <h4 class="text-left  font-weight-light">
                                        Tanggal Tebar
                                    </h4>
                                </div>
                                <div class="col">
                                    <h4 class="text-right font-italic font-weight-light">
                                        {{produksi.tanggal_tebar}}
                                    </h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h4 class="text-left font-weight-light">
                                        Tanggal Mencuci
                                    </h4>
                                </div>
                                <div class="col">
                                    <h4 class="text-right font-italic font-weight-light">
                                        {{produksi.tanggal_cuci}}
                                    </h4>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <h4 class="text-left font-weight-light">
                                        Tanggal Pindah
                                    </h4>
                                </div>
                                <div class="col">
                                    <h4 class="text-right font-italic font-weight-light">
                                        {{produksi.tanggal_pindah}}
                                    </h4>
                                </div>
                            </div>
                            <form class="row align-items-center px-3" action="" method="post">
                                <button @click="showSensor(produksi.id)" type="button" class="col btn btn-primary">Sensor IoT</button>
                            </form>
                        </div>
                        <div slot="footer" class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getProduksi()"
                                    :offset="1">
                            </base-pagination-dua>
                        </div>
                        <!-- Modal Sensor -->
                        <div>
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
                        </div>
                        <!-- End Modal Sensor -->
                        <!-- Modal Pakan -->
                        <div>
                            <modal :show.sync="showModalPakan">
                                <template slot="header">
                                    <h4 class="modal-title" id="exampleModalLabel">Informasi Pakan Otomatis</h4>
                                </template>
                                <template slot="body">
                                    <div>
                                            <p class="text-muted">Baterai</p>
                                            <p class="font-weight-bold">{{sensorPakan.baterai_pakan}} &#37;</p>
                                    </div>
                                </template>
                                <template slot="footer">
                                    <base-button type="secondary" @click="showModalPakan = false">Kembali</base-button>
                                </template>
                            </modal>
                        </div>
                        <!-- End Modal Pakan -->
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
    name: 'beranda',
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
          jumlah_ikan: '',
          panjang_ikan: '',
          berat_ikan: '',
          tanggal_tebar: '',
          tanggal_panen: '',
          tanggal_cuci: '',
          tanggal_pindah: '',
          status_panen: '',
          keramba_id: ''
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
        sensorHumTemp: {
          id: '',
          humidity: '',
          temperature: ''
        },
        sensorPakan: {
          id: '',
          baterai_pakan: '',
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
    mounted() {
        this.getProduksi();
    },
    methods:{
        async getProduksi() {
            await axios.all([
                axios.get(`apiproduksi?page=${this.meta.current_page}`),
                axios.get(`apisensorhumtemp`)
            ])
            .then(axios.spread((responseProd, responseHumTemp) => {
                this.produksis = responseProd.data.data;
                this.sensorHumTemp = responseHumTemp.data;
                this.meta = responseProd.data.meta;
                this.links = responseProd.data.links;
            }))
            .catch(function (error) {
                console.log('Fetch Data Produksi Error!');
            });
        },
        async showSensor(id){
            this.showModalSensor = true;
            await axios.all([
                axios.get(`apisensorsuhu/where?keramba=${id}`),
                axios.get(`apisensordo/where?keramba=${id}`)
            ])
            .then(axios.spread((responseSuhu, responseDo) => {
                this.sensorSuhu = responseSuhu.data;
                this.sensorDo = responseDo.data;
            }))
            .catch(function (error) {
                console.log('Fetch Sensor Error!');
            });
        },
        async showPakan(id){
            this.showModalPakan = true;
            await axios.get(`apipakan/where?keramba=${id}`)
                .then((response) => {
                    this.sensorPakan = response.data;
                })
                .catch(() => {
                    console.log('Fetch Pakan Error!');
                });
        }

    }
  }
</script>
<style></style>
