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
            <RouterLink class="op2" to="/citas_doc">Citas</RouterLink>
            </div>
          </div>
          <div class="op3">
            <div class="opc3">
                <RouterLink class="op2" to="/empezar_c">Log out</RouterLink>
            </div>
          </div>
        </div>
        <div class="am">
            <div class="desenfoque">
    
            </div>
            <div class="paciente">
    <h2 class="n_paciente">Ferney Díaz cardenas</h2>

    <h2 class="esp">Terapia de apoyo</h2>
    <button class="historial_boton">Iniciar Cita</button>
    
            </div>
            
            <div class="paciente">
    <h2 class="n_paciente">Ferney Díaz cardenas</h2>
    <h2 class="esp">Terapia de apoyo</h2>
    <button class="historial_boton">Iniciar Cita</button>
    
            </div>
            
            <div class="paciente">
    <h2 class="n_paciente">Ferney Díaz cardenas</h2>
    <h2 class="esp">Terapia de apoyo</h2>
    <button class="historial_boton">Iniciar cita</button>
    
            </div>
            
    
        </div>
    </div>
    </div>
    </template>
    
    <script>

    export default{
        name:'citas_doc',
        components:{
           
        }
    }
    
    </script>
    
    <style>
    @import url('./estilos/paciente.css');
    </style>