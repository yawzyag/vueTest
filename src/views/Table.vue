<template>
  <div class="table">
    <Table msg="Lista de Codigos" />
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/TableData.vue";

export default {
  name: "tableView",
  components: {
    Table,
  },
};
</script>
