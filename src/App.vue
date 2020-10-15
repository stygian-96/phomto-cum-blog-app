<template>
  <div id="app">
    <Navbar />
    <Home />
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Navbar from './components/Navbar';
import Home from './components/views/Home';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}
</script>

<style>
#app {
}
</style>
