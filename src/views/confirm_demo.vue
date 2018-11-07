<template>
  <div class="confirm_demo">
    <v-header title="confirm"></v-header>

    <p class="switch_btn" @click="switchConfirm">显示</p>

    <p class="switch_btn" @click="switchConfirm2">插件形式调用</p>

    <confirm v-model="show" title="title" content="content" @on-show="onShow" @on-hide="onHide" @on-cancel="onCancel" @on-confirm="onConfirm"></confirm>
  </div>
</template>

<script>
export default {
  name: 'confirm_demo',
  data () {
    return {
      show: false
    }
  },
  methods: {
    switchConfirm () {
      this.show = true
    },
    switchConfirm2 () {
      this.$log.confirm.show({
        title: '提示',
        content: '这是插件形式调用',
        confirmText: '是',
        cancelText: '否'
      })
    },
    onShow () {
      console.log('show')
    },
    onHide () {
      console.log('hide')
    },
    onCancel () {
      console.log('cancel')
    },
    onConfirm () {
      console.log('confirm')
    }
  }
}
</script>

<style lang="less">
@import url("../styles/index.less");
.confirm_demo {
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
