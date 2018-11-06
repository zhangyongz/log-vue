<template>
  <div class="dialog_demo_box">
    <v-header title="v_dialog"></v-header>

    <p class="switch_btn" @click="switchDialog">{{ switchText }}</p>

    <v-dialog v-model="show" @on-show="onShow" @on-hide="onHide">
      <div class="content">
        <img src="../assets/img/picture.jpg">
        <div class="icon_wrapper" @click="show=false">
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'dialog_demo',
  data () {
    return {
      show: false
    }
  },
  computed: {
    switchText () {
      switch (this.show) {
        case false:
          return 'show'
        case true:
          return 'hide'
      }
    }
  },
  methods: {
    switchDialog () {
      this.show = !this.show
    },
    onShow () {
      console.log('show')
    },
    onHide () {
      console.log('hide')
    }
  }
}
</script>

<style lang="less">
@import url("../styles/index.less");
.dialog_demo_box {
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
  .content {
    background-color: #ffffff;
    img {
      width: 100%;
    }
    .icon_wrapper {
      padding: 10px 0;
    }
  }
}
</style>
