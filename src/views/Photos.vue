<template>
  <div>
    <div id="photo-container">
      <photo-panel v-for="(photo, index) in photos" :key="index" :src="photo"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import PhotoPanel from '@/components/PhotoPanel.vue';

@Component({
  components: {
    'photo-panel': PhotoPanel,
  },
})
export default class Photos extends Vue {
  @Getter('getPhotos', { namespace: 'album' }) public photos: any;
  @Action('initializeAlbum', { namespace: 'album' }) public initializeAlbum: any;
  @Action('initializeStared', { namespace: 'album' }) public initializeStared: any;
  @Action('loadPhotos', { namespace: 'album' }) public loadPhotos: any;
  public mounted() {
    this.initializeAlbum();
    this.initializeStared();
    this.loadPhotos();
  }
}
</script>

<style lang="scss" scoped>
div {
  width: calc(100% - 240px);
  margin: auto;
  div#photo-container {
    width: inherit;
    margin-left: 240px;
  }
  @media only screen and (max-width: 2560px) and (min-width: 1921px) {
    div#photo-container {
      column-count: 8;
    }
  }
  @media only screen and (max-width: 1920px) and (min-width: 1661px) {
    div#photo-container {
      column-count: 5;
    }
  }
  @media only screen and (max-width: 1660px) and (min-width: 1201px) {
    div#photo-container {
      column-count: 5;
    }
  }
  @media only screen and (max-width: 1200px) and (min-width: 1024px) { 
    div#photo-container {
      column-count: 4;
    }
  }
}
</style>