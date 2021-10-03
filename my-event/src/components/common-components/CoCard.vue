<template>
  <div class="card text-center">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer text-muted"><slot name="footer"></slot></div>
  </div>
</template>
<script lang='ts'>
import { Options } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";

@Options({ components: {} })
export default class CoCard extends BaseComponent {}
</script>

<style>
.card-body {
  min-height: 200px;
}
</style>
