<template>
  <div class="cell_demo_box">
    <v-header title="cell"></v-header>
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <group title="islink">
      <cell title="title" is-link link="BACK"></cell>
    </group>
    <group title="value-align">
      <cell title="title" value="value" value-align="right"></cell>
    </group>
  </div>
</template>

<script>
export default {
  name: 'demo_list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
.cell_demo_box {
  padding-top: 45px;
  overflow: hidden;
}
</style>
