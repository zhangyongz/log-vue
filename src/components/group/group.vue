<template>
  <div class="log_group">
    <p class="group_title" v-if="title">{{ title }}</p>
    <div class="group_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'log_group',
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
.log_group {
  margin-bottom: 10px;
  .group_title {
    padding: 10px 15px 5px;
    font-size: 14px;
    color: #999999;
  }
  .group_content {
    .log_1px_tb;
  }
}
</style>
