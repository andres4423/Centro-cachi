
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