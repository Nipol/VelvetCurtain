<template>
  <div>
    <div id="side-bar-container">
      <div class="menubox">
        <h1>
          <font-awesome-icon icon="archive" /> &nbsp; Browser
        </h1>
        <ul>
          <router-link tag="li" :to="{ 'name': 'photos' }">
            <font-awesome-icon icon="image" />&nbsp;
            Photos
          </router-link>
          <router-link tag="li" :to="{ 'name': 'stared' }">
            <font-awesome-icon icon="star" />&nbsp;
            Stared
          </router-link>
        </ul>
      </div>

      <div class="menubox">
        <h1>
          <font-awesome-icon icon="images" /> &nbsp; Album
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
})
export default class Sidebar extends Vue {}
</script>

<style lang="scss" scoped>
div#side-bar-container {
  width: 240px;
  height: calc(100% - 38px);
  position: fixed;
  top: 38px;
  background: #f8f9fc;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  padding-left: 1rem;
  div.menubox {
    margin-bottom: 48px;
    h1 {
      font-weight: 500;
      color: #6c757d;
      font-size: 0.9rem;
    }
    ul {
      list-style: none;
      padding-left: 0;
      padding-right: 1rem;
      li {
        font-weight: 400;
        color: rgba(0,0,0,0.40);
        line-height: 1.8rem;
        background-color: inherit;
        padding-left: 0.5rem;
        &.active {
          font-weight: 400;
          border-radius: 0.25rem;
          color: #f8f9fc;
          background-color: #838a91;
        }
      }
    }
  }
}
</style>
