<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent">
                    <div class="text-center text-muted">
                        <small>Silahkan isi form berikut</small>
                    </div>
                    <div v-if="errors.length" >
                        <base-alert v-for="error in errors" v-bind:data="error" v-bind:key="error" class="px-lg-5 mt-4" type="warning" dismissible>
                            <span class="alert-inner--text"><strong>Perhatian!</strong> {{ error }}</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </base-alert>
                    </div>
                </div>


                <div class="card-body px-lg-5 ">
                    <form @submit.prevent="checkForm" role="form" >
                        <base-input class="input-group-alternative mb-3"
                                    :required="true"
                                    placeholder="Nama"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="model.name">
                        </base-input>

                        <select v-model="model.status" class="input-group-alternative mb-3 form-control">
                            <option disabled value="">Pilih Jabatan Anda</option>
                            <option value="ketua">Ketua Kelompok</option>
                            <option value="anggota">Anggota</option>
                        </select>

                        <base-input v-if="model.status === 'anggota'" class="input-group-alternative mb-3"
                                    placeholder="Kelompok Anda"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="model.kelompok_id">
                        </base-input>

                        <base-input class="input-group-alternative mb-3"
                                    :required="true"
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
  export default {
    name: 'register',
    data() {
      return {
        errors: [],
        model: {
          name: '',
          email: '',
          status: '',
          kelompok_id: '',
          password: ''
        }
      }
    },
    methods:{
        checkForm: function (e) {
        if (this.model.name && this.model.email && this.model.status && this.model.kelompok_id && this.model.password) {
            return true;
        }
        this.errors = [];
        console.log(this.errors);

        if (!this.model.name) {
            this.errors.push('Silahkan isi Nama Anda!');
        }
        if (!this.model.email) {
            this.errors.push('Silahkan isi Email Anda!');
        }
        if (!this.model.status) {
            this.errors.push('Silahkan isi Jabatan Anda!');
        }
        if (!this.model.kelompok_id) {
            this.errors.push('Silahkan isi Kelompok Anda!');
        }
        if (!this.model.password) {
            this.errors.push('Silahkan isi Kata Sandi Anda!');
        }

        }
    }
  }
</script>
<style>
</style>
