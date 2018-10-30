<template>
  <div class="cell_box">
    <div class="cell_item">

    </div>
  </div>
</template>

<script>
export default {
  name: 'cell',
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import url('../../styles/index.less');
.cell_box {
  .cell_item {
    height: 45px;
    background-color: #ffffff;
    .log_1px_b(#D9D9D9);
  }
}
</style>
