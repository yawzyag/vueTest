<template>
  <Search v-on:search-code="onSearch" />
  <div class="table-responsive">
    <table class="table caption-top">
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
      <TableBody v-bind:tableData="tableData" />
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import TableBody from "@/components/TableBody.vue";
import Search from "@/components/Search.vue";
export default {
  name: "Table",
  components: {
    TableBody,
    Search,
  },
  props: {
    msg: String,
    tableData: Array,
  },
  methods: {
    onSearch(value) {
      // ahora tenemos acceso al evento nativo.
      // v-on:submit.prevent

      console.log("emit search", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
