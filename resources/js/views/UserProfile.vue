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
                        <h1 class="display-2 text-white">Profil</h1>
                        <p class="text-white mt-0 mb-5">Silahkan isi form berikut untuk mengubah data diri Anda</p>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-12">
                                    <h3 class="mb-0">Profil Saya</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent="submitInfoUser" role="form">
                                <!-- Data Diri -->
                                <h6 class="heading-small text-muted mb-4">Informasi Pengguna</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Alamat Email"
                                                        placeholder="jesse@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama"
                                                        placeholder="Nama"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.name"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <!-- Kelompok -->
                                <h6 class="heading-small text-muted mb-4">Informasi Kelompok</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <select v-model="model.kelompok_id" class="input-group-alternative mb-3 form-control">
                                                <option disabled value="">Pilih Kelompok Anda</option>
                                                <option v-for="kelompok in kelompoks" v-bind:value="kelompok.id">{{ kelompok.nama_kelompok }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                 <div class="text-center">
                                    <base-button nativeType="submit" type="primary" class="my-4">Ubah</base-button>
                                </div>
                                <hr class="my-4" />
                            </form>
                            <form @submit.prevent="submitPassword" role="form">
                                <!-- Keamanan -->
                                <h6 class="heading-small text-muted mb-4">Ubah Kata Sandi</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Kata Sandi Baru"
                                                        placeholder="Masukkan Kata Sandi"
                                                        input-classes="form-control-alternative"
                                                        v-model="form.password"
                                                        type="password"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Konfirmasi Kata Sandi"
                                                        placeholder="Masukkan Kata Sandi"
                                                        input-classes="form-control-alternative"
                                                        v-model="form.password_confirmation"
                                                        type="password"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <base-button nativeType="submit" type="primary" class="my-4">Ubah</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import axios from 'axios'
  export default {
    name: 'user-profile',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    data() {
      return {
        kelompoks: [],
        kelompok: {
            id: '',
            nama_kelompok: ''
        },
        model: {
            name: '',
            email: '',
            kelompok_id: '',
        },
        form: {
            password: '',
            password_confirmation: ''
        }
      }
    },
    created() {
        this.fetchKelompok();
        this.model.name = this.user.name;
        this.model.email = this.user.email;
        this.model.kelompok_id = this.user.kelompok_id;
    },
    methods:{
        ...mapActions({
            updateProfile: 'auth/updateProfile'
        }),
        fetchKelompok(){
            fetch('api/apikelompok')
                .then(res=>res.json())
                .then(res=>{
                    this.kelompoks = res.data;
                })
        },
        submitInfoUser(){
            this.errors = '';
            this.updateProfile(this.model)
            .then(() =>{
                    this.$router.replace({
                        name: 'profil'
                    })
                })
            .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
                })
        },
        submitPassword(){
            this.errors = '';
            this.updateProfile(this.form)
            .then(() =>{
                    this.$router.replace({
                        name: 'profil'
                    })
                })
            .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
                })
        },
        consolee(){
            console.log(this.model);
            console.log(this.form);
        }
    }
  };
</script>
<style></style>
