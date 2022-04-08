<script>
import MainHeader from './components/MainHeader.vue'
import MainBody from './components/MainBody.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainBody,
    MainFooter
  }
}
</script>

<template>
<div>
  <MainHeader />
  <MainBody />
  <MainFooter />
</div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
