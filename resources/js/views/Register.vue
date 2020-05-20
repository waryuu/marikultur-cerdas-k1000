<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent">
                    <div class="text-center text-muted">
                        <h4>Silahkan isi form berikut</h4>
                    </div>
                        <base-alert v-if="errors.length" class="px-lg-5 mt-4" type="warning" dismissible>
                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </base-alert>
                </div>


                <div class="card-body px-lg-5 ">
                    <form @submit.prevent="submit" role="form" >
                        <base-input class="input-group-alternative mb-3"
                                    :required="true"
                                    placeholder="Nama Lengkap"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.name">
                        </base-input>

                        <select v-model="model.status" class="input-group-alternative mb-3 form-control">
                            <option disabled value="">Pilih Jabatan Anda</option>
                            <option value="ketua">Ketua Kelompok</option>
                            <option value="user">Anggota</option>
                        </select>

                        <select v-if="model.status === 'user'" v-model="model.kelompok_id" class="input-group-alternative mb-3 form-control">
                            <option disabled value="">Pilih Kelompok Anda</option>
                            <option v-for="kelompok in kelompoks" v-bind:value="kelompok.id">{{ kelompok.nama_kelompok }}</option>
                        </select>

                        <base-input class="input-group-alternative mb-3"
                                    :required="true"
                                    placeholder="Username"
                                    addon-left-icon="ni ni-badge"
                                    v-model="model.username">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                    :required="false"
                                    placeholder="Alamat Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="model.email">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    :required="true"
                                    placeholder="Sandi"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    :required="true"
                                    placeholder="Konfirmasi Sandi"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password_confirmation">
                        </base-input>

                        <div v-if="model.status === 'ketua'" class="text-center">
                            <base-button nativeType="submit" type="primary" class="my-4">Selanjutnya</base-button>
                        </div>

                        <div v-else class="text-center">
                            <base-button nativeType="submit" type="primary" class="my-4">Buat Akun</base-button>
                        </div>

                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light">
                        <small>Lupa sandi?</small>
                    </a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Sudah Punya Akun? Masuk</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'register',
    data() {
      return {
        errors: '',
        model: {
          name: '',
          username: '',
          email: '',
          status: '',
          kelompok_id: '',
          password: '',
          password_confirmation: ''
        },
        kelompoks: [],
        kelompok: {
            id: '',
            nama_kelompok: ''
        }
      }
    },
    created() {
        this.fetchKelompok();
    },
    methods:{
        ...mapActions({
            Register: 'auth/Register'
        }),
        submit() {
            this.errors = '';
            if (this.model.status === 'ketua'){
                this.Register(this.model).then(() =>{
                    this.$router.replace({
                        name: 'kelompok'
                    })
                }).catch(() => {
                        this.errors = 'Harap isi semua form dengan benar!';
                    })
            } else {
                this.Register(this.model).then(() =>{
                    this.$router.replace({
                        name: 'beranda'
                    })
                }).catch(() => {
                        this.errors = 'Silahkan isi semua form dengan benar!';
                    })
            }
        },
        fetchKelompok(){
            fetch('api/apikelompok')
                .then(res=>res.json())
                .then(res=>{
                    this.kelompoks = res.data;
                })
        }
    }
  }
</script>
<style>
</style>
