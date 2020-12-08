<template>
  <div id="nav">
    <nav class="navbar navbar-expand-md p-2 navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">IGEO</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/zipcodes">Zipcodes</router-link>
            <router-link class="nav-link" to="/nuevo-codigo"
              >Nuevo Codigo</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
