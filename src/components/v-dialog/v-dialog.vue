<template>
  <div class="log_dialog">
    <transition name="log-mask">
      <div class="mask" v-show="show" @click="hide"></div>
    </transition>

    <transition name="log-dialog">
      <div class="dialog_content" v-show="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'log_dialog',
  model: {
    prop: 'show',
    event: 'change'
  },
  data () {
    return {
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
    }
  },
  methods: {
    hide () {
      this.$emit('change', false)
    }
  }
}
</script>

<style lang="less">
@import url("../../styles/transition.less");
.log_dialog {
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .dialog_content {
    position: fixed;
    display: table;
    z-index: 5000;
    width: 80%;
    max-width: 300px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: #ffffff;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
  }
}
</style>
