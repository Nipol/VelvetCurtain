<template>
  <div class="photo-panel">
    <div class="stared" v-bind:class="{ active: stared }" @click="star()">
      <font-awesome-icon icon="star" />
    </div>
    <img v-show="fileHash" :src="blob">
    <section>
      {{ FileName() }}
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getFileStat, existFile, copyFileToDest, removeFile, loadPhoto } from '../utils/getJSIPFS';

@Component({
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
})
export default class PhotoPanel extends Vue {
  @Prop({ type: Object, default: 'QmesQMPamSbqNqVi2QqVto5fNYdWFi27PnvtVEbh5hY9ua' }) public src!: any;
  public stared = false;
  public fileHash = '';
  public blob = '';

  public FileName() {
    return this.src.name;
  }

  public async mounted() {
    this.stared = await existFile('Stared', this.src.name);
    this.fileHash = await getFileStat(this.src.name);
    const bufferdata = await loadPhoto(this.fileHash);
    const blob = new Blob( [ bufferdata ], { type: 'image/*' } );
    const imageUrl = window.URL.createObjectURL(blob);
    this.blob = imageUrl;
  }

  public star() {
    if (this.stared === false) {
      copyFileToDest('Album', 'Stared', this.src.name);
      this.stared = true;
    } else {
      removeFile('Stared', this.src.name);
      this.stared = false;
    }
  }
}
</script>

<style lang="scss" scoped>
div.photo-panel {
  width: 220px;
  min-height: 100px;
  max-height: 400px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  @media only screen and (max-width: 2560px) and (min-width: 1921px) {
    & {
      width: 240px;
    }
  }
  @media only screen and (max-width: 1920px) and (min-width: 1661px) {
    & {
      width: 225px;
    }
  }
  @media only screen and (max-width: 1660px) and (min-width: 1201px) {
    & {
      width: 175px;
      margin-top: 10px;
      margin-right: 5px;
      margin-left: 5px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 1200px) and (min-width: 1024px) { 
    & {
      width: 120px;
      margin-top: 5px;
      margin-right: 5px;
      margin-left: 5px;
      margin-bottom: 5px;
    }
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  }
  section {
    opacity: 0;
    position: absolute;
    bottom: 2px;
    width: inherit;
    height: 50px;
    background: #ced4da;
    border: 0;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    &:hover {
      opacity: 0.7;
    }
  }
  div.stared {
    top: 5px;
    right: 5px;
    position: absolute;
    font-size: 1rem;
    color: #ced4da;
    opacity: 0;
    &:hover {
      opacity: 0.7;
    }
    
    &.active {
      color: yellow;
    }
  }
}
</style>