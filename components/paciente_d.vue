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
        <div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<h2 class="esp">Terapia de apoyo</h2>


        </div>
        
        <div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<h2 class="esp">Terapia de apoyo</h2>
<button class="historial_boton">Ver historial</button>

        </div>
        
        <div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<h2 class="esp">Terapia de apoyo</h2>
<button class="historial_boton">Ver historial</button>

        </div>
        

    </div>
</div> 
<div class="boton_historial_container">
    <button class="historial_boton"><RouterLink to="/historial">Ver historial</RouterLink></button>
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
-->


<template>
<div class="componen">
<navbarD></navbarD>
<div class="paciente_container">
    <div class="desenfoque"></div>
    <div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<h2 class="esp">Terapia de apoyo</h2>
<button class="historial_boton"><RouterLink to="/historial">Ver historial</RouterLink></button>
</div>
<div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<h2 class="esp">Terapia de apoyo</h2>
<button class="historial_boton">Ver historial</button>
        </div>
        <div class="paciente">
<h2 class="n_paciente">Ferney Díaz cardenas</h2>
<h2 class="esp">Terapia de apoyo</h2>
<button class="historial_boton">Ver historial</button>
        </div>

</div>
</div>

</template>
<script>
import navbarD from './navbar_portalD.vue';
export default{
    name:'pacientes_d',
    components:{
        navbarD
    }
}
</script>
<style>
@import url('./estilos/paciente.css');
</style> 

