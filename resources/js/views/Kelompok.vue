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
                        <h1 class="display-2 text-white">Kelompok</h1>
                    </div>
                </div>
            </div>
        </base-header>

        <!-- Card -->
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Informasi Kelompok</h3>
                                </div>
                            </div>
                        </div>
                        <div slot="body">
                            <template>
                                <form @submit.prevent="" role="form">
                                    <!-- Data Diri -->
                                    <div class="pl-lg-4">
                                        <div class="row">
                                            <div class="col-12">
                                                <base-input alternative=""
                                                            label="Nama Kelompok"
                                                            placeholder="Nama Kelompok"
                                                            input-classes="form-control-alternative"
                                                            v-model="kel.nama_kelompok"
                                                            
                                                />
                                            </div>
                                            <div class="col-12">
                                                <base-input alternative=""
                                                            label="Ketua"
                                                            placeholder="Ketua"
                                                            input-classes="form-control-alternative"
                                                            v-model="kel.ketua_kelompok"
                                                />
                                            </div>
                                            <div class="col-12">
                                                <base-input alternative=""
                                                            label="Bendahara"
                                                            placeholder="Bendahara"
                                                            input-classes="form-control-alternative"
                                                            v-model="kel.bendahara_kelompok"
                                                />
                                            </div>
                                            <div class="col-12">
                                                <base-input alternative=""
                                                            label="Humas"
                                                            placeholder="Humas"
                                                            input-classes="form-control-alternative"
                                                            v-model="kel.humas_kelompok"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </template>
                        </div>
                        <div slot="footer" class="text-center">
                            <base-button @click="" nativeType="submit" type="primary" class="text-uppercase">Ubah</base-button>
                        </div>
                    </card>
                </div>
            </div>
        </div>
        <!-- Card -->
        <!-- Card Table -->
        <template>
            <div>
                <div class="container-fluid mt-3">
                    <div class="row">
                        <div class="col">
                            <anggota-table title="Anggota Kelompok" :id_kelompok="user.kelompok_id"></anggota-table>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <!-- Card Table -->
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import axios from 'axios'
  import AnggotaTable from './Tables/AnggotaTable'
  export default {
    name: 'kelompok',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    data() {
      return {
        kel: {
          nama_kelompok: '',
          ketua_kelompok: '',
          bendahara_kelompok: '',
          humas_kelompok: '',
        },
      }
    },
    mounted() {
        this.getData();
    },
    methods:{
        async getData() {
            await axios.get(`apikelompok/${this.user.kelompok_id}`)
                .then((response) => {
                this.kel = response.data.data;
                })
                .catch(() => {
                    console.log('Fetch Data Error!');
                });
        },
    },
    components: {
      AnggotaTable
    }
  };
</script>
<style></style>
