<!-- 子组件 -->
<template>
    <div>
        <button @click="sendMsg">传递数据</button>
    </div>
</template>
<script>
export default {
    methods: {
        sendMsg() {
            this.$emit('getMsg', '你好')
        }
    }
}
</script>
<style>
</style>