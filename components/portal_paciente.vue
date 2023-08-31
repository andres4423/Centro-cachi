<template>
    <div class="compea">
        <div class="container_nav">
    <ul class="nav_option">
        <img src="../assets/imagenes/logo.png">
      <li class="p_b"><router-link to="/paciente">Agendar cita</router-link></li>
      <li class="c_b"><router-link to="/citas">Citas</router-link></li>
      <li class="historial_b"><RouterLink to="/historial_po">Historial</RouterLink></li>
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
    name:'portal_paciente'
}
</script>

<style>
@import url('./estilos/plantilla_p.css');
</style>