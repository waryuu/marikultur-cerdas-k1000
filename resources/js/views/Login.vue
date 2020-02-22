<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-transparent">
                        <div class="text-center text-muted">
                            <small>Masuk menggunakan akun yang telah dibuat</small>
                        </div>
                        <base-alert v-if="errors.length" class="px-lg-5 mt-4" type="warning" dismissible>
                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ errors }}</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </base-alert>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <form @submit.prevent="submit" role="form">
                            <base-input class="input-group-alternative mb-3"
                                        name="email"
                                        id="email"
                                        placeholder="Alamat Email"
                                        type="text"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        name="password"
                                        id="password"
                                        placeholder="Kata Sandi"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <div class="text-center">
                                <base-button nativeType="submit" type="primary" class="my-4">Masuk</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Lupa sandi?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small>Buat Akun Baru</small></router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'login',
    components: {

    },

    data() {
      return {
        errors: '',
        model: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        submit() {
            this.errors = '';
            this.signIn(this.model).then(() =>{
                this.$router.replace({
                    name: 'beranda'
                })
            }).catch(() => {
                    this.errors = 'Alamat Email atau Kata Sandi Salah!';
                })

        }
    }

  }
</script>
<style>
</style>
