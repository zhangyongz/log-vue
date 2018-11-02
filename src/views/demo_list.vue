<template>
  <div class="demo_list_box">
    <v-header title="demo list"></v-header>

    <group labelWidth="80px">
      <cell title="group" is-link link="group_demo"></cell>
      <cell title="cell" is-link link="cell_demo"></cell>
      <cell title="v_dialog" is-link link="v_dialog_demo"></cell>
    </group>
  </div>
</template>

<script>
export default {
  name: 'demo_list_box',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
.demo_list_box {
  padding-top: 45px;
}
</style>
