<template>
  <Search v-on:search-code="onSearch" />
  <!-- <SearchItem v-if="getSearchValue" /> -->
  <template v-if="!getLoadingTableState">
    <div v-on:click="openToast" class="table-responsive">
      <table class="table caption-top table-striped">
        <thead>
          <tr>
            <th scope="col"># Codigo postal</th>
            <th scope="col">Estado</th>
            <th scope="col">Ciudad</th>
          </tr>
        </thead>
        <TableBody v-bind:tableData="getDataTable" />
      </table>
    </div>
    <nav v-if="getTotal > 1" aria-label="Page navigation">
      <ul class="pagination flex-wrap justify-content-end">
        <li
          class="page-item p-0"
          v-on:click="pageRestartChangeHandler"
          :class="currentPage <= 0 ? 'disabled' : ''"
        >
          <a
            class="page-link"
            :aria-disabled="currentPage <= 0 ? true : false"
            aria-label="Previous"
          >
            <span aria-hidden="true" :class="currentPage <= 0 ? '' : 'text-danger'">
              &laquo;
            </span>
          </a>
        </li>
        <li
          class="page-item p-0"
          v-on:click="pageDecreChangeHandler"
          :class="currentPage <= 0 ? 'disabled' : ''"
        >
          <a
            class="page-link"
            :aria-disabled="currentPage <= 0 ? true : false"
            aria-label="Previous"
          >
            <span aria-hidden="true"> &lt; </span>
          </a>
        </li>

        <li
          class="page-item p-0"
          v-on:click="pageAumentChangeHandler"
          :class="getTotal < currentPage ? 'disabled' : ''"
        >
          <a class="page-link" aria-label="Next">
            <span
              :aria-disabled="getTotal < currentPage ? false : true"
              aria-hidden="true"
              >&gt;</span
            >
          </a>
        </li>
      </ul>
    </nav>
  </template>
  <Loader v-else />
</template>

<script>
// @ is an alias to /src
import TableBody from "@/components/TableBody.vue";
import Search from "@/components/Search.vue";
import Loader from "@/components/Loader.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TablePageView",
  data() {
    return {
      currentPage: 0,
    };
  },
  components: {
    TableBody,
    Search,
    Loader,
  },
  computed: mapGetters([
    "getDataTable",
    "getSearchValue",
    "getTotal",
    "getLoadingTableState",
  ]),
  methods: {
    ...mapActions(["fetchDataTable", "changeSkip"]),
    onSearch(value) {
      // ahora tenemos acceso al evento nativo.
      // v-on:submit.prevent

      console.log("emit search", value);
    },
    pageAumentChangeHandler() {
      if (this.currentPage < this.getTotal) {
        this.currentPage++;
        this.changeSkip(this.currentPage);
      }
    },
    pageDecreChangeHandler() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.changeSkip(this.currentPage);
      }
    },
    pageRestartChangeHandler() {
      if (this.currentPage > 0) {
        this.currentPage = 0;
        this.changeSkip(0);
      }
    },
    openToast() {
      //this.$toast.show(`Hey! I'm here`);
    },
  },
  created() {
    this.fetchDataTable();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination .page-item {
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
</style>
