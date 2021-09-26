<template>
  <div class="d-flex flex-column co-page-layout" :class="computedClass">
    <div class="d-flex justify-content-center pages-areas">
      <div :class="leftClass" class="left">
        <slot name="left-side"></slot>
      </div>
      <div :class="mainClass" class="main">
        <slot> </slot>
      </div>
      <div :class="rightClass" class="right">
        <slot name="right-side"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";
@Options({
  components: { BaseComponent },
  props: {
    position: String,
    rightClass: String,
    leftClass: String,
    mainClass: String,
  },
})
export default class CoPageLayout extends BaseComponent {
  position!: string;
  rightClass!: string;
  leftClass!: string;
  mainClass!: string;

  get computedClass() {
    return [this.position ? `position-${this.position}` : ""];
  }
}
</script>
<style>
</style>

