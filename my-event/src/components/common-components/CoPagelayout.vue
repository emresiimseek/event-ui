<template>
  <div class="co-page-layout" :class="computedClass">
    <div class="sticky-top w-100 page-header">
      <slot name="header"></slot>
    </div>
    <slot class="scroll-area"></slot>
    <div class="sticky-bottom w-100">
      <slot class="footer" name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";
@Options({ components: { BaseComponent }, props: { position: String } })
export default class CoPageLayout extends BaseComponent {
  position!: string;

  get computedClass() {
    return [`position-${this.position}`];
  }
}
</script>
<style scoped>
.co-page-layout {
  overflow: hidden;
  justify-content: center;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  flex: 1;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  background-size: cover;
}

.footer {
  flex: 2;
}

.header {
  flex: 2;
}

.sticky-bottom {
  bottom: 0;
  position: absolute;
}

.page-header {
  height: 10%;
}
.scroll-area {
  overflow: hidden;
  overflow-y: scroll;
  height: 90%;
}
</style>
