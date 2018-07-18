<template>
  <div>
    <Navbar/>
    <div id="container">
      <router-view></router-view>
      <Sidebar/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

@Component({
  components: {
    Navbar,
    Sidebar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
div#container {
  padding-top: 42px;
  height: calc(100vh - 42px);
}
</style>
