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
                                                        
                                            />
                                        </div>
                                        <div class="col-12">
                                            <base-input alternative=""
                                                        label="Ketua"
                                                        placeholder="Ketua"
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                        <div class="col-12">
                                            <base-input alternative=""
                                                        label="Bendahara"
                                                        placeholder="Bendahara"
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                        <div class="col-12">
                                            <base-input alternative=""
                                                        label="Humas"
                                                        placeholder="Humas"
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                            </form>
                        </template>
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
                            <projects-table title="Anggota Kelompok"></projects-table>
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
  import ProjectsTable from './Tables/ProjectsTable'
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
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
    components: {
      ProjectsTable
    }
  };
</script>
<style></style>
