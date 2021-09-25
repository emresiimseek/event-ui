<template>
  <div class="d-flex hoverable">
    <button
      @click="buttonClicked"
      type="button"
      class="btn mb-1 position-relative co-button"
      :class="computedClass"
    >
      <div class="d-flex justify-content-center" v-if="buttonLoading">
        <co-loading
          :spinnerLoading="buttonLoading"
          type="clip"
          class="m-auto button-loading"
          size="15px"
          color="black"
        />

        <span class="font-2 ml-1 flex-1"> {{ buttonText }}</span>
      </div>

      <span class="d-flex align-items-center justify-content-center" v-else>
        <i :class="[icon]"></i>
        <span v-if="buttonText" class="flex-1 font-2 ml-1">
          {{ buttonText }}</span
        >
      </span>
    </button>
  </div>
</template>
<script lang='ts'>
import CoLoading from "./CoLoading.vue";
import { Options, Vue } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";

@Options({
  props: {
    buttonText: String,
    color: String,
    isOutline: Boolean,
    size: String,
    fillWidth: Boolean,
    buttonLoading: Boolean,
    icon: String,
    laodingColor: { type: String, default: "white" },
  },
  components: { BaseComponent, CoLoading },
})
export default class CoButton extends BaseComponent {
  color!: String;
  isOutline!: Boolean;
  size!: String;
  fillWidth!: String;
  buttonLoading!: Boolean;
  icon!: String;
  laodingColor!: String;

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
<style lang="scss" scoped>
.flex-1 {
  flex: 1;
}

.ml-1 {
  margin-left: 6px;
}
</style>

