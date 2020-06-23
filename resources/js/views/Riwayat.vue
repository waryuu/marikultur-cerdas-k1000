<template>
    <div class="bg-primary">
        <base-header class="header pb-7 pt-4 pt-lg-7 d-flex align-items-center"
                     style="min-height: 100px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-8"></span> -->
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <!-- <h1 class="display-2 text-white">Riwayat</h1> -->
                    </div>
                </div>
            </div>
            <div class="row mt-3 mb-3 ml-1 mr-1">
                <base-button @click="showKegiatan()" type="secondary" class="col text-uppercase">Produksi</base-button>
                <base-button @click="showPanen()" type="secondary" class="col text-uppercase">Panen</base-button>
            </div>
        </base-header>

        <!-- Card Produksi -->
        <div class="container-fluid mt--7 bg-primary">
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
                    <card v-if="riwayatKeg" shadow type="secondary" :noBody="true">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Riwayat Produksi</h3>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-end">
                                   <base-pagination-dua  :pagination="meta"
                                        @paginate="getKegiatan()"
                                        :offset="0">
                                    </base-pagination-dua>
                                </div>
                            </div>
                        </div>
                        <!-- Card Per Riwayat -->
                        <div>
                            <div v-if="!produksis.length" class="card card-body rounded-0">
                                <div class="row">
                                    <div class="col">
                                        <base-alert type="info">
                                            <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                            <span class="alert-inner--text"><strong>Belum ada riwayat kegiatan!</strong></span>
                                        </base-alert>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!detailRiwayat">
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
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col">
                                            <h4 class="text-center text-uppercase font-weight-light">
                                                Total Pakan
                                            </h4>
                                            <h3 v-if="produksi.total_pakan" class="text-center">
                                                {{produksi.total_pakan}} Kg
                                            </h3>
                                            <h3 v-else class="text-center">
                                                Belum Ada
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="row mt-3 mb-3">
                                        <div class="col">
                                            <h4 class="text-left font-weight-light">
                                                Tanggal Tebar
                                            </h4>
                                        </div>
                                        <div class="col">
                                            <h4 class="text-right font-italic font-weight-light">
                                                {{ produksi.tanggal_tebar | moment("DD MMM YYYY") }}
                                            </h4>
                                        </div>
                                    </div>
                                    <a @click="showDetail(produksi.id)" class="btn btn-primary text-white">Riwayat</a>
                                </div>
                            </div>
                            <div v-else-if="detailRiwayat">
                                <div v-for="riwayat in riwayats" v-bind:key="riwayat.id" class="card card-body rounded-0">
                                    <div class="row">
                                        <div v-if="riwayat.kegiatan === 'Penebaran'" class="col-3">
                                            <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                                <i class="fas fa-fish"></i>
                                            </div>
                                        </div>
                                        <div v-else class="col-3">
                                            <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                                <i class="fas fa-user-edit"></i>
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <div class="row"><h3 class="card-title text-left mb-0">{{riwayat.kegiatan}}</h3></div>
                                            <div class="row">
                                                <h4 class="text-left text-muted font-weight-light mb-0">
                                                {{riwayat.nama_ikan}}
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="col mr-2">
                                            <div class="row d-flex justify-content-end">
                                                <h3 class="text-right mb-0">
                                                    {{riwayat.jumlah_ikan}}
                                                </h3>
                                            </div>
                                            <div class="row d-flex justify-content-end">
                                                <h4 class="text-right text-muted font-weight-light mb-0">
                                                    {{riwayat.created_at}}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Card Per Riwayat -->
                        <div slot="footer" class="d-flex text-center">
                            <a v-if="detailRiwayat" @click="showKegiatan()" class="btn btn-link text-uppercase text-primary">Kembali</a>
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getKegiatan()"
                                    :offset="0"
                                    class="ml-auto">
                            </base-pagination-dua>
                        </div>
                    </card>
                    <card v-if="riwayatPanen" shadow type="secondary" :noBody="true">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Riwayat Panen</h3>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-end">
                                   <base-pagination-dua  :pagination="meta"
                                        @paginate="getPanen()"
                                        :offset="0">
                                    </base-pagination-dua>
                                </div>
                            </div>
                        </div>
                        <!-- Card Per Panen -->
                        <div v-if="!panens.length" class="card card-body rounded-0">
                            <div  class="row">
                                <div class="col">
                                    <base-alert type="info">
                                        <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                        <span class="alert-inner--text"><strong>Belum ada riwayat panen!</strong></span>
                                    </base-alert>
                                </div>
                            </div>
                        </div>
                        <div v-if="!detailRiwayat">
                            <div v-for="panen in panens" v-bind:key="panen.id" class="card card-body rounded-0">
                                <div class="row">
                                    <div class="col-7">
                                        <h3 class="card-title text-left mb-0">
                                            {{panen.nama_ikan}}
                                        </h3>
                                    </div>
                                    <div class="col">
                                        <h5 class="card-title text-right text-muted font-weight-light mb-0">
                                            ID-{{panen.id}}
                                        </h5>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Jumlah Awal
                                        </h4>
                                        <h3 class="text-center">
                                            {{panen.jumlah_ikan_awal}} Ekor
                                        </h3>
                                    </div>
                                    <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Jumlah Akhir
                                        </h4>
                                        <h3 class="text-center">
                                            {{panen.jumlah_terkini}} Ekor
                                        </h3>
                                    </div>
                                    <!-- <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Ukuran
                                        </h4>
                                        <h3 class="text-center">
                                            {{panen.panjang_ikan_awal}} cm
                                        </h3>
                                    </div>
                                    <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Berat
                                        </h4>
                                        <h3 class="text-center">
                                            {{panen.berat_ikan_awal}} Gram
                                        </h3>
                                    </div> -->
                                </div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <h4 class="text-center text-uppercase font-weight-light">
                                            Total Pakan
                                        </h4>
                                        <h3 v-if="produksi.total_pakan" class="text-center">
                                            {{panen.total_pakan}} Kg
                                        </h3>
                                        <h3 v-else class="text-center">
                                            Belum Ada
                                        </h3>
                                    </div>
                                </div>
                                <div class="row mt-3 mb-3">
                                    <div class="col">
                                        <h4 class="text-left font-weight-light">
                                            Tanggal Tebar
                                        </h4>
                                    </div>
                                    <div class="col">
                                        <h4 class="text-right font-italic font-weight-light">
                                            {{ panen.tanggal_tebar | moment("DD MMM YYYY") }}
                                        </h4>
                                    </div>
                                </div>
                                <div class="row px-2">
                                    <router-link :to="{ name: 'produksi-detail', params: { id: panen.id }}" class="col btn btn-primary">
                                        <span>Detail Panen</span>
                                    </router-link>
                                    <a @click="showDetail(panen.id)" class="col btn btn-primary text-white">Riwayat</a>
                                </div>
                                
                                <!-- <form class="row align-items-center px-3 mt-3" action="" method="post">
                                    <button @click="showSensor(produksi.id)" type="button" class="col btn btn-primary">Sensor IoT</button>
                                </form> -->
                            </div>
                        </div>
                        <div v-else-if="detailRiwayat">
                            <div v-for="riwayat in riwayats" v-bind:key="riwayat.id" class="card card-body rounded-0">
                                <div class="row">
                                    <div v-if="riwayat.kegiatan === 'Penebaran'" class="col-3">
                                        <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                            <i class="fas fa-fish"></i>
                                        </div>
                                    </div>
                                    <div v-else class="col-3">
                                        <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                            <i class="fas fa-user-edit"></i>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="row"><h3 class="card-title text-left mb-0">{{riwayat.kegiatan}}</h3></div>
                                        <div class="row">
                                            <h4 class="text-left text-muted font-weight-light mb-0">
                                            {{riwayat.nama_ikan}}
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col mr-2">
                                        <div class="row d-flex justify-content-end">
                                            <h3 class="text-right mb-0">
                                                {{riwayat.jumlah_ikan}}
                                            </h3>
                                        </div>
                                        <div class="row d-flex justify-content-end">
                                            <h4 class="text-right text-muted font-weight-light mb-0">
                                                {{riwayat.created_at}}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Card Per Panen -->
                        <div slot="footer" class="d-flex text-center">
                            <a v-if="detailRiwayat" @click="showPanen()" class="btn btn-link text-uppercase text-primary">Kembali</a>
                            <base-pagination-dua  :pagination="meta"
                                    @paginate="getKegiatan()"
                                    :offset="0"
                                    class="ml-auto">
                            </base-pagination-dua>
                        </div>
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
    name: 'riwayat',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    data() {
      return {
        detailRiwayat: '',
        riwayatKeg: '',
        riwayatPanen: '',
        errors: '',
        offset: 4,
        produksis: [],
        produksi: {
          id: '',
          nama_ikan: '',
          jumlah_ikan_awal: '',
          jumlah_terkini: '',
          tanggal_tebar: '',
        },
        riwayats: [],
        riwayat: {
            id: '',
            nama_ikan: '',
            jumlah_ikan: '',
            kegiatan: '',
            created_at: '',
        },
        panens: [],
        panen: {
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
        this.showKegiatan();
        // console.log(this.meta);
    },
    methods:{
        async getProduksi(){
            await axios.get(`apiproduksi/wherepembesaran?user=${this.user.id}&page=${this.meta.current_page}`)
                .then((response) => {
                    this.produksis = response.data.data;
                    // console.log(this.produksis);
                    this.meta = response.data.meta;
                    this.links = response.data.links;
                })
                .catch(() => {
                    console.log('Fetch Data Produksi Error!');
                });
        },
        async getKegiatan(id){
            // console.log('Get Kegiatan');
            await axios.get(`/apisubproduksilog/wheresub?produksi=${id}`)
                .then((response) => {
                    this.riwayats = response.data.data;
                    // console.log(response);
                    this.meta = response.data.meta;
                    this.links = response.data.links;
                })
                .catch(() => {
                    console.log('Fetch Data Kegiatan Error!');
                });
        },
        async getPanen(){
            // console.log('Get Panen');
            await axios.get(`apiproduksi/wherepanen?user=${this.user.id}&page=${this.meta.current_page}`)
                .then((response) => {
                    this.panens = response.data.data;
                    this.meta = response.data.meta;
                    this.links = response.data.links;
                    console.log(this.panens);
                })
                .catch(() => {
                    console.log('Fetch Data Panen Error!');
                });
        },
        showKegiatan(){
            this.detailRiwayat = false;
            this.meta.current_page = '1';
            this.getProduksi();
            this.riwayatKeg = true;
            this.riwayatPanen = false;
        },
        showDetail(id){
            this.meta.current_page = '1';
            this.getKegiatan(id);
            this.detailRiwayat = true;
        },
        showPanen(){
            this.detailRiwayat = false;
            this.meta.current_page = '1';
            this.getPanen();
            this.riwayatKeg = false;
            this.riwayatPanen = true;
        }
    }
  }
</script>
<style>
    .alert{
        border-radius: .25rem;
    }
</style>
