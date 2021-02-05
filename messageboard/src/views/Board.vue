<template>
  <div class="board">
    <Message></Message>
    <textarea  cols="50" rows="5"  v-model="message"></textarea>
    <br><br>
    <button :disabled="!isful" @click="send">Send</button>
  </div>
</template>
<script>
import Message from '@/components/message.vue'
export default {
  components:{
    Message
  },
  data:function(){
    return {
      message:''
    }
  },
  computed:{
    isful:function(){
      return this.message
    }
  }
}
</script>