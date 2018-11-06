<template>
  <div class="alert_demo_box">
    <v-header title="alert"></v-header>

    <p class="switch_btn" @click="switchAlert">显示</p>

    <p class="switch_btn" @click="switchAlert2">插件形式调用</p>

    <alert v-model="show" title="title" content="content" @on-show="onShow" @on-hide="onHide"></alert>
  </div>
</template>

<script>
export default {
  name: 'alert_demo',
  data () {
    return {
      show: false
    }
  },
  methods: {
    switchAlert () {
      this.show = true
    },
    switchAlert2 () {
      this.$log.alert.show({
        title: '提示',
        content: '这是插件形式调用',
        buttonText: '知道了'
      })
    },
    onShow () {
      console.log('show')
    },
    onHide () {
      console.log('hide')
    }
  }
}
</script>

<style lang="less">
@import url("../styles/index.less");
.alert_demo_box {
  padding-top: 45px;
  overflow: hidden;
  .switch_btn {
    width: 300px;
    height: 40px;
    margin: 10px auto;
    color: #ffffff;
    background-color: #1aad19;
    border-radius: 10px;
    .flex_center;
  }
}
</style>
