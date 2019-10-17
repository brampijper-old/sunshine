<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from './components/TheHeader.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
