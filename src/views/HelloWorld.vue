<template>
  <div class="hello_world_box">
    <group title="title" labelWidth="80px">
      <cell title="当前版本" value="v2.14"></cell>
      <cell title="用户协议" value="v2.14" is-link value-align="right"></cell>
    </group>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
.hello_world_box {
}
</style>
