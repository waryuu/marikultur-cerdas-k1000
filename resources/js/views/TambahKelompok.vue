<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent">
                    <div class="text-center">
                        <h4>Masukkan Data Kelompok Anda</h4>
                    </div>
                        <base-alert v-if="errors.length" class="px-lg-5 mt-4" type="warning" dismissible>
                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </base-alert>
                </div>


                <div class="card-body px-lg-5 ">
                    <form @submit.prevent="addKelompok" role="form">
                        <base-input class="input-group-alternative mb-3"
                                    :required="true"
                                    placeholder="Nama Kelompok"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.nama_kelompok">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                    :required="true"
                                    :disabled="true"
                                    placeholder="Ketua Kelompok"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.ketua_kelompok">
                        </base-input>
                        <base-input class="input-group-alternative mb-3"
                                    :required="true"
                                    placeholder="Bendahara Kelompok"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.bendahara_kelompok">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                    :required="true"
                                    placeholder="Humas Kelompok"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.humas_kelompok">
                        </base-input>

                        <div class="text-center">
                            <base-button nativeType="submit" type="primary" class="my-4">Tambah</base-button>
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
  import {mapGetters,mapActions} from 'vuex'
  import axios from 'axios'
  export default {
    name: 'tambahkelompok',
    computed: {
        ...mapGetters({
            user: 'auth/user',
        })
    },
    data() {
      return {
        errors: '',
        model: {
          nama_kelompok: '',
          ketua_kelompok: '',
          bendahara_kelompok: '',
          humas_kelompok: ''
        },
        form: {
            name: '',
            email: '',
            kelompok_id: ''
        }
      }
    },
    created() {
        this.model.ketua_kelompok = this.user.name;
        this.form.name = this.user.name;
        this.form.email = this.user.email;
    },
    methods:{
        ...mapActions({
            updateProfile: 'auth/updateProfile'
        }),
        async addKelompok(){
            this.errors = '';
            var response = await axios.post('apikelompok/store', this.model);
            this.form.kelompok_id = response.data.kelompok.id;
            this.updateProfile(this.form)
            .then(() =>{
                    this.$router.replace({
                        name: 'beranda'
                    })
                })
            .catch(() => {
                    this.errors = 'Harap isi semua form dengan benar!';
                })
        console.log(this.id_user);
        console.log(this.form);
        console.log(response.data.kelompok.id);
        }
    }
  }
</script>
<style>
</style>
