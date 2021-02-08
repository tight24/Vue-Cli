<template>
  <div class="login">
    <p>Username</p>
    <input type="text" v-model="user.name">
    <p>Password</p>
    <input type="text" v-model="user.password">
    <br><br><button :disabled="!isfull" @click="login">Login</button>
  </div>
</template>
<script>
export default {
  name:'Login',
  data:function(){
    return{
      user:[
        {
          name:'',
          password:''
        }
      ],
      toBoard:true
    }
  }
  ,
  computed:{
    isfull:function(){
      return this.user.name && this.user.password
    }
  },
  methods:{
    login:function(){
      this.$store.commit('User/setParams', this.user.name, this.user.password)
      this.user.name='';
      this.user.password='';
    }
  }
}
</script>
<style>
</style>