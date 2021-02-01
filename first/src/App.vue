<template>
  <div id="app">
    <myheader></myheader>
    <p v-if="msg.length > 0 &msg.length <=20">{{msg}}</p>
    <p v-else-if="msg.length >20">too much words</p>
    <p v-else>no text</p>
    <input type="text" v-model="msg">
    <br><br><button @click="clear()">clear</button>

  </div>
</template>

<script>
import myheader from './components/myheader.vue'

export default{
  components:{
    myheader
  },
  data:function(){
    return{
      msg:'Hello Vue Cli!!'
    }
  },
  methods:{
    clear(){
      this.msg=''
    }
  }
}
</script>

<style>

</style>
