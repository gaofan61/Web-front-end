<!-- 父组件 -->
<template>
  <div>
    <EmitSon @getMsg="handleMyEvent"></EmitSon>
    {{ Msg }}
    <div>
      我是SlotDemo组件里内容
      <SlotDemo>
          我是父组件里面的插槽内容
      </SlotDemo>
      <SlotDemo></SlotDemo>
      <br>
      <RegisterDemo1></RegisterDemo1>
      <br>
      <RegisterDemo2></RegisterDemo2>

    </div>
  </div>
  
  
</template>

<script>
import EmitSon from './components/EmitSon.vue'
import SlotDemo from './components/SlotDemo.vue'
import RegisterDemo2 from './components/RegisterDemo2.vue'
export default {
  data(){
    return {
      Msg: ''
    }
  },
  methods: {
    handleMyEvent(value) {
      this.Msg = value
    }
  },
  components: {
    EmitSon,
    SlotDemo,
    RegisterDemo2
  }
}
</script>


<style>

</style>
