<template>
  <div class="row d-flex justify-content-center">
    <div
      v-if="getSearchItem && getSearchItem.code && !getLoadingState"
      class="card text-white border-success bg-dark mb-3 p-3 text-center"
      style="max-width: 18rem"
    >
      <div class="card-header">
        {{ getSearchItem.code }}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ getSearchItem.state }}</h5>
        <p class="card-text">
          {{ getSearchItem.city }}
        </p>
      </div>
    </div>
    <div v-else-if="getLoadingState" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <h1 v-else-if="getErrorState" class="m-3 text-center">Oh no 😢</h1>
    <p v-else class="m-3 text-center">Sin resultados</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchItem",
  computed: mapGetters(["getSearchItem", "getLoadingState", "getErrorState"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
