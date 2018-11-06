<template>
  <div class="log_cell" :class="{intent: !borderIntent}" @click="goLink">
    <p class="item_title" :style="'width:' + labelWidth">{{ title }}</p>
    <div class="item_right">
      <p class="item_value" :style="'text-align:' + valueAlign">{{ value }}</p>
      <i class="iconfont icon-jiantouyou" v-if="isLink"></i>
    </div>
  </div>
</template>

<script>
import { go } from '../../libs/router'
import getParentProp from '../../libs/get-parent-prop'
export default {
  name: 'cell',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    borderIntent: {
      type: Boolean,
      default: true
    },
    isLink: {
      type: Boolean,
      default: false
    },
    link: {
      type: [String, Object],
      default: ''
    },
    valueAlign: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    labelWidth () {
      return getParentProp(this, 'labelWidth')
    }
  },
  methods: {
    goLink () {
      go(this.link, this.$router)
    }
  }
}
</script>

<style lang="less">
@import url("../../styles/index.less");
@import url("../../assets/fonts/iconfont.css");
.log_cell {
  padding: 12px 15px;
  font-size: 14px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .item_right {
    margin-left: 10px;
    flex: 1;
    display: flex;
    align-items: center;
    .item_value {
      flex: 1;
    }
    .iconfont {
      font-size: 12px;
    }
    .item_value,
    .iconfont {
      color: #999999;
    }
  }
  .log_1px_b;
  &:last-child {
    &::after {
      display: none;
    }
  }
  &::after {
    left: 15px;
  }
  &.intent {
    &::after {
      left: 0px;
    }
  }
}
</style>
