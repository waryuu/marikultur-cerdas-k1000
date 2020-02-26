<template>
    <ul class="pagination">
    <li class="page-item prev-page" :class="{disabled: pagination.current_page === 1}">
        <a class="page-link" href="javascript:void(0)" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
            <span aria-hidden="true">&#60;</span>
            </a>
        </li>
    <li class="page-item" v-for="page in pagesNumber" :class="{'active': page == pagination.current_page}">
        <a class="page-link" href="javascript:void(0)" v-on:click.prevent="changePage(page)">{{ page }}</a>
        </li>
    <li class="page-item next-page" :class="{disabled: pagination.current_page === pagination.last_page}">
        <a class="page-link" href="javascript:void(0)" aria-label="Next" v-on:click.prevent="changePage(pagination.current_page + 1)">
            <span aria-hidden="true">&#62;</span>
            </a>
        </li>
    </ul>
</template>
<script>
  export default{
      name: "base-pagination-dua",
      props: {
      pagination: {
          type: Object,
          required: true
      },
      offset: {
          type: Number,
          default: 4
      }
    },
    computed: {
      pagesNumber() {
        if (!this.pagination.to) {
          return [];
        }
        let from = this.pagination.current_page - this.offset;
        if (from < 1) {
          from = 1;
        }
        let to = from + (this.offset * 2);
        if (to >= this.pagination.last_page) {
          to = this.pagination.last_page;
        }
        let pagesArray = [];
        for (let page = from; page <= to; page++) {
          pagesArray.push(page);
        }
          return pagesArray;
      }
    },
    methods : {
      changePage(page) {
        this.pagination.current_page = page;
        this.$emit('paginate');
      }
    }
  }
</script>
