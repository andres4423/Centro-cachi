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
            <div class="historial_container">
                <h1 class="h_title">Historial Clínico</h1>

                <div class="historial">
                    <h3 class="p_historial">Paciente: Juan Camilo Rodriguez</h3>
                    <h4 class="p_fecha_historial">Fecha de la cita</h4>
                    <hr>
                    <h3 class="servicio_historial">Servicio Ofrecido: Terapia Individual</h3>
                    <hr>

                </div>
            </div>

</div>
</div>
</div>

    



</template>

<script>
export default{
    name:'historial_p'
}
</script>

<style>
@import url('../components/estilos/historia_paciente.css');
</style> -->


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
    @import url('../components/estilos/historia_paciente.css');
    </style>