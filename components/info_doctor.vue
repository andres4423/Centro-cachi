<template>
    <div class="componi">
        <navbarAdmin></navbarAdmin>
        <div class="info_container">
            <div class="desenfoque">
    
            </div>
                    <h1 class="h_title">Información del Psicológo/a</h1>
                    <div class="informacion">
                        <div class="names">
                       <p class="nombre_u">Nombre Completo: </p>
                       <p class="nameU"> Juan Camilo Rodriguez</p>
                    </div>
                       <div class="identificacion">
                        <p class="cedula_u">N° Identificación: </p>
                       <p class="cedula">38712731</p>
                       </div>
                       <div class="direccionU">
                        <p class="direccion_u">Dirección: </p>
                        <p class="direcc">Cll 111 # 23B-52</p>
                       </div>
                       <div class="estadoU">
                        <p class="estado_u">Estado: </p>
                        <p class="estad">Activo</p>
                       </div>
                       <div class="celularU">
                        <p class="celular_u">Celular: </p>
                        <p class="celuco">3002336900</p>
                       </div>
                       <div class="correoU">
                        <p class="correo_u">Correo Electrónico: </p>
                        <p class="correazo">juank123@gmail.com</p>
                       </div>
                       
                       </div>
                    <button class="boton_editar"><RouterLink to="/editar_doc">Editar Informacion</RouterLink></button>    
                </div>
                <br>
    </div>
    
    </template>
    
    <script>
    import navbarAdmin from '../components/navbarAdmin.vue'
    export default{
        name:'info_doctor',
        components:{
            navbarAdmin
        }
    }
    </script>
    
    <style>
    @import url('./estilos/info-usuario.css');
    </style>
    