<template>
  <form class="d-flex my-3" @submit.prevent="onSearch">
    <input
      class="form-control mr-2"
      type="search"
      v-model="searchValue"
      name="searchValue"
      placeholder="Buscar"
      aria-label="Search"
    />
    <button class="btn btn-dark" type="submit">Buscar</button>
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    onSearch() {
      // ahora tenemos acceso al evento nativo.
      // v-on:submit.prevent
      if (!this?.searchValue) return;
      this.$emit("search-code", this.searchValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
