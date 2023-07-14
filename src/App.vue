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
    </div>
  </div>
  
  
</template>

<script>
import EmitSon from './components/EmitSon.vue'
import SlotDemo from './components/SlotDemo.vue'
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
    SlotDemo
  }
}
</script>

<style>

</style>
