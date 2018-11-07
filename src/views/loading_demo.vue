<template>
  <div class="loading_demo">
    <v-header title="loading"></v-header>

    <p class="switch_btn" @click="showLoading">显示</p>

    <loading v-model="show"></loading>
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
      }, 3000)
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
