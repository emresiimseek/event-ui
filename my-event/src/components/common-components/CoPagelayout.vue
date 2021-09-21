<template>
  <div
    class="d-flex co-page-layout flex-column position-relative"
    :class="computedClass"
  >
    <div class="container-fluid d-flex justify-content-center mt-5">
      <div :class="leftClass">
        <slot name="left-side"></slot>
      </div>
      <div :class="mainClass" class="mr-1 ml-1">
        <slot> </slot>
      </div>
      <div :class="rightClass">
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
    hasScroll: Boolean,
  },
})
export default class CoPageLayout extends BaseComponent {
  position!: string;
  rightClass!: string;
  leftClass!: string;
  mainClass!: string;
  hasScroll!: boolean;

  get computedClass() {
    return [`position-${this.position}`];
  }
}
</script>
<style scoped>
.co-page-layout {
  background-color: red;
}
</style>
