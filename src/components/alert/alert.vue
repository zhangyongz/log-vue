<template>
  <div class="log_alert">
    <v-dialog v-model="showValue"  @on-hide="$emit('on-hide')" @on-show="$emit('on-show')">
      <div class="alert_content">
        <div class="alert_content_hd">
          {{title}}
        </div>
        <div class="alert_content_bd" v-html="content">
        </div>
        <div class="alert_content_ft" @click="hide">
          {{buttonText}}
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import VDialog from '@/components/v-dialog'
export default {
  name: 'log_alert',
  data () {
    return {
      show: false,
      showValue: false
    }
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: {
      default: '确定',
      type: String
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
    }
  },
  components: {
    VDialog
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value
    }
  },
  methods: {
    hide () {
      this.showValue = false
    }
  }
}
</script>

<style lang="less">
@import url("../../styles/index.less");
.log_alert {
  .alert_content {
    background-color: #ffffff;
    font-size: 14px;
    .alert_content_hd {
      padding: 20px 25px 8px;
    }
    .alert_content_bd {
      min-height: 50px;
      padding: 0 20px 10px;
      font-size: 12px;
      color: #999999;
      box-sizing: border-box;
      word-break: break-all;
    }
    .alert_content_ft {
      height: 48px;
      color: #b4001b;
      .flex_center;
      .log_1px_t;
    }
  }
}
</style>
