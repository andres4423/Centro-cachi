
<template>
    <div class="componen">
    <navbarD></navbarD>
    <div class="historial_container">
        <div class="desenfoque">

        </div>
                <h1 class="h_title">Historial Clínico</h1>

                <div class="historial">
                    <h2 class="p_historial">Paciente: Juan Camilo Rodriguez</h2>
                    <h3 class="p_fecha_historial">Fecha de la cita</h3>
                    <hr>
                    <h2 class="servicio_historial">Servicio Ofrecido: Terapia Individual</h2>
                    <hr>
                    <h2 class="histo_title">Historial</h2>
                        <hr>
                    <p class="historial_p">
El paciente Juan Camilo Rodriguez Pinto, Identificado con numero de cedula 1003315465 fue remitido por el servicio de terapia individual, donde se identifico actitudes indiferente por causas sentimentales 
</p>
                </div>
            </div>
            <br>
    </div>
    
    </template>
    <script>
    import navbarD from './navbar_portalD.vue';
    export default{
        name:'historial_p',
        components:{
            navbarD
        }
        
    }
</script>
    <style>
        @import url('../components/estilos/citas.css');
</style>