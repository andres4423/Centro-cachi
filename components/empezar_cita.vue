<template>
<div class="compooo">
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
            <RouterLink class="op2" to="/citas_doc">Citas</RouterLink>
            </div>
          </div>
          <div class="op3">
            <div class="opc3">
                <RouterLink class="op2" to="/empezar_c">Log out</RouterLink>
            </div>
          </div>
        </div>

        <div class="form_cita">

        
        <div class="nombre_f">
            <h3 class="nombrep">Nombre Completo</h3>
            <h3 class="fecha">Fecha: DD/MM/AAAA</h3>
        </div>
        <form action="" method="">
            <h2 class="des_title">Descripción de la cita</h2>
             <textarea class="descripcion_cita" placeholder="Descripción Terapia"></textarea>


        </form>
            
    </div>
    </div>
</div>



</template>

<script>
export default{
    name:'empezar_cita',

}

</script>

<style>
@import url('./estilos/empezar_cita.css');

</style>