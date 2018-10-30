<template>
  <div class="hello_world_box">
    <cell></cell>
  </div>
</template>

<script>
import Cell from '@/components/cell'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Cell
  }
}
</script>

<style lang="less">
.hello_world_box {
}
</style>
