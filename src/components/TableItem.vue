<template>
  <tr>
    <th scope="row">{{ item.code }}</th>
    <td>{{ item.state }}</td>
    <td>{{ item.city }}</td>
  </tr>
</template>

<script>
export default {
  name: "TableItem",
  props: {
    item: {
      "Codigo Postal": String,
      "Zona de Entrega": String,
      "Nombre Col": String,
      Asentamiento: String,
      Municipio: String,
      Estado: String,
      Ciudad: String,
      SD: String,
      ND: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
