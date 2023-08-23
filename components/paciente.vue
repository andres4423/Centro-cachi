<template>
<!-- <portal_plantilla></portal_plantilla> -->

<div class="compon3">
    <div class="head">
        <img src="../assets/imagenes/logo.png">
    </div>
    <div class="container">
    <div class="op">
      <div class="op1">
        <div class="opc">
            <RouterLink class="op2" to="/paciente">Pacientes</RouterLink>
        </div>
        <div class="opc2">
        <RouterLink class="op2" to="/">Citas</RouterLink>
        </div>
      </div>
    </div>
    <div class="am">
        <div class="desenfoque">

        </div>
        <div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<!-- <div class="a2"></div> -->
<h2 class="esp">Terapia de apoyo</h2>
<!-- <div class="a3"></div> -->
<button class="historial_boton">Ver historial</button>

        </div>
        
        <div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<!-- <div class="a2"></div> -->
<h2 class="esp">Terapia de apoyo</h2>
<!-- <div class="a3"></div> -->
<button class="historial_boton">Ver historial</button>

        </div>
        
        <div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<!-- <div class="a2"></div> -->
<h2 class="esp">Terapia de apoyo</h2>
<!-- <div class="a3"></div> -->
<button class="historial_boton">Ver historial</button>

        </div>
        

    </div>
</div>
</div>
</template>

<script>

// import portal_plantilla from './portal_plantilla.vue';
export default{
    name:'paciente-a',
    components:{
        // portal_plantilla
    }
}

</script>

<style>
@import url('./estilos/paciente.css');
</style>