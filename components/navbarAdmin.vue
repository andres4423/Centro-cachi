<template>
<div class="compo">
    <div class="container_nav">
    <ul class="nav_option">
        <img src="../assets/imagenes/logo.png">
      <li class="p_b"><router-link to="/gestOp">Usuarios</router-link></li>
      <li class="c_b"><router-link to="/citas_doc">Inventarios</router-link></li>
      <li class="salir_b"><RouterLink to="/">Log out</RouterLink></li>
    </ul>
</div>
<div class="vista">
    <RouterView></RouterView>
</div>
</div>

</template>

<script>
export default{
    name:'navbarAdmin'
}
</script>

<style>
@import url('./estilos/navbarAdmin.css');

</style>