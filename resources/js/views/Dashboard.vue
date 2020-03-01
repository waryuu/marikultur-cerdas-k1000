<template>
    <div>
        <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Buttons -->
            <div class="row">
                <router-link to="/tebar" class="col-6">
                    <stats-card title="Penebaran Ikan"
                                type="gradient-orange"
                                icon="fas fa-fish"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </router-link>
                <router-link to="/cuci" class="col-6">
                    <stats-card title="Pencucian Ikan"
                                type="gradient-green"
                                icon="fas fa-bath"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </router-link>
            </div>
            <div class="row mt-3">
                <router-link to="/pindah" class="col-6">
                    <stats-card title="Pemindahan Ikan"
                                type="gradient-info"
                                icon="fas fa-luggage-cart"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </router-link>
                <router-link to="/panen" class="col-6">
                    <stats-card title="Panen Produksi"
                                type="gradient-red"
                                icon="fas fa-calendar-check"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </router-link>
            </div>
        </base-header>
        <!-- Card stats -->
        <div class="container-fluid mt--7">
            <div class="d-flex justify-content-end">
                <base-pagination-dua  :pagination="meta"
                        @paginate="getProduksi()"
                        :offset="1">
                </base-pagination-dua>
            </div>
            <div v-for="produksi in produksis" v-bind:key="produksi.id" class="card shadow card-body mb-3">
                <h3 class="card-title">{{produksi.nama_ikan}}</h3>
                <h4 class="card-subtitle text-muted">Keramba {{produksi.keramba_id}}</h4>
                <h4 class="card-text font-weight-bold mt-2">
                    Jumlah: {{produksi.jumlah_ikan}} Ekor
                    <br>
                    Ukuran: {{produksi.panjang_ikan}} cm
                    <br>
                    Berat: {{produksi.berat_ikan}} gram
                    <br>
                    Tanggal Tebar: {{produksi.tanggal_tebar}}
                    <br>
                    Terakhir Mencuci: {{produksi.tanggal_cuci}}
                    <br>
                    Terakhir Pindah: {{produksi.tanggal_pindah}}
                </h4>
                <form class="row align-items-center px-3" action="" method="post">
                    <button @click="showSensor(produksi.id)" type="button" class="col btn btn-primary">Sensor IoT</button>
                    <button @click="showPakan(produksi.id)" type="button" class="col btn btn-secondary">Pakan Otomatis</button>
                </form>
            </div>
            <div class="d-flex justify-content-end">
                <base-pagination-dua  :pagination="meta"
                        @paginate="getProduksi()"
                        :offset="1">
                </base-pagination-dua>
            </div>
            <!-- Modal Sensor -->
            <div>
                <modal :show.sync="showModalSensor">
                    <template slot="header">
                        <h4 class="modal-title" id="exampleModalLabel">Informasi Sensor</h4>
                    </template>
                    <div>
                            <p class="text-muted">Suhu Air</p>
                            <p class="font-weight-bold">{{sensorSuhu.suhu_air}} &#176; C</p>
                    </div>
                    <div>
                            <p class="text-muted">Oksigen Terlarut</p>
                            <p class="font-weight-bold">{{sensorDo.do_air}}</p>
                    </div>
                    <div>
                            <p class="text-muted">Kelembaban</p>
                            <p class="font-weight-bold">{{sensorHumTemp.humidity}}</p>
                            <p class="text-muted">Temperatur Udara</p>
                            <p class="font-weight-bold">{{sensorHumTemp.temperature}} &#176; C</p>
                    </div>
                    <template slot="footer">
                        <base-button type="secondary" @click="showModalSensor = false">Kembali</base-button>
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
                    <div>
                            <p class="text-muted">Baterai</p>
                            <p class="font-weight-bold">{{sensorPakan.baterai_pakan}} &#37;</p>
                    </div>
                    <template slot="footer">
                        <base-button type="secondary" @click="showModalPakan = false">Kembali</base-button>
                    </template>
                </modal>
            </div>
            <!-- End Modal Pakan -->
        </div>
        <!-- End card stats -->

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
            await axios.get(`apiproduksi?page=${this.meta.current_page}`)
                .then((response) => {
                    this.produksis = response.data.data;
                    this.meta = response.data.meta;
                    this.links = response.data.links;
                    console.log(this.meta);
                })
                .catch(() => {
                    console.log('Fetch Data Produksi Error!');
                });
        },
        async showSensor(id){
            this.showModalSensor = true;
            await axios.all([
                axios.get(`apisensorsuhu/where?keramba=${id}`),
                axios.get(`apisensordo/where?keramba=${id}`),
                axios.get(`apisensorhumtemp`)
            ])
            .then(axios.spread((responseSuhu, responseDo, responseHumTemp) => {
                this.sensorSuhu = responseSuhu.data;
                this.sensorDo = responseDo.data;
                this.sensorHumTemp = responseHumTemp.data;
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
