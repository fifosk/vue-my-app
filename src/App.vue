<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Moja prva Vue.js appka"/>
  <div>
    <nav>
      <router-link to="/">Home </router-link>
      <router-link to="/NewWindow">About </router-link>
    </nav>
    <router-view></router-view>
  </div>
  <NewWindow/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NewWindow from './components/NewWindow.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NewWindow
  }
}
</script>

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
