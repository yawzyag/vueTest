<template>
  <div class=" row d-flex justify-content-center">
    <div class="align-self-center">
      <ZipcodeForm />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ZipcodeForm from "@/components/ZipcodeForm.vue";

export default {
  name: "FormCode",
  components: {
    ZipcodeForm,
  },
};
</script>

<style scoped></style>
