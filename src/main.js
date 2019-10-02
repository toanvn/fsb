import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import HomePage from './pages/Home.vue'
import AboutPage from './pages/About.vue'
import OurWorkPage from './pages/OurWork.vue'
import PressPage from './pages/Press.vue'
import VideoPage from './pages/Video.vue'

const routes = [
  { path: '/', component: HomePage},
  { path: '/about', component: AboutPage },
  { path: '/our-work', component: OurWorkPage },
  { path: '/press', component: PressPage},
  { path: '/video', component: VideoPage },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
