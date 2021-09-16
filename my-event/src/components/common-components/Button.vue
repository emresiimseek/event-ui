<template>
  <div class="d-flex">
    <button type="button" title="test" class="btn mb-1" :class="computedClass">
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";

@Options({
  props: {
    buttonText: String,
    color: String,
    isOutline: Boolean,
    size: String,
    fillWidth: Boolean,
  },
  components: { BaseComponent },
})
export default class CoButton extends BaseComponent {
  color!: String;
  isOutline!: Boolean;
  size!: String;
  fillWidth!: String;

  get colorClass() {
    return `btn-${this.isOutline ? "outline-" : ""}${this.color}`;
  }

  get buttonSize() {
    return `btn-${this.size}`;
  }
  get width() {
    return this.fillWidth ? "flex-1" : "";
  }

  get computedClass() {
    return [this.colorClass, this.buttonSize, this.width];
  }
}
</script>
<style scoped>
.flex-1 {
  flex: 1;
}
</style>

