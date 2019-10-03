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
.b-brown {
  border-color: #b58b6b;
}
.black {
  color: #111;
}
/* Style buttons */
.btn-social .btn {
  background-color: transparent; /* Blue background */
  border: none; /* Remove borders */
  color: #b58b6b; /* White text */
  font-size: 15px; /* Set a font size */
  font-weight: 900;
  cursor: pointer; /* Mouse pointer on hover */
  border: thin solid #b58b6b;
  margin-right: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
}

.btn-social .gg, .btn-social .fb-messenger {
  padding-left: 9px;
}

.btn-social .fb-messenger {
  line-height: 14px;
}

/* Darker background on mouse-over */
.btn-social .btn:hover {
  color: #111;
  border-color: #111;
}
.main_content {
  width: 50%;
  margin: 0 auto;
  text-align: justify;
  margin-top: 46px;
}
.custom-paging .page-item .page-link {
  color: black;
}

.custom-paging .page-item.active .page-link {
  color: #000;
  background-color: #b58b6b;
  border-color: #b58b6b ;
}

.fa-facebook-messenger:before {
  content: "\f39f";
}
</style>
