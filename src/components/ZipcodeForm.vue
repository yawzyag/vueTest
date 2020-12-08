<template>
  <div v-if="getLoadingCode" class="mt-4">
    <Loader />
  </div>
  <div v-else class="card mt-4">
    <h5 class="card-header">Ingresa la informacion del nuevo codigo</h5>
    <div class="card-body">
      <Form @submit="sendCod" :validation-schema="schema" v-slot="{ errors }">
        <div class="form-row">
          <div class="input-group mb-3">
            <label class="input-group-text">Codigo:</label>
            <Field
              name="code"
              type="text"
              class="form-control"
              placeholder="Ej: 55490"
              :class="{ 'is-invalid': errors.code }"
            />
            <div class="invalid-feedback">{{ errors.code }}</div>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text">Ciudad:</label>
            <Field
              name="city"
              type="text"
              placeholder="Ej: Guadalajara"
              class="form-control"
              :class="{ 'is-invalid': errors.city }"
            />
            <div class="invalid-feedback">{{ errors.city }}</div>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text">Estado:</label>
            <Field
              name="state"
              placeholder="Ej: Jalisco"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.state }"
            />
            <div class="invalid-feedback">{{ errors.state }}</div>
          </div>
          <div class="input-group mb-3">
            <label class="input-group-text">Email:</label>
            <Field
              name="email"
              type="text"
              placeholder="Ej: juanito@email.com"
              class="form-control"
              :class="{ 'is-invalid': errors.email }"
            />
            <div class="invalid-feedback">{{ errors.email }}</div>
          </div>
        </div>

        <div class="form-group d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" class="btn btn-md btn-dark">Enviar</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/Loader.vue";

export default {
  name: "ZipcodeForm",
  components: {
    Form,
    Field,
    Loader,
  },
  computed: mapGetters(["getLoadingCode", "getErrorCode"]),
  setup() {
    const schema = Yup.object().shape({
      // title: Yup.string().required("Title is required"),
      code: Yup.string().required("El codigo nuevo es requerido"),
      city: Yup.string().required("La ciudad es requerida"),
      state: Yup.string().required("El estado es requerido"),
      email: Yup.string()
        .required("Tu Email es requerido")
        .email("Revisa tu email"),
    });

    return {
      schema,
    };
  },
  methods: {
    ...mapActions(["sendNewCode"]),
    sendCod(values) {
      this.$toast.show(`El codigo sera agregado!`, { duration: 10000 });
      this.sendNewCode(values);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
