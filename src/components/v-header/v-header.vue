<template>
  <header class="v_header_box">
    <div class="back" @click="back">
      <i class="iconfont icon-fanhui"></i>
    </div>

    <p class="title">{{title}}</p>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less">
@import url("../../styles/index.less");
.v_header_box {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 45px;
  padding: 0 45px;
  box-sizing: border-box;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  color: #ffffff;
  .flex_center;
  .back {
    .flex_center;
    width: 38px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .iconfont {
      font-size: 20px;
      font-weight: 400;
      color: #cccccc;
    }
  }
  .title {
    width: 100%;
    font-size: 16px;
    line-height: normal;
    text-align: center;
    .text_etc;
  }
}
</style>
