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
                        <template slot="body">
                            <form @submit.prevent="submitInfoUser" role="form">
                                <!-- Data Diri -->
                                <h6 class="heading-small text-muted mb-4">Informasi Pengguna</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-12">
                                            <base-alert v-if="errors.length" class="px-lg-5" type="warning" dismissible>
                                                <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                                <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </base-alert>
                                        </div>
                                        <div class="col-12">
                                            <base-alert v-if="success.length" class="px-lg-5" type="success" dismissible>
                                                <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                                                <span class="alert-inner--text"><strong>Berhasil!</strong> {{ success }}</span>
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </base-alert>
                                        </div>
                                        <div class="col-12">
                                            <base-input alternative=""
                                                        label="Alamat Email"
                                                        placeholder="jesse@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div>
                                        <div class="col-12">
                                            <base-input alternative=""
                                                        label="Username"
                                                        placeholder="username"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.username"
                                            />
                                        </div>
                                        <div class="col-12">
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
                                <!-- <h6 class="heading-small text-muted mb-4">Informasi Kelompok</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <select v-model="model.kelompok_id" class="input-group-alternative mb-3 form-control">
                                                <option disabled value="">Pilih Kelompok Anda</option>
                                                <option v-for="kelompok in kelompoks" v-bind:value="kelompok.id">{{ kelompok.nama_kelompok }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> -->
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
                                        <div class="col-12">
                                            <base-alert v-if="errorsPass.length" class="px-lg-5" type="warning" dismissible>
                                                <span class="alert-inner--icon"><i class="fas fa-exclamation-triangle"></i></span>
                                                <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errorsPass }}</span>
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </base-alert>
                                        </div>
                                        <div class="col-12">
                                            <base-alert v-if="successPass.length" class="px-lg-5" type="success" dismissible>
                                                <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                                                <span class="alert-inner--text"><strong>Berhasil!</strong> {{ successPass }}</span>
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </base-alert>
                                        </div>
                                        <div class="col-12">
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
                                        <div class="col-12">
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
        errors: '',
        success: '',
        errorsPass: '',
        successPass: '',
        kelompoks: [],
        kelompok: {
            id: '',
            nama_kelompok: ''
        },
        model: {
            name: '',
            username: '',
            email: '',
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
        this.model.username = this.user.username;
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
            this.success = '';
            // console.log(this.model);
            if(this.model.name != null && this.model.name.length >= 1 && this.model.username != null  && this.model.username.length >= 1 && this.model.email != null  && this.model.email.length >= 1){
                this.updateProfile(this.model)
                .then(() =>{
                        this.success = 'Informasi berhasil diubah!';
                    })
                .catch(() => {
                        this.errors = 'Harap isi semua form dengan benar!';
                    })
            }
            else {
                this.errors = 'Harap isi semua form dengan benar!';
            }
            
        },
        submitPassword(){
            this.errorsPass = '';
            this.successPass = '';
            if(this.form.password != null && this.form.password.length >= 1 && this.form.password_confirmation != null  && this.form.password_confirmation.length >= 1 && this.form.password === this.form.password_confirmation){
                this.updateProfile(this.form)
                .then(() =>{
                        this.successPass = 'Kata sandi berhasil diubah!';
                    })
                .catch(() => {
                        this.errorsPass = 'Harap isi semua form dengan benar!';
                    })
            }
            else {
                this.errorsPass = 'Harap isi semua form dengan benar!';
            }
            
        }
    }
  };
</script>
<style>
    .round .multiselect__tags{
        border-radius: 1.5rem;
        box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
        border: 0px;
    }
    .alert{
            border-radius: .25rem;
        }
</style>
