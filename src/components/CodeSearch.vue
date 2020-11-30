<template>
  <Search v-on:search-code="onSearch" />
  <SearchItem v-if="getSearchValue" />
</template>

<script>
import SearchItem from "@/components/SearchItem";
import Search from "@/components/Search.vue";
import { mapGetters } from "vuex";
export default {
  name: "CodeSearch",
  components: {
    Search,
    SearchItem,
  },
  computed: mapGetters(["getSearchValue"]),
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
