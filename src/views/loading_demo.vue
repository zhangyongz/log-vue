<template>
  <div class="loading_demo">
    <v-header title="loading"></v-header>

    <p class="switch_btn" @click="showLoading">显示</p>

    <p class="switch_btn" @click="showLoading2">插件形式调用</p>

    <loading v-model="show" text="加载中"></loading>
  </div>
</template>

<script>
export default {
  name: 'loading_demo',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showLoading () {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 1000)
    },
    showLoading2 () {
      this.$log.loading.show({
        text: '加载中'
      })
      setTimeout(() => {
        this.$log.loading.hide()
      }, 1000)
    }
  }
}
</script>

<style lang="less">
@import url("../styles/index.less");
.loading_demo {
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
