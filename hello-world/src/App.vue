<template>
  <div id="app">
    <Nav></Nav>
    <Banner></Banner>
  </div>
</template>

<script>
import Nav from './components/Nav/Nav.vue'
import Banner from './components/Banner/Banner.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Banner
  }
}
</script>

<style>

</style>
