<template>
  <div class="d-flex">
    <button
      @click="buttonClicked"
      type="button"
      title="test"
      class="btn mb-1 position-relative"
      :class="computedClass"
    >
      <beat-loader
        v-if="buttonLoading"
        :loading="buttonLoading"
        color="white"
        size="20px"
        class="m-auto"
      >
      </beat-loader>
      <span class="d-flex align-items-center" v-else>
        <i class="" :class="[icon]"></i>
        <span class="flex-1">{{ buttonText }}</span>
      </span>
    </button>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";
import BeatLoader from "vue-spinner/src/ClipLoader.vue";

@Options({
  props: {
    buttonText: String,
    color: String,
    isOutline: Boolean,
    size: String,
    fillWidth: Boolean,
    buttonLoading: Boolean,
    icon: String,
  },
  components: { BaseComponent, BeatLoader },
})
export default class CoButton extends BaseComponent {
  color!: String;
  isOutline!: Boolean;
  size!: String;
  fillWidth!: String;
  buttonLoading!: Boolean;
  icon!: String;

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

  buttonClicked() {
    if (this.buttonLoading) return;

    this.$emit("buttonClicked");
  }
}
</script>
<style scoped>
.flex-1 {
  flex: 1;
}
</style>

