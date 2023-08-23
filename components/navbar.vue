<template>
<div class="compe">
<div class="nav-container">
        <!--Navbar  -->
    <ul class="nav_options">
        <img src="../assets/imagenes/logo.png">
        <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/equipo">Equipo</router-link></li>
      <li><router-link to="/devices">Servicios</router-link></li>
      <li><button class="iniciar_sesion">Iniciar sesion</button></li>
     
    </ul>
   
</div>
<div class="a">
    <router-view></router-view>
</div>
</div>
</template>

<script>
export default{
    name:'navBar',
    props:{}
}

</script>