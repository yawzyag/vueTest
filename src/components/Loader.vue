<template>
  <div class="placeholder-item"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.placeholder-item {
  box-shadow: 0 4px 10px 0 rgba(107, 16, 16, 0.15);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  height: 70vh;
}
.placeholder-item::before {
  content: "";
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 150px;
  background: linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);
  animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
</style>
