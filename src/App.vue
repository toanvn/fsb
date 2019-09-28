<template>
  <div id="app">
    <Header />
    <MainContent msg='this is main content'/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MainContent from './components/Content.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    MainContent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
}
.red {
  color: #c81e0f;
}
.brown {
  color: #b58b6b;
}
.black {
  color: #111;
}
</style>
