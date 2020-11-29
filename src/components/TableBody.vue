<template>
  <tbody>
    <TableItem
      v-for="(item, index) in tableData"
      :key="`${item.Ciudad}-${index}`"
      :item="item"
    />
  </tbody>
</template>

<script>
// @ is an alias to /src
import TableItem from "@/components/TableItem.vue";
export default {
  name: "TableBody",
  components: {
    TableItem,
  },
  props: {
    tableData: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
