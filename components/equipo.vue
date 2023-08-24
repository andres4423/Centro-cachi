<template>
   <div class="compon">
<navBar></navBar>

        <div class="img">
            <img src="../assets/imagenes/equi.png" >
        </div>
        <br>
        <br>
        <br>
        <br>

        <div class="doc">
            <div class="do">
                <img src="../assets/imagenes/doc1.png" >
                <div class="cua">
                    siiii
                </div>
            </div>
        </div>
   </div>
    
</template>

<style scoped>
@import url('./estilos/servicios.css');
</style>

<script>
import navBar from './navbar.vue'
export default {
    name:'equipoCentro',
    props:{},
    components:{
        navBar
    }
}
</script>