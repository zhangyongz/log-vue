<template>
  <div class="group_demo_box">
    <v-header title="group"></v-header>

    <group>
      <cell title="title" value="value"></cell>
      <cell title="title" value="value"></cell>
    </group>
    <group title="title">
      <cell title="title" value="value"></cell>
      <cell title="title" value="value"></cell>
    </group>
    <group title="label-width" label-width="100px">
      <cell title="title" value="value"></cell>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
export default {
  name: 'group_demo',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.group_demo_box {
  padding-top: 45px;
  overflow: hidden;
}
</style>
