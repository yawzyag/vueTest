<template>
  <div class="home row d-flex justify-content-center">
    <div class="bg"></div>
    <div class="align-self-center">
      <CodeSearch />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CodeSearch from "@/components/CodeSearch.vue";

export default {
  name: "Home",
  components: {
    CodeSearch,
  },
};
</script>

<style scoped>
.home{
  height: calc(100vh - 56px); 
}
.bg {
  /* The image used */
  background-image: url("../assets/postalcode.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  opacity: 0.7;
}
</style>
