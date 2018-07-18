<template>
  <div>
    <h1>Setting Component</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Setting extends Vue {

}
</script>

<style lang="scss" scoped>
div {
  margin: auto;
  width: 960px;
  height: 100%;
}
</style>