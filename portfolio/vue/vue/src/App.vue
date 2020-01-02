<template>
  <div id="app">
    <app-header/>
    <div id="content">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from './components/layout/header.vue'
import appFooter from './components/layout/footer.vue'
import Vue from 'vue'
export default {
  name: 'App',
  components: {
    'app-header': appHeader,
    'app-footer': appFooter
  }
}
</script>

<style>
  @import './assets/css/reset.css';
  @import './assets/css/common.css';
  @import './assets/css/style.css';
</style>
