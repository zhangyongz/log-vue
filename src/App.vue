<template>
  <div id="app">
    <transition :name="'route-' + direction">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState('user', {
      direction: state => state.direction
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  color: #333333;
  background-color: #f5f5f5;
}
.route-reverse-enter-active,
.route-reverse-leave-active,
.route-forward-enter-active,
.route-forward-leave-active,
.route-fade-enter-active,
.route-fade-leave-active {
  width: 100%;
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.route-reverse-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.route-reverse-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.route-forward-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.route-forward-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.route-fade-enter {
  opacity: 0;
}

.route-fade-leave-active {
  opacity: 0;
}
</style>
