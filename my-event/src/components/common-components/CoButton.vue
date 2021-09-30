<template>
  <div class="d-flex hoverable">
    <button
      @click="buttonClicked"
      type="button"
      class="btn position-relative co-button"
      :class="computedClass"
    >
      <div class="d-flex loading-container" v-if="buttonLoading">
        <co-loading
          :spinnerLoading="buttonLoading"
          type="clip"
          class="m-auto button-loading"
          size="15px"
          color="black"
        />

        <span class="font-2 ml-1 flex-1"> {{ buttonText }}</span>
      </div>

      <span
        class="d-flex align-items-center justify-content-center gap-1"
        v-else
      >
        <i v-if="icon" :class="[icon]"></i>
        <span
          v-if="buttonText"
          class="flex-1 font-2"
          :style="{ fontSize: textSize }"
        >
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
    color: { String, default: "light" },
    isOutline: Boolean,
    size: String,
    fillWidth: Boolean,
    buttonLoading: Boolean,
    icon: String,
    buttonClasess: String,
    laodingColor: { type: String, default: "white" },
    textSize: String,
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
  buttonClasess!: String;

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
    return [this.colorClass, this.buttonSize, this.width, this.buttonClasess];
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

button :deep() {
  .loading-container {
    .button-loading {
      .v-spinner {
        display: flex !important;
      }
    }
  }
}
</style>

