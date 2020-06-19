<template>
    <div>
        <base-header class="header pb-7 pt-4 pt-lg-7 d-flex align-items-center"
                     style="min-height: 300px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-8"></span> -->
            <!-- Header container -->
            <!-- <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7">
                        <h1 class="display-2 text-white">Produksi</h1>
                    </div>
                </div>
            </div> -->
            <!-- Card Total Produksi -->
            <div class="row">
                <div class="col-lg-6 mb-3">
                    <card shadow :noBody="true">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Total Produksi</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="table-responsive">
                                <base-table class="table align-items-center table-flush"
                                            thead-classes="thead-light"
                                            tbody-classes="list">
                                    <template slot="columns">
                                        <th>Bulan ini</th>
                                        <th>Tahun ini</th>
                                    </template>
                                    <template slot="object">
                                        <td>
                                            <span class="font-weight-bold">{{totalProd.produksibulanini}}</span>
                                        </td>
                                        <td>
                                            <span class="font-weight-bold">{{totalProd.produksitahunini}}</span>
                                        </td>
                                    </template>
                                </base-table>
                            </div>
                        </div>
                        <div slot="footer" class="d-flex justify-content-end">
                            <!-- <a href="/produksi">Lihat Semua Produksi</a> -->
                        </div>
                    </card>
                </div>
            <!-- End card Total Produksi -->
            <!-- Card Total Ikan -->
                <div class="col-lg-6 mb-3">
                    <card shadow :noBody="true">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Total Ikan Saat Ini</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div class="table-responsive">
                            <base-table class="table align-items-center table-flush"
                                        thead-classes="thead-light"
                                        tbody-classes="list"
                                        :data="totalIkans">
                                <template slot="columns">
                                    <th>Nama Ikan</th>
                                    <th>Jumlah Ikan</th>
                                </template>
                                <template slot-scope="{row}">
                                    <td scope="row">
                                        <span class="font-weight-bold">{{row.nama_ikan}}</span>
                                    </td>
                                    <td>
                                        <span class="font-weight-bold">{{row.total_ikan}}</span>
                                    </td>
                                </template>
                            </base-table>
                        </div>
                        </div>
                        <div slot="footer" class="d-flex justify-content-end">
                            Total {{totalIkan}} Ikan
                        </div>
                    </card>
                </div>
            </div>
            <!-- End card Total Ikan -->
        </base-header>

        <!-- Card Produksi -->
        <div class="container-fluid mt--7 bg-primary">
            <!-- <div class="row mb-3">
                <div class="col text-left">
                        <router-link to="/beranda" class="btn btn-secondary text-uppercase">
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
                                    <h3 class="mb-0">Daftar Produksi</h3>
                                </div>
                                <div v-if="produksis.length" class="col-4 d-flex align-items-center justify-content-end">
                                   <base-pagination-dua  :pagination="meta"
                                        @paginate="getProduksi()"
                                        :offset="0">
                                    </base-pagination-dua>
                                </div>
                            </div>
                        </div>
                        <div v-if="!produksis.length" class="card card-body rounded-0 row">
                            <div class="col">
                                <base-alert type="info">
                                    <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                    <span class="alert-inner--text"><strong>Belum ada produksi!</strong> Harap lakukan penebaran terlebih dahulu</span>
                                </base-alert>
                            </div>
                        </div>
                        <div v-for="produksi in produksis" v-bind:key="produksi.id" class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-7">
                                    <h3 class="card-title text-left mb-0">
                                        {{produksi.nama_ikan}}
                                    </h3>
                                </div>
                                <div class="col">
                                    <h5 class="card-title text-right text-muted font-weight-light mb-0">
                                        ID-{{produksi.id}}
                                    </h5>
                                </div>
                            </div>
                            <!-- <div class="row mt-3 mb-2">
                                <div class="col">
                                    <h3 class="card-subtitle text-left text-muted">
                                        Keramba {{produksi.keramba_id}}
                                    </h3>
                                </div>
                            </div> -->
                            <div class="row mt-2">
                                <div class="col">
                                    <h4 class="text-center text-uppercase font-weight-light">
                                        Jumlah Awal
                                    </h4>
                                    <h3 class="text-center">
                                        {{produksi.jumlah_ikan_awal}} Ekor
                                    </h3>
                                </div>
                                <div class="col">
                                    <h4 class="text-center text-uppercase font-weight-light">
                                        Jumlah Terkini
                                    </h4>
                                    <h3 class="text-center">
                                        {{produksi.jumlah_terkini}} Ekor
                                    </h3>
                                </div>
                                <!-- <div class="col">
                                    <h4 class="text-center text-uppercase font-weight-light">
                                        Ukuran
                                    </h4>
                                    <h3 class="text-center">
                                        {{produksi.panjang_ikan_awal}} cm
                                    </h3>
                                </div>
                                <div class="col">
                                    <h4 class="text-center text-uppercase font-weight-light">
                                        Berat
                                    </h4>
                                    <h3 class="text-center">
                                        {{produksi.berat_ikan_awal}} Gram
                                    </h3>
                                </div> -->

                            </div>
                            <div class="row mt-3 mb-3">
                                <div class="col">
                                    <h4 class="text-left font-weight-light">
                                        Tanggal Tebar
                                    </h4>
                                </div>
                                <div class="col">
                                    <h4 class="text-right font-italic font-weight-light">
                                        {{produksi.tanggal_tebar}}
                                    </h4>
                                </div>
                            </div>
                            <!-- <div class="row">
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
                            </div> -->
                            <!-- <div class="row mb-3">
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
                            </div> -->
                            <router-link :to="{ name: 'produksi-detail', params: { id: produksi.id }}" class="btn btn-primary">
                                <span>Detail Produksi</span>
                            </router-link>
                            <!-- <form class="row align-items-center px-3 mt-3" action="" method="post">
                                <button @click="showSensor(produksi.id)" type="button" class="col btn btn-primary">Sensor IoT</button>
                            </form> -->
                        </div>
                        <div slot="footer" class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getProduksi()"
                                    :offset="0"
                                    v-if="produksis.length">
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
  import {mapGetters} from 'vuex'
  export default {
    name: 'produksi',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    data() {
      return {
        errors: '',
        showModalSensor: false,
        showModalPakan: false,
        offset: 4,
        totalProd: '',
        totalIkans: [],
        totalIkan: '',
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
          jumlah_terkini: '',
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
        this.getSummary();
    },
    methods:{
        async getProduksi(){
            await axios.get(`apiproduksi/wherepembesaran?user=${this.user.id}&page=${this.meta.current_page}`)
                .then((response) => {
                    this.produksis = response.data.data;
                    // console.log(this.produksis);
                    this.meta = response.data.meta;
                    this.links = response.data.links;
                    console.log(this.produksis);
                })
                .catch(() => {
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
        },
        async getSummary() {
            await axios.all([
                axios.get(`apiproduksi/wheretotalproduksi?user=${this.user.id}`),
                axios.get(`apisubproduksi/wheretotalikan?user=${this.user.id}`)
            ])
            .then(axios.spread((responseProd, responseIkan) => {
                this.totalProd = responseProd.data;
                this.totalIkans = responseIkan.data.user;
                this.totalIkan = responseIkan.data.total;
                // console.log(responseProd.data);
                // console.log(responseIkan.data.user);
            }))
            .catch(function (error) {
                console.log('Fetch Data Produksi Error!');
            });
        },

    }
  }
</script>
<style>
    .alert{
        border-radius: .25rem;
    }
</style>
