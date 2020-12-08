<template>
  <div class="table">
    <TablePageView />
  </div>
</template>

<script>
// @ is an alias to /src
import TablePageView from "@/components/TableData.vue";

export default {
  name: "TableView",
  components: {
    TablePageView,
  },
};
</script>
