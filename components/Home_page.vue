<template>
    <div class="comp">
    <div class="fondonav">
        <!--Navbar  -->
    <ul class="nav_options">
        <img src="../assets/imagenes/logo.png">
        <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/equipo">Equipo</router-link></li>
      <li><router-link to="/devices">Servicios</router-link></li>
      <li><button class="iniciar_sesion">Iniciar sesion</button></li>
      <router-view></router-view>
    </ul>  
</div>
<!-- Mision, visión y objetivo -->
<div class="info-container">
    <div class="mision">
        <h3>Misión</h3>
        <p>Acompañamos  y cuidamos  tu 
salud mental. Contamos con los 
mejores especialistas preparados para la mejor atención a las necesidades del usuario. Tu bienestar mental es nuestra prioridad.</p>

    </div>

    <div class="vision">
        <h3>Visión</h3>
        <p>Nuestra visión es liderar en el cuidado de la salud mental, brindando los mejores servicios para nuestros usuarios destacándonos por nuestro compromiso con el bienestar emocional y nuestra innovación tecnológica</p>
    </div>
   
</div>

<div class="objetivo">
        <h3>Objetivo</h3>
        <p>Garantizar un buen servicio de cuidado de la salud mental que cumpla con las expectativas del cliente con un buen acompañamiento para de este modo mejorar su bienestar.</p>
    </div>
<!-- Registro cantidad pacientes -->
<div class="registro_pacientes">
    <div class="pacientes">
        <h3>+5.000</h3>
        <h3>Pacientes</h3>
    </div>
    <div class="psico_esp">
        <h3>12</h3>
        <h3>Psicólogos y especialistas</h3>
    </div>
    <div class="rehab">
        <h3>+500</h3>
        <h3>Pacientes rehabilitados</h3>
    </div>
</div>
<br>
<br>
<!-- Servicios -->
<h2 class="servicios_titulo">NUESTROS SERVICIOS</h2>
<div class="servicios-container">
    <br>
    <br>
 
    <div class="servicio1">
        <img src="../assets/imagenes/Servicio1.png">
        <img class="sombra" src="../assets/imagenes/Sombra_individual.png">
        <p>Psicoterapia individual</p>
    </div>
    <div class="servicio2">
        <img src="../assets/imagenes/Servicio2.png">
        <img class="sombra2" src="../assets/imagenes/Sombra_individual.png">
        <p>Terapia familiar</p>
    </div>
    <div class="servicio3">
        <img src="../assets/imagenes/Servicio3.png">
        <img class="sombra3" src="../assets/imagenes/Sombra_individual.png">
        <p>Terapia de pareja</p>
    </div>
</div>
<router-link to="/devices"><button class="boton_servicio">Conoce más</button></router-link>
<br>
<br>
<!-- Equipo -->
<h2 class="equipo-titulo">Nuestro Equipo</h2>
<div class="equipo-container">

<div class="psico1">
<img src="../assets/imagenes/psico1.png">
</div>
<div class="psico2">
<img src="../assets/imagenes/psico2.png">
</div>
<div class="psico3">
<img src="../assets/imagenes/psico3.png">
</div>
</div>
<router-link to="/equipo"><button class="boton_equipos">Conoce más</button></router-link>
<br>
<br>

<!-- Convenios -->
<br>
<h2 class="convenios-titulo">Nuestros convenios</h2>
<div class="convenios_container">
    <div class="c1">
        <img src="../assets/imagenes/con1.png">
    </div>
    <div class="c2">
        <img src="../assets/imagenes/con2.png">
    </div>
    <div class="c3">
        <img src="../assets/imagenes/con3.png">
    </div>
    <div class="c4">
        <img src="../assets/imagenes/con4.png">
    </div>
</div>
<br>
<br>

<!-- FOOTER -->

<div class="footer-container">
    

        <img class="logo" src="../assets/imagenes/logo.png">

      
        
            <img class ="celular" src="../assets/imagenes/telefono.png">
            <p class="cel_p">300 233 6900</p>
         
            <img class="correo" src="../assets/imagenes/correo.png"> 
            <p class="correo_p">centro_psicoterapiaValencia@gmail.com</p>

            <img class="direccion" src="../assets/imagenes/direccion.png">
            <p class="dir_p">Calle 93 #33A-120</p>
        <div class="redes">

        </div>
</div>
</div>


</template>

<script>
export default{
    name:'Home_page',
    props:{   
    }

}
</script>

<style scoped>
@import url('./estilos/home.css');

</style>