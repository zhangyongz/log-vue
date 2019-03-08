<template>
  <div class="cropper_demo">
    <v-header title="cropper"></v-header>

    <p class="switch_btn" @click="switchCropper">显示</p>

    <p class="switch_btn" @click="switchCropper2">插件形式调用</p>

    <cropper v-model="show" :img="img" @backImg="backImg"></cropper>
  </div>
</template>

<script>
import { uploadImgAction } from '@/components/cropper/utils'
export default {
  name: 'cropper_demo',
  data () {
    return {
      show: false,
      img: ''
    }
  },
  methods: {
    backImg (img) {
      console.log(img)
    },
    switchCropper () {
      uploadImgAction().then((bundelImg) => {
        this.img = bundelImg
        this.show = true
      })
    },
    switchCropper2 () {
      this.$log.cropper.show({
        backImg (img) {
          console.log(img)
          var aLink = document.createElement('a')
          aLink.download = 'demo'
          aLink.href = img
          aLink.click()
        },
        fixedBox: false,
        canMoveBox: true
      })
    },
    onShow () {
      console.log('show')
    },
    onHide () {
      console.log('hide')
    },
    onCancel () {
      console.log('cancel')
    },
    onConfirm () {
      console.log('confirm')
    }
  }
}
</script>

<style lang="less">
@import url("../styles/index.less");
.cropper_demo {
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
