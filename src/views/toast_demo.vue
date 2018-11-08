<template>
  <div class="toast_demo">
    <v-header title="toast"></v-header>

    <p class="switch_btn" @click="showToast">显示</p>

    <p class="switch_btn" @click="showToast2">插件形式调用</p>

    <toast v-model="show" text="toast"></toast>
  </div>
</template>

<script>
export default {
  name: 'toast_demo',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showToast () {
      this.show = true
    },
    showToast2 () {
      this.$log.toast.text('toast')
    }
  }
}
</script>

<style lang="less">
@import url("../styles/index.less");
.toast_demo {
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
