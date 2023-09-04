<template>
    <div class="componen">
    <navbarP></navbarP>
        <label  class="espe_agendar">Especialidad</label>
        <input type="date" name="" id="calen">
                <select class="seleccionar">
                    <option selected>Seleciona</option>
                    <option value="">Evaluación y diagnóstico psicológico </option>
                    <option value="">Psicoterapia individual</option>
                    <option value="">Terapia familiar</option>
                    <option value="">Psicoterapia de pareja</option>
                    <option value="">Terapia de grupo</option>
                    <option value="">Terapia cognitivo-conductual</option>
                    <option value="">Terapia de apoyo</option>
                    <option value="">Terapia de juego (para niños)</option>
                    <option value="">Terapia de grupo específica</option>
                    <option value="">Consulta psiquiátrica</option>
                </select>
    <div class="agendar">

        <div class="especialidad">
            
                <!-- <div class="calendario">
                    <div class="si">
                        <div class="root">
                        <div class="calendar" id="calendar">
                            <div class="calendar__header">
                                <button type="button" class="control">&lt;</button>
                                <span class="mes">septiembre 2023</span>
                                <button type="button" class="control">&gt;</button>
                            </div>
                            <div class="calendar_body">
                                <div class="grid__header">
                                    <span class="dias">Lun</span>
                                    <span class="dias">Mar</span>
                                    <span class="dias">Mié</span>
                                    <span class="dias">Jue</span>
                                    <span class="dias">Vie</span>
                                    <span class="dias">Sab</span>
                                    <span class="dias">Dom</span>
                                </div>
                                <div class="grid__body">
                                    <span class="grid__cell grid__cell--gd grid__cell--selected" >1</span>
                                    <span class="grid__cell grid__cell--gd">2</span>
                                    <span class="grid__cell grid__cell--gd">3</span>
                                    <span class="grid__cell grid__cell--gd">4</span>
                                    <span class="grid__cell grid__cell--gd">5</span>
                                    <span class="grid__cell grid__cell--gd">6</span>
                                    <span class="grid__cell grid__cell--gd">7</span>
                                    <span class="grid__cell grid__cell--gd">8</span>
                                    <span class="grid__cell grid__cell--gd">9</span>
                                    <span class="grid__cell grid__cell--gd">10</span>
                                    <span class="grid__cell grid__cell--gd">11</span>
                                    <span class="grid__cell grid__cell--gd">12</span>
                                    <span class="grid__cell grid__cell--gd">13</span>
                                    <span class="grid__cell grid__cell--gd">14</span>
                                    <span class="grid__cell grid__cell--gd">15</span>
                                    <span class="grid__cell grid__cell--gd">16</span>
                                    <span class="grid__cell grid__cell--gd">17</span>
                                    <span class="grid__cell grid__cell--gd">18</span>
                                    <span class="grid__cell grid__cell--gd">19</span>
                                    <span class="grid__cell grid__cell--gd">20</span>
                                    <span class="grid__cell grid__cell--gd">21</span>
                                    <span class="grid__cell grid__cell--gd">22</span>
                                    <span class="grid__cell grid__cell--gd">23</span>
                                    <span class="grid__cell grid__cell--gd">24</span>
                                    <span class="grid__cell grid__cell--gd">25</span>
                                    <span class="grid__cell grid__cell--gd">26</span>
                                    <span class="grid__cell grid__cell--gd">27</span>
                                    <span class="grid__cell grid__cell--gd">28</span>
                                    <span class="grid__cell grid__cell--gd">29</span>
                                    <span class="grid__cell grid__cell--gd">30</span>
                                    <span class="grid__cell grid__cell--gd">31</span>
                                    <span class="grid__cell grid__cell--gd">32</span>
                                    <span class="grid__cell grid__cell--gd">33</span>
                                    <span class="grid__cell grid__cell--gd grid__cell--disabled">34</span>
                                    <span class="grid__cell grid__cell--gd grid__cell--disabled">35</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div> -->
                
                
            
        </div>
    </div>

    </div>
    <div class="margen"></div>
</template>

<script>
import navbarP from './portal_paciente.vue';
    export default{
        name:'citas_pa',
        components:{
            navbarP
        },
                
            
        }
        


</script>

<style>
    @import url('./estilos/agendar.css');
    
</style>
