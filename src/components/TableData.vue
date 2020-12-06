<template>
  <Search v-on:search-code="onSearch" />
  <SearchItem v-if="getSearchValue" />
  <div class="table-responsive">
    <table class="table caption-top table-striped">
      <caption>
        {{
          msg
        }}
      </caption>
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
  {{ getTotal }}
  <nav aria-label="Page navigation">
    <ul class="pagination flex-wrap justify-content-end">
      <li class="page-item p-0 disabled">
        <a class="page-link" href="#" aria-disabled="true" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="i in getTotal" :key="i" class="page-item p-0">
        <a class="page-link">{{ i }}</a>
      </li>
      <li class="page-item p-0">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// @ is an alias to /src
import TableBody from "@/components/TableBody.vue";
import Search from "@/components/Search.vue";
import SearchItem from "@/components/SearchItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Table",
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    TableBody,
    Search,
    SearchItem,
  },
  props: {
    msg: String,
  },
  computed: mapGetters(["getDataTable", "getSearchValue", "getTotal"]),
  methods: {
    ...mapActions(["fetchDataTable"]),
    onSearch(value) {
      // ahora tenemos acceso al evento nativo.
      // v-on:submit.prevent

      console.log("emit search", value);
    },
  },
  created() {
    this.fetchDataTable();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
