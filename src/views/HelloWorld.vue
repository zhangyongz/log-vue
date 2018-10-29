<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hello-j></hello-j>
  </div>
</template>

<script>
import { HelloJ } from 'log-vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HelloJ
  }
}
</script>

<style>
</style>
