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
            <div class="row mt-3 ml-1 mr-1">
                <div class="col card border-0 mr-1 bg-gradient-green">
                    <div class="row ml-1 mr-1 mt-2"><h3 class="card-title mb-0 text-white">13</h3></div>
                    <div class="row ml-1 mr-1"><h3 class="card-title mb-0 text-white">Produksi</h3></div>
                    <div class="row ml-1 mr-1 mb-2"><h4 class="card-title font-weight-light mb-0 text-white">Menunggu Dicuci</h4></div>
                </div>
                <div class="col card border-0 ml-1 bg-gradient-green">
                    <div class="row ml-1 mr-1 mt-2"><h3 class="card-title mb-0 text-white">1</h3></div>
                    <div class="row ml-1 mr-1"><h3 class="card-title mb-0 text-white">Produksi</h3></div>
                    <div class="row ml-1 mr-1 mb-2"><h4 class="card-title font-weight-light mb-0 text-white">Siap Dipanen</h4></div>
                </div>
            </div>
        </base-header>
        <!-- Card Total Produksi -->
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
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
                                            tbody-classes="list"
                                            :data="totalProd">
                                    <template slot="columns">
                                        <th>Minggu ini</th>
                                        <th>Bulan ini</th>
                                        <th>Tahun ini</th>
                                    </template>
                                    <template slot-scope="{row}">
                                        <td scope="row">
                                            <span class="font-weight-bold">{{row.minggu}}</span>
                                        </td>
                                        <td>
                                            <span class="font-weight-bold">{{row.bulan}}</span>
                                        </td>
                                        <td>
                                            <span class="font-weight-bold">{{row.tahun}}</span>
                                        </td>
                                    </template>
                                </base-table>
                            </div>
                        </div>
                        <div slot="footer" class="d-flex justify-content-end">
                            <a href="/produksi">Lihat Semua Produksi</a>
                        </div>
                    </card>
                </div>
            </div>
        </div>
        <!-- End card Total Produksi -->
        <!-- Card Total Ikan -->
        <div class="container-fluid mt-3">
            <div class="row">
                <div class="col">
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
                                        :data="totalIkan">
                                <template slot="columns">
                                    <th>Nama Ikan</th>
                                    <th>Jumlah Ikan</th>
                                </template>
                                <template slot-scope="{row}">
                                    <td scope="row">
                                        <span class="font-weight-bold">{{row.nama}}</span>
                                    </td>
                                    <td>
                                        <span class="font-weight-bold">{{row.jumlah}}</span>
                                    </td>
                                </template>
                            </base-table>
                        </div>
                        </div>
                        <div slot="footer" class="d-flex justify-content-end">
                            Total 5000 Ikan
                        </div>
                    </card>
                </div>
            </div>
        </div>
        <!-- End card Total Produksi -->

    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'beranda',
    data() {
      return {
        errors: '',
        totalProd: [
          {
            minggu: '12',
            bulan: '30',
            tahun: '50',
          }
        ],
        totalIkan: [
          {
            nama: 'Kerapu Cantang',
            jumlah: '4000',
          },
          {
            nama: 'Kerapu Macan',
            jumlah: '1000',
          },
        ],
        sensorHumTemp: {
          id: '',
          humidity: '',
          temperature: ''
        },
      }
    },
    mounted() {
        this.getSensorHumTemp();
    },
    methods:{
        async getSensorHumTemp() {
            await axios.get(`apisensorhumtemp`)
            .then((response) => {
                this.sensorHumTemp = response.data;
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
    }
  }
</script>
<style>
  .table thead th {
      font-size: 0.8rem;
  }
  .table td, .table th {
      font-size: 0.9rem;
  }
</style>
