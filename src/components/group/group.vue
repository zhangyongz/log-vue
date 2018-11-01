<template>
  <div class="group_box">
    <p class="group_title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'group',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String
    },
    labelWidth: {
      type: String
    }
  }
}
</script>

<style lang="less">
@import url("../../styles/index.less");
.group_box {
  margin-bottom: 10px;
  .group_title {
    padding: 10px 15px 5px;
    font-size: 14px;
    color: #999999;
  }
  .log_1px_tb;
}
</style>
