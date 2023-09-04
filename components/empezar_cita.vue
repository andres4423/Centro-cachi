
<template>
    <div class="componen">
    <navbarD></navbarD>
    <div class="container_empC">
                <div class="desenfoque"></div>
                <div class="form_cita">


                    <div class="nombre_f">
                        <h3 class="nombrep">Nombre Completo</h3>
                        <h3 class="fecha">Fecha: DD/MM/AAAA</h3>
                    </div>
                    <form action="" method="">
                        <h2 class="des_title">Motivo de consulta</h2>
                        <textarea class="motivo_consulta" placeholder="Motivo de la consulta"></textarea>
                        <h2 class="problemaActual_t">Problema Actual</h2>
                        <textarea class="problema_actual" placeholder="Problema actual"></textarea>
                        <h2 class="hpersonal_t">Historial Personal</h2>
                        <textarea class="historial_personal" placeholder="Historial Personal"></textarea>
                        <h2 class="observaciones_t">Observaciones</h2>
                        <textarea class="observaciones_d" placeholder="Observaciones"></textarea>
                        <br>
                        <button class="envio_form" type=submit>Guardar</button>
                        <br>
                        <br>
                    </form>

                </div>
            </div>
        </div>

    
    </template>
    <script>
    import navbarD from './navbar_portalD.vue';
    export default{
        name:'empezar_cita',
        components:{
            navbarD

        }
    }
    </script>
    <style>
    @import url('./estilos/empezar_cita.css');
</style>