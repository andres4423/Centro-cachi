<template>
    <div class="componen">
    <navbarP></navbarP>
    <div class="background-container">
    </div>
    <div class="agendar_citas">
        <h1 class="tittle">Estas son tus citas programadas</h1>
        <div class="box">
            <button  id="refreshButton">Cancelar cita</button>
            <h2 class="name">Paciente: <br>Ferney Antonio Diaz Cardenas</h2>
            <h2 class="date">Fecha y hora de la cita: <br>13/08/2023 a las 9:00 am</h2>
            <h2 class="service">Servicio: <br>Psicoterapia indicidual</h2>
            <h2 class="place">Lugar: <br>Centro de psicoterapia y salud mental Valencia</h2>
            <h2 class="doctor">Especialista: <br> Andres Felipe Gamez</h2>
        </div>
            <br>
            <br>
    </div>
            <br>
    </div>


    
    </template>
    <script>
    import navbarP from './portal_paciente.vue';
    export default{
        name:'citas_pa',
        components:{
            navbarP
        }
        
        
    }

    </script>
    <style>
    @import url('./estilos/citas_pa.css');
    </style>