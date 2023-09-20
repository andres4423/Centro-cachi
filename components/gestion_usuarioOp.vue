<template>

<div class="cccc">
    <navbarAdmin></navbarAdmin>
    <div class="opcion-container">
    <div class="desenfoque"></div>
        <div class="titulo_op">
            <h2>Tipo de Usuario</h2>
        </div>
<div class="opciones_o">
    <img class="paciente_logo" src="../assets/imagenes/paciente_logo.png">
    <img class="medico_logo" src="../assets/imagenes/psicologo_logo.png">
    <button type="submit" class="boton_op_p"><Router-link to="/gestion_usuario">Paciente</Router-link></button>
    <button type="submit" class="boton_op_D"><Router-link to="/g_doc">Psicológo/a</Router-link></button>
    
</div>
</div>
</div>


</template>

<script>
import navbarAdmin from './navbarAdmin.vue';
export default{
name:'Opcion_gU',
components:{
    navbarAdmin
}
}
</script>

<style>
@import url('./estilos/gUsuario.css');
</style>