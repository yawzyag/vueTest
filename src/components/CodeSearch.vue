<template>
  <Search v-on:search-code="onSearch" />
</template>

<script>
import Search from "@/components/Search.vue";
export default {
  name: "CodeSearch",
  components: {
    Search,
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
