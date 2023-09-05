<template>
<div class="compi">
<navbarAdmin></navbarAdmin>
<div class="buscador-container">
    <div class="desenfoque"></div>
   
        <div class="titulo_bus">
            <h2>Buscar usuario</h2>
        </div>
<form class="formu" action="" method="">
    <input class="buscador" type="text" placeholder="Digite la cédula">
    <button type="submit" class="boton_buscar"><Router-link to="/info_user">Buscar</Router-link></button>
</form>
</div>
</div>

</template>

<script>
import navbarAdmin from './navbarAdmin.vue'
export default{
    name:'gestion_usuario',
    components:{
        navbarAdmin
    }
}
</script>
    <style>
    @import url('./estilos/g_usuarios.css');
</style>
