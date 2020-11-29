<template>
  <div class="table">
    <Table v-bind:tableData="tableData" msg="Lista de Codigos" />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/TableData.vue";
import DataJson from "@/assets/dummyData/data.json";

export default {
  name: "table",
  components: {
    Table,
  },
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.tableData = DataJson.codes.slice(1100, 1300);
  },
};
</script>
