import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/views/Home.vue';
import AddPost from './components/AddPost.vue';


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/addPost', component: AddPost},
  {path: '/', component: Home}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
