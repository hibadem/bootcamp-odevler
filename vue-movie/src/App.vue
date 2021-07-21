<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
export default {
components: {
  Home
},
setup() {
  return {

  }
}
}
</script>

<style>

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #111;
}

</style>