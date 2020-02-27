<template>
    <div>
        <base-header type="gradient-primary" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Buttons -->
            <div class="row">
                <router-link to="/tebar" class="col-6">
                    <stats-card title="Penebaran Ikan"
                                type="gradient-orange"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </router-link>
                <router-link to="/cuci" class="col-6">
                    <stats-card title="Pencucian Ikan"
                                type="gradient-green"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </router-link>
            </div>
            <div class="row mt-3">
                <router-link to="/pindah" class="col-6">
                    <stats-card title="Pemindahan Ikan"
                                type="gradient-info"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >
                    </stats-card>
                </router-link>
                <router-link to="/panen" class="col-6">
                    <stats-card title="Panen Produksi"
                                type="gradient-red"
                                icon="ni ni-active-40"
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
                <p class="card-text font-weight-bold mt-2">Ukuran: {{produksi.panjang_ikan}} cm
                    <br>
                    Jumlah: {{produksi.jumlah_ikan}} Ekor
                    <br>
                    Tanggal Tebar: {{produksi.tanggal_tebar}}
                    <br>
                    Terakhir Mencuci: {{produksi.tanggal_cuci}}
                    <br>
                    Terakhir Pindah: {{produksi.tanggal_pindah}}
                </p>
                <form class="row align-items-center px-3" action="" method="post">
                    <button @click="showSensor(produksi.id)" type="button" class="col btn btn-primary">Informasi Sensor</button>
                </form>
            </div>
            <div class="d-flex justify-content-end">
                <base-pagination-dua  :pagination="meta"
                        @paginate="getProduksi()"
                        :offset="1">
                </base-pagination-dua>
            </div>
            <div>
                <modal :show.sync="showModal">
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
                        <base-button type="secondary" @click="showModal = false">Kembali</base-button>
                    </template>
                </modal>
            </div>
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
        showModal: false,
        offset: 4,
        produksis: [],
        produksi: {
          id: '',
          nama_ikan: '',
          jumlah_ikan: '',
          panjang_ikan: '',
          tanggal_tebar: '',
          tanggal_panen: '',
          tanggal_cuci: '',
          tanggal_pindah: '',
          status_panen: '',
          keramba_id: ''
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
        submit() {

        },
        async getProduksi() {
            await axios.get(`apiproduksi?page=${this.meta.current_page}`)
                .then((response) => {
                    this.produksis = response.data.data;
                    this.meta = response.data.meta;
                    this.links = response.data.links;
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
        showSensor(id){
            this.showModal = true;
            axios.all([
                axios.get(`apisensorsuhu/where?keramba=${id}`),
                axios.get(`apisensordo/where?keramba=${id}`),
                axios.get(`apisensorhumtemp`)
            ])
            .then(axios.spread((responseSuhu, responseDo, responseHumTemp) => {
                this.sensorSuhu = responseSuhu.data;
                console.log(this.sensorSuhu);
                this.sensorDo = responseDo.data;
                console.log(this.sensorDo);
                this.sensorHumTemp = responseHumTemp.data;
                console.log(this.sensorHumTemp);
            }))
            .catch(function (error) {
                console.log('Fetch Sensor Error!');
            });
        }

    }
  }
</script>
<style></style>
