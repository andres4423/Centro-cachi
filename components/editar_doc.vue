<template>
    <div class="com">
    <navBarAdmin></navBarAdmin>
    <div class="info_container">
            <div class="desenfoque">
    
            </div>
                    <h1 class="h_title">Información del usuario</h1>
                    <form class="informacion_editar">
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
                        <input type="text" name="nueva_direccion" v-model="direccion" class="e_direccion">
                       </div>
                       <div class="estadoU">
                        <p class="estado_u">Estado: </p>
                        <select id="estado" class="estado_op" v-model="Estado">
                          <option value="activo">Empleado</option>
                          <option value="inactivo">Retirado</option>
            
                     </select>
                       </div>
                       <div class="celularU">
                        <p class="celular_u">Celular: </p>
                        <input type="text" class="e_celular" v-model="celular" name="nuevo_celular">
                       </div>
                       <div class="correoU">
                        <p class="correo_u">Correo Electrónico: </p>
                        <input type="text" name="nuevo_correo" v-model ="correo" class="e_correo">
                       </div>
                    </form>
                       </div>
                    <button class="boton_guardar"><RouterLink to="/">Guardar</RouterLink></button>    
                    <button class="boton_cancelar"><RouterLink to="/info_doc">Cancelar</RouterLink></button>    
                
                </div>
            
    
    
    </template>
    
    <script>
    import navBarAdmin from './navbarAdmin.vue'
    export default{
        
        name:'editarInfo_doc',
        components:{
            navBarAdmin
        },
        data() {
        return {
          direccion: 'Calle 112 #32-B15', 
          celular: '3002336900', 
          correo: 'juank123@gmail.com',
          Estado: 'Activo'
        };
      }
    
    
    }
    </script>
    
    <style>
    @import url('./estilos/editar_info.css');
    </style>