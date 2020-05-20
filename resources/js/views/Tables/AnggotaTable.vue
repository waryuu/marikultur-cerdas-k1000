<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
        <!-- <div class="col text-right">
          <base-button type="primary" size="sm">See all</base-button>
        </div> -->
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Nama</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.name}}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            {{row.username}}
          </td>
          <td class="budget">
            {{row.email}}
          </td>
          <td>
            <badge class="badge-dot mr-4 text-capitalize">
              <span class="status">{{row.status}}</span>
            </badge>
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </template>
            </base-dropdown>
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination-dua  :pagination="meta"
          @paginate="getData()"
          :offset="1">
      </base-pagination-dua>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'anggota-table',
    props: {
      type: {
        type: String
      },
      title: String,
      id_kelompok: {
        type: Number,
      }
    },
    data() {
      return {
        tableData: [],
        meta: {
            current_page: 1,
            from: 1,
            last_page: '',
            path: '',
            per_page: '',
            to: '',
            total: ''
        },
      }
    },
    mounted() {
        this.getData();
    },
    methods: {
      async getData() {
          await axios.get(`auth/user/${this.id_kelompok}?page=${this.meta.current_page}`)
              .then((response) => {
              this.tableData = response.data.data;
              this.meta = response.data.meta;
              console.log(this.tableData);
              })
              .catch(() => {
                  console.log('Fetch Data Tabel Error!');
              });
        },
    }
  }
</script>
<style>
</style>
