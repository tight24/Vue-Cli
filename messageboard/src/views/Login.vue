<template>
  <div class="login">
    <p>Username</p>
    <input type="text" v-model="username">
    <p>Password</p>
    <input type="text" v-model="password">
    <br><br><button :class="{inActive:isBlank}" :disabled="!isBlank">Login</button>
  </div>
</template>
<script>
export default {
  name:'Login',
  data:function(){
    return{
      username:'',
      password:''
    }
  }
  ,
  computed:{
        isBlank:function(){
          return this.username && this.password
        }
}
}
</script>
<style>
.inActives{
  pointer-events: none;
  color: gray;
}
</style>