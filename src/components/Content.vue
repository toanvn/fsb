<template>
  <div class="main-content">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from '../pages/Home.vue'
export default {
  name: 'Content',
  props: {
    msg: String
  },
  components: {
    'home-page': HomePage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
