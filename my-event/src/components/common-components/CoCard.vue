<template>
  <div class="border rounded card-container mb-3 bg-white"></div>
</template>
<script lang='ts'>
import { Options } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";

@Options({ components: {} })
export default class CoCard extends BaseComponent {}
</script>

<style>
.card-container {
  height: 300px;
}
</style>
