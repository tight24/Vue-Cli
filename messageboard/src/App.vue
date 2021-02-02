<template>
  <div id="app">
    <div id="nav">
      <myheader></myheader>
    </div>
    <router-view/>
  </div>
</template>
<script>
import myheader from './components/myheader.vue'

export default {
  components:{
    myheader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
