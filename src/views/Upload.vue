<template>
  <div>
    <h1>Upload Component</h1>
    <img v-bind:src="imghash">
    <input type="file" accept="image/*" @change="handleFileUpload($event.target.files)"/>
    <input type="submit" @mousedown="submit()"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({})
export default class Upload extends Vue {
  public file = {};
  public filename = '';
  public filehash = '';
  public imghash = '';
  @Action('AddPhotoToAlbum', { namespace: 'album' }) private AddPhotoToAlbum: any;
  public handleFileUpload(e: FileList) {
    const file = e[0];
    const reader: FileReader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.file = new Buffer(reader.result);
      this.filename = `vc-${Math.random()}-${file.name}`;
    };
  }
  public submit() {
    this.AddPhotoToAlbum({filename: this.filename, file: this.file});
  }

}
</script>

<style lang="scss" scoped>
div {
  margin: auto;
  width: 960px;
  height: 100%;
}
</style>
