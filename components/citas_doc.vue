<!-- <template>  
    <div class="compon3">
        <div class="head">
            <img src="../assets/imagenes/logo.png">
            <h3 class="n_doc">Nombre del Dr</h3>
        </div>
        <div class="container">
            <div class="op">
          <div class="op1">
            <div class="opc">
                <RouterLink class="op2" to="/paciente">Pacientes</RouterLink>
            </div>
            <div class="opc2">
            <RouterLink class="op2" to="/citas_doc">Citas</RouterLink>
            </div>
          </div>
          <div class="op3">
            <div class="opc3">
                <RouterLink class="op2" to="/">Log out</RouterLink>
            </div>
          </div>
        </div>  
        <div class="am">
            <div class="desenfoque">
            </div>

            <div class="pac_cita">
        <h2 class="n_paciente">Ferney Díaz cardenas</h2>
         <div class="espace"></div>
<h2 class="espe">Terapia de apoyo</h2>

            </div>

                 <div class="pac_cita">
        <h2 class="n_paciente">Ferney Díaz cardenas</h2>
         <div class="espace"></div>
<h2 class="espe">Terapia de apoyo</h2>

            </div>
            <div class="pac_cita">
        <h2 class="n_paciente">Ferney Díaz cardenas</h2>
        <div class="espace"></div>
<h2 class="espe">Terapia de apoyo</h2>

            </div>
            
    
        </div>
     
    </div>
   <div class="empezar_boton_container">
    <button class="empezar_boton"><RouterLink class="txtR" to="/empezar_c">Empezar cita</RouterLink></button>
   </div>
    </div>
    </template>
    
    <script>

    export default{
        name:'citas_doc',
        components:{
           
        }
    }
    
    </script>
    
    <style>
    @import url('./estilos/citas.css');
    </style> -->
<template>
<div class="componen">
<navbarD></navbarD>
<div class="citas_container">
    <div class="desenfoque"></div>
    <div class="pac_cita">
        <h2 class="n_paciente">Ferney Díaz cardenas</h2>
         <div class="espace"></div>
    <h2 class="espe">Terapia de apoyo</h2>
    <button class="empezar_boton"><RouterLink class="txtR" to="/empezar_c">Empezar cita</RouterLink></button>
            </div>
            
            <div class="pac_cita">
        <h2 class="n_paciente">Ferney Díaz cardenas</h2>
         <div class="espace"></div>
<h2 class="espe">Terapia de apoyo</h2>
<button class="empezar_boton"><RouterLink class="txtR" to="/empezar_c">Empezar cita</RouterLink></button>
            </div>
            <div class="pac_cita">
        <h2 class="n_paciente">Ferney Díaz cardenas</h2>
        <div class="espace"></div>
<h2 class="espe">Terapia de apoyo</h2>
<button class="empezar_boton"><RouterLink class="txtR" to="/empezar_c">Empezar cita</RouterLink></button>
            </div>
</div>
</div>

</template>
<script>
import navbarD from './navbar_portalD.vue';
export default{
    name:'citas_d',
    components:{

        navbarD
    }
}
</script>
<style>
  @import url('./estilos/citas.css');
</style>