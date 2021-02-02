<template>
  <div class="login">
    <p>Username</p>
    <input type="text" v-model="username">
    <p>Password</p>
    <input type="text" v-model="password">
    <br><br><button :disabled="!isfull" >Login</button>
  </div>
</template>
<script>
export default {
  name:'Login',
  data:function(){
    return{
      username:'',
      password:'',
      toBoard:true
    }
  }
  ,
  computed:{
        isfull:function(){
          return this.username && this.password
        }
}
}
</script>
<style>
</style>