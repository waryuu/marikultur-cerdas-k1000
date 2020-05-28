<template>
    <div>
        <base-header class="header pb-7 pt-6 pt-lg-7 d-flex align-items-center"
                     style="min-height: 300px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <!-- <span class="mask bg-gradient-success opacity-8"></span> -->
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Riwayat</h1>
                    </div>
                </div>
            </div>
            <div class="row mt-3 mb-3 ml-1 mr-1">
                <base-button @click="showKegiatan()" type="secondary" class="col text-uppercase">Kegiatan</base-button>
                <base-button @click="showPanen()" type="secondary" class="col text-uppercase">Panen</base-button>
            </div>
        </base-header>

        <!-- Card Produksi -->
        <div class="container-fluid mt--7">
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
                    <card v-if="kegiatan" shadow type="secondary" :noBody="true">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Riwayat Kegiatan</h3>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-end">
                                   <base-pagination-dua  :pagination="meta"
                                        @paginate=""
                                        :offset="0">
                                    </base-pagination-dua>
                                </div>
                            </div>
                        </div>
                        <!-- Card Per Riwayat -->
                        <div class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-3">
                                    <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                        <i class="fas fa-fish"></i>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="row"><h3 class="card-title text-left mb-0">Penebaran</h3></div>
                                    <div class="row">
                                        <h4 class="text-left text-muted font-weight-light mb-0">
                                          Kerapu Cantang
                                        </h4>
                                    </div>
                                </div>
                                <div class="col mr-2">
                                    <div class="row d-flex justify-content-end">
                                        <h3 class="text-right mb-0">
                                            500 Ikan
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-end">
                                        <h4 class="text-right text-muted font-weight-light mb-0">
                                            22/01/2020
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-3">
                                    <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                        <i class="fa fa-user-edit"></i>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="row"><h3 class="card-title text-left mb-0">Cuci & Pindah</h3></div>
                                    <div class="row">
                                        <h4 class="text-left text-muted font-weight-light mb-0">
                                          Kerapu Cantang
                                        </h4>
                                    </div>
                                </div>
                                <div class="col mr-2">
                                    <div class="row d-flex justify-content-end">
                                        <h3 class="text-right mb-0">
                                            300 Ikan
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-end">
                                        <h4 class="text-right text-muted font-weight-light mb-0">
                                            22/01/2020
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-3">
                                    <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                        <i class="fa fa-user-edit"></i>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="row"><h3 class="card-title text-left mb-0">Ubah</h3></div>
                                    <div class="row">
                                        <h4 class="text-left text-muted font-weight-light mb-0">
                                          Kerapu Cantang
                                        </h4>
                                    </div>
                                </div>
                                <div class="col mr-2">
                                    <div class="row d-flex justify-content-end">
                                        <h3 class="text-right mb-0">
                                            300 Ikan
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-end">
                                        <h4 class="text-right text-muted font-weight-light mb-0">
                                            22/01/2020
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-3">
                                    <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                        <i class="fa fa-user-edit"></i>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="row"><h3 class="card-title text-left mb-0">Panen</h3></div>
                                    <div class="row">
                                        <h4 class="text-left text-muted font-weight-light mb-0">
                                          Kerapu Cantang
                                        </h4>
                                    </div>
                                </div>
                                <div class="col mr-2">
                                    <div class="row d-flex justify-content-end">
                                        <h3 class="text-right mb-0">
                                            200 Ikan
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-end">
                                        <h4 class="text-right text-muted font-weight-light mb-0">
                                            22/01/2020
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Card Per Riwayat -->
                        <div slot="footer" class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate=""
                                    :offset="0">
                            </base-pagination-dua>
                        </div>
                    </card>
                    <card v-if="panen" shadow type="secondary" :noBody="true">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Riwayat Panen</h3>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-end">
                                   <base-pagination-dua  :pagination="meta"
                                        @paginate=""
                                        :offset="0">
                                    </base-pagination-dua>
                                </div>
                            </div>
                        </div>
                        <!-- Card Per Riwayat -->
                        <div class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-3">
                                    <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                        <i class="fas fa-fish"></i>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="row"><h3 class="card-title text-left mb-0">Penebaran</h3></div>
                                    <div class="row">
                                        <h4 class="text-left text-muted font-weight-light mb-0">
                                          Kerapu Cantang
                                        </h4>
                                    </div>
                                </div>
                                <div class="col mr-2">
                                    <div class="row d-flex justify-content-end">
                                        <h3 class="text-right mb-0">
                                            500 Ikan
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-end">
                                        <h4 class="text-right text-muted font-weight-light mb-0">
                                            22/01/2020
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-3">
                                    <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                        <i class="fa fa-user-edit"></i>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="row"><h3 class="card-title text-left mb-0">Cuci & Pindah</h3></div>
                                    <div class="row">
                                        <h4 class="text-left text-muted font-weight-light mb-0">
                                          Kerapu Cantang
                                        </h4>
                                    </div>
                                </div>
                                <div class="col mr-2">
                                    <div class="row d-flex justify-content-end">
                                        <h3 class="text-right mb-0">
                                            300 Ikan
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-end">
                                        <h4 class="text-right text-muted font-weight-light mb-0">
                                            22/01/2020
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-3">
                                    <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                        <i class="fa fa-user-edit"></i>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="row"><h3 class="card-title text-left mb-0">Ubah</h3></div>
                                    <div class="row">
                                        <h4 class="text-left text-muted font-weight-light mb-0">
                                          Kerapu Cantang
                                        </h4>
                                    </div>
                                </div>
                                <div class="col mr-2">
                                    <div class="row d-flex justify-content-end">
                                        <h3 class="text-right mb-0">
                                            300 Ikan
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-end">
                                        <h4 class="text-right text-muted font-weight-light mb-0">
                                            22/01/2020
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-body rounded-0">
                            <div class="row">
                                <div class="col-3">
                                    <div class="icon icon-shape text-white rounded-circle mb-3 shadow bg-gradient-primary">
                                        <i class="fa fa-user-edit"></i>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="row"><h3 class="card-title text-left mb-0">Panen</h3></div>
                                    <div class="row">
                                        <h4 class="text-left text-muted font-weight-light mb-0">
                                          Kerapu Cantang
                                        </h4>
                                    </div>
                                </div>
                                <div class="col mr-2">
                                    <div class="row d-flex justify-content-end">
                                        <h3 class="text-right mb-0">
                                            200 Ikan
                                        </h3>
                                    </div>
                                    <div class="row d-flex justify-content-end">
                                        <h4 class="text-right text-muted font-weight-light mb-0">
                                            22/01/2020
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Card Per Riwayat -->
                        <div slot="footer" class="d-flex justify-content-end">
                            <base-pagination-dua  :pagination="meta"
                                    @paginate=""
                                    :offset="0">
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
  export default {
    name: 'riwayat',
    data() {
      return {
        kegiatan: '',
        panen: '',
        errors: '',
        offset: 4,
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
    },
    methods:{
        showKegiatan(){
            this.kegiatan = true;
            this.panen = false;
        },
        showPanen(){
            this.kegiatan = false;
            this.panen = true;
        }
    }
  }
</script>
<style></style>
