<template>
    <div class="compea">
        <div class="container_nav">
    <ul class="nav_option">
        <img src="../assets/imagenes/logo.png">
      <li class="p_b"><router-link to="/paciente">Paciente</router-link></li>
      <li class="c_b"><router-link to="/citas_doc">Citas</router-link></li>
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
    name:'navbarD'
}
</script>

<style>
@import url('./estilos/navbarD.css');
</style>