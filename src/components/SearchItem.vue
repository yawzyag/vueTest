<template>
  <div class="row d-flex justify-content-center">
    <div
      v-if="getSearchItem && getSearchItem['Codigo Postal']"
      class="card text-white border-success bg-dark mb-3 p-3 text-center"
      style="max-width: 18rem;"
    >
      <div class="card-header">
        {{ getSearchItem["Codigo Postal"] }}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ getSearchItem.Estado }}</h5>
        <p class="card-text">
          {{ getSearchItem.Ciudad }}
        </p>
      </div>
    </div>
    <h1 class="m-3 text-center" v-else>Oh no 😢</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchItem",
  computed: mapGetters(["getSearchItem"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
