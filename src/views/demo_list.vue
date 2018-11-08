<template>
  <div class="demo_list">
    <v-header title="demo list"></v-header>

    <group labelWidth="80px">
      <cell title="group" is-link link="group_demo"></cell>
      <cell title="cell" is-link link="cell_demo"></cell>
      <cell title="v_dialog" is-link link="v_dialog_demo"></cell>
      <cell title="alert" is-link link="alert_demo"></cell>
      <cell title="confirm" is-link link="confirm_demo"></cell>
      <cell title="loading" is-link link="loading_demo"></cell>
      <cell title="toast" is-link link="toast_demo"></cell>
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
.demo_list {
  padding-top: 45px;
  overflow: hidden;
}
</style>
