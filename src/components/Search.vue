<template>
  <form class="d-flex my-3" @submit.prevent="">
    <input
      class="form-control mr-2"
      type="search"
      name="searchValue"
      placeholder="Buscar"
      aria-label="Search"
      :value="displayValue"
      @input="
        debounce(() => {
          onSearch($event.target.value);
        }, 500)
      "
    />
    <button class="btn btn-dark" type="submit">Buscar</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      displayValue: "",
    };
  },
  setup() {
    const createDebounce = () => {
      let timeout = null;
      return (fnc, delayMs) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fnc();
        }, delayMs || 500);
      };
    };

    return {
      debounce: createDebounce(),
    };
  },
  methods: {
    ...mapActions(["searchInTable", "fetchDataTable"]),
    onSearch(text) {
      this.displayValue = text;
      this.searchInTable(text);
    },
  },
  beforeUnmount() {
    this.searchInTable("");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
