<template>

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
    <div class="a">
        <RouterView></RouterView>
    </div>
</div>
</div>
</template>


<script>
export default{
    name: 'portal_plantilla',

}

</script>

<style>
@import url('./estilos/plantilla_portal1.css');
</style>