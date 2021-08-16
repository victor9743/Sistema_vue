<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>-->
  <div>
    <router-view/>
    <creditos/>
  </div>
  
</template>

<script>
import creditos from'./components/creditos.vue'

export default {
  
  components:{
    creditos
  }
}
</script>

<style>
*{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
