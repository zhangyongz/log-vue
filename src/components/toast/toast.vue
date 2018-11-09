<template>
  <div class="log_toast">
    <transition name="log-fade">
      <p class="toast_content" v-show="show" v-html="text">
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'log_toast',
  data () {
    return {
      show: false
    }
  },
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    text: String
  },
  watch: {
    show (val) {
      if (val) {
        this.$emit('input', true)
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('input', false)
        }, this.time)
      }
    },
    value (val) {
      this.show = val
    }
  },
  created () {
    if (this.value) {
      this.show = true
    }
  }
}
</script>

<style lang="less">
@import url("../../styles/index.less");
@import url("../../styles/transition.less");
.log_toast {
  .toast_content {
    position: fixed;
    z-index: 5001;
    width: 124px;
    min-height: 46px;
    padding: 10px;
    top: 180px;
    left: 50%;
    margin-left: -62px;
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
    color: #ffffff;
    box-sizing: border-box;
    word-break: break-all;
    .flex_center;
  }
}
</style>
