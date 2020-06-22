<template>
    <div>
        <base-header type="gradient-primary" class="mb-8 pt-4 pb-4 pt-md-8">
            <!-- Buttons -->
            <div class="card">
                <!-- <div class="row">
                    <div class="col">
                        <div class="align-items-center mt-3 mb-3">
                            <h3 class="text-center text-primary mb-0"><i class="fas fa-map-marker-alt"></i> Kepulauan Seribu</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="align-items-center mt-3 mb-3 text-center">
                            <img src='https://www.bmkg.go.id/asset/img/weather_icon/ID/cerah%20berawan-pm.png' alt="..." class="mx-auto" style="width: 65px; height: 65px;">
                            <h4 class="mb-0 font-weight-light">Cerah Berawan</h4>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="row ml-4 mr-4">
                    <div class="col-8">
                        <div class="mt-3 mb-3">
                            <h3 class="mb-0 font-weight-light"><i class="fas fa-temperature-low"></i>Suhu</h3>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mt-3 mb-3">
                            <h3 class="text-right font-weight-light mb-0">{{sensorHumTemp.temperature}}&#176;C</h3>
                            <h3 class="text-right font-weight-light mb-0">{{sensorHumTemp.humidity}}%</h3>
                        </div>
                    </div>
                </div> -->
                <div class="row ml-3">
                    <div class="col">
                        <div class="mt-3">
                            <h2 class="mb-0">Menu Utama</h2>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 mb-3 ml-2 mr-2">
                    <router-link to="/tebar" class="col">
                        <div class="card border-0 align-items-center">
                            <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                <i class="fas fa-fish"></i>
                            </div>
                            <h3 class="card-title text-center font-weight-light mb-0">Penebaran</h3>
                        </div>
                    </router-link>
                    <router-link to="/produksi" class="col">
                        <div class="card border-0 align-items-center">
                            <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                <i class="fas fa-user-edit"></i>
                            </div>
                            <h3 class="card-title text-center font-weight-light mb-0">Produksi</h3>
                        </div>
                    </router-link>
                    <router-link to="/riwayat" class="col">
                        <div class="card border-0 align-items-center">
                            <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                <i class="fas fa-clipboard-list"></i>
                            </div>
                            <h3 class="card-title text-center font-weight-light mb-0">Riwayat</h3>
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- <div v-if="totalIkan >= 1 && totalIkan != null" class="row mt-3 ml-1 mr-1">
                <div class="col card border-0 mr-1 bg-gradient-info">
                    <div class="row ml-1 mr-1 mt-2"><h3 class="card-title mb-0 text-white">13</h3></div>
                    <div class="row ml-1 mr-1"><h3 class="card-title mb-0 text-white">Produksi</h3></div>
                    <div class="row ml-1 mr-1 mb-2"><h4 class="card-title font-weight-light mb-0 text-white">Menunggu Dicuci</h4></div>
                </div>
                <div class="col card border-0 ml-1 bg-gradient-info">
                    <div class="row ml-1 mr-1 mt-2"><h3 class="card-title mb-0 text-white">1</h3></div>
                    <div class="row ml-1 mr-1"><h3 class="card-title mb-0 text-white">Produksi</h3></div>
                    <div class="row ml-1 mr-1 mb-2"><h4 class="card-title font-weight-light mb-0 text-white">Siap Dipanen</h4></div>
                </div>
            </div> -->
            <!-- <div v-if="totalIkan < 1 || totalIkan === null" class="row mt-3">
                <div class="col">
                    <base-alert type="warning" style="margin-bottom:0">
                        <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                        <span class="alert-inner--text"><strong>Belum ada produksi!</strong> Harap lakukan penebaran terlebih dahulu</span>
                    </base-alert>
                </div>
            </div> -->
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--8 bg-primary">
            <!-- Sensor Hum Temp -->
            <div class="row">
                <div class="col">
                    <card class="shadow" header-classes="bg-transparent" :noBody="true">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h5 v-if="chartHumTemp.activeIndex === 0" class="h3 mb-0">Suhu Udara</h5>
                                <h5 v-if="chartHumTemp.activeIndex === 1" class="h3 mb-0">Kelembaban</h5>
                            </div>
                            <div class="col">
                                <ul class="nav nav-pills justify-content-end">
                                    <li class="nav-item mr-2 mr-md-0">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: chartHumTemp.activeIndex === 0}"
                                           @click.prevent="initChartHumTemp(0)">
                                            <span class="d-none d-md-block">Suhu</span>
                                            <span class="d-md-none">SU</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link py-2 px-3"
                                           href="#"
                                           :class="{active: chartHumTemp.activeIndex === 1}"
                                           @click.prevent="initChartHumTemp(1)">
                                            <span class="d-none d-md-block">Kelembaban</span>
                                            <span class="d-md-none">KB</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <line-chart
                                v-if="sensorHumTemps.time && sensorHumTemps.time.length"
                                :height="350"
                                ref="bigChart"
                                :chart-data="chartHumTemp.chartData"
                                :extra-options="chartHumTemp.extraOptions"
                        >
                        </line-chart>
                        <div v-else class="row card-body">
                            <div class="col">
                                <h3 class="text-center mb-0">Tidak ada Sensor</h3>
                            </div>
                        </div>
                        <!-- <div slot="footer">
                            <div class="row">
                                <div class="col-12">
                                    <h3 class="text-center">Lokasi Sensor</h3>        
                                </div>
                                <div class="col-12">
                                    <h3 class="font-weight-light text-center"><i class="fas fa-map-marker-alt"></i> Balai Sea Farming</h3>        
                                </div>
                            </div>    
                        </div> -->
                    </card>
                </div>
            </div>
            <!-- End Sensor Hum Temp -->
            <!-- Sensor DO Air -->
            <div class="row mt-3">
                <div class="col">
                    <card class="shadow" header-classes="bg-transparent" :noBody="true">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h5 class="h3 mb-0">DO Air</h5>
                            </div>
                        </div>
                        <line-chart
                                v-if="sensorDos.time && sensorDos.time.length"
                                :height="350"
                                ref="bigChart"
                                :chart-data="chartDo.chartData"
                                :extra-options="chartDo.extraOptions"
                        >
                        </line-chart>
                        <div v-else class="row card-body">
                            <div class="col">
                                <h3 class="text-center mb-0">Tidak ada Sensor</h3>
                            </div>
                        </div>
                        <div slot="footer">
                            <div class="row mb-3">
                                <div class="col-lg-12">
                                    <div class="form-control-label">Lokasi Sensor</div>
                                    <div class="round">
                                        <multiselect @input="opt => getSensorDo(opt.id)" 
                                                    v-model="kerambaDo"
                                                    :value="kerambaDo"
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
                        </div>
                    </card>
                </div>
            </div>
            <!-- End Sensor DO Air -->
            <!-- Sensor Suhu Air -->
            <div class="row mt-3">
                <div class="col">
                    <card class="shadow" header-classes="bg-transparent" :noBody="true">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h5 class="h3 mb-0">Suhu Air</h5>
                            </div>
                        </div>
                        <line-chart
                                v-if="sensorSuhus.time && sensorSuhus.time.length"
                                :height="350"
                                ref="bigChart"
                                :chart-data="chartSuhu.chartData"
                                :extra-options="chartSuhu.extraOptions"
                        >
                        </line-chart>
                        <div v-else class="row card-body">
                            <div class="col">
                                <h3 class="text-center mb-0">Tidak ada Sensor</h3>
                            </div>
                        </div>
                        <div slot="footer">
                            <div class="row mb-3">
                                <div class="col-lg-12">
                                    <div class="form-control-label">Lokasi Sensor</div>
                                    <div class="round">
                                        <multiselect @input="opt => getSensorSuhu(opt.id)" 
                                                    v-model="kerambaSuhu"
                                                    :value="kerambaSuhu"
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
                        </div>
                    </card>
                </div>
            </div>
            <!-- End Sensor Suhu Air -->
        </div>
        <!-- End charts-->
        

    </div>
</template>
<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex'
  import Multiselect from 'vue-multiselect'
  import * as chartConfigs from '@/js/components/Charts/config';
  import LineChart from '@/js/components/Charts/LineChart';
  export default {
    name: 'beranda',
    components: {
      LineChart,
      Multiselect
    },
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    data() {
      return {
        errors: '',
        kerambas: [],
        kerambaDo: '',
        kerambaSuhu: '',
        sensorHumTemps: '',
        sensorHumTemp: {
          id: '',
          time: '',
          date: '',
          humidity: '',
          temperature: ''
        },
        sensorDos: '',
        sensorDo: {
          id: '',
          time: '',
          do_air: '',
          keramba_id: ''
        },
        sensorSuhus: '',
        sensorSuhu: {
          id: '',
          time: '',
          suhu_air: '',
          keramba_id: ''
        },
        chartHumTemp: {
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        chartDo: {
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        chartSuhu: {
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        }
      }
    },
    async mounted() {
        await this.getKeramba(this.user.kelompok_id);
        await this.getSensorHumTemp();
        await this.getSensorDo(this.kerambas[0].id);
        await this.getSensorSuhu(this.kerambas[0].id);
    },
    methods:{
        async getKeramba(id){
            await axios.get(`apikeramba/where?kelompok=${id}`)
                .then((response) => {
                    this.kerambas = response.data;
                    // console.log(this.kerambas[0].id);
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
        async getSensorHumTemp() {
            await axios.get(`apisensorhumtemp`)
            .then((response) => {
                this.sensorHumTemps = response.data;
                this.initChartHumTemp(0);
                // console.log(this.sensorHumTemps);
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
            
        },
        async getSensorDo(id) {
            await axios.get(`apisensordo/where?keramba=${id}`)
            .then((response) => {
                this.sensorDos = response.data;
                this.initChartDo(0);
                // console.log(this.sensorDos);
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
            
        },
        async getSensorSuhu(id) {
            await axios.get(`apisensorsuhu/where?keramba=${id}`)
            .then((response) => {
                this.sensorSuhus = response.data;
                this.initChartSuhu(0);
                // console.log(this.sensorHumTemps);
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
            
        },
        initChartHumTemp(index) {
            if (index === 0){
                let chartData = {
                datasets: [
                    {
                    label: 'Suhu (°C)',
                    data: this.sensorHumTemps.sensor_tem
                    }
                ],
                labels: this.sensorHumTemps.time,
                };
                // console.log(this.sensorHumTemps.sensor_tem);
                this.chartHumTemp.chartData = chartData;
                this.chartHumTemp.activeIndex = index;
            }
            if (index === 1){
                let chartData = {
                datasets: [
                    {
                    label: 'Kelembaban (%)',
                    data: this.sensorHumTemps.sensor_hum
                    }
                ],
                labels: this.sensorHumTemps.time,
                };
                this.chartHumTemp.chartData = chartData;
                this.chartHumTemp.activeIndex = index;
            }
        },
        initChartDo(index) {
            let chartData = {
            datasets: [
                {
                label: 'DO Air (ppm)',
                data: this.sensorDos.sensor_do
                }
            ],
            labels: this.sensorDos.time,
            };
            this.chartDo.chartData = chartData;
            this.chartDo.activeIndex = index;
        },
        initChartSuhu(index) {
            let chartData = {
            datasets: [
                {
                label: 'Suhu (°C)',
                data: this.sensorSuhus.sensor_suhu
                }
            ],
            labels: this.sensorSuhus.time,
            };
            this.chartSuhu.chartData = chartData;
            this.chartSuhu.activeIndex = index;
        }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .table thead th {
      font-size: 0.8rem;
  }
  .table td, .table th {
      font-size: 0.9rem;
  }
  .round .multiselect__tags{
      border-radius: 1.5rem;
      box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
      border: 0px;
  }
  .alert{
        border-radius: .25rem;
    }
</style>
