<template>
  <div class="board">
    <textarea  cols="50" rows="5"  v-model="message"></textarea>
    <br><br>
    <button :disabled="!isfull">Send</button>
  </div>
</template>
<script>
export default {
  data:function(){
    return {
      message:''
    }
  },
  computed:{
    isfull:function(){
      return this.message
    }
  }
}
</script>