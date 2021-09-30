<template>
  <Popper arrow>
    <template #content>
      <slot name="content"></slot>
    </template>
    <slot></slot>
  </Popper>
</template>
<script lang="ts">
import FormInput from "./FormInput.vue";
import { Options } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";
import Popper from "vue3-popper";

@Options({
  components: { Popper, FormInput },
  model: { prop: "value", value: "input" },
  emits: ["update:value"],
  props: {
    value: Boolean,
  },
})
export default class CoPopover extends BaseComponent {}
</script>

<style>
:root {
  --popper-theme-background-color: #ffffff;
  --popper-theme-background-color-hover: #ffffff;
  --popper-theme-text-color: #333333;
  --popper-theme-border-width: 1px;
  --popper-theme-border-style: solid;
  --popper-theme-border-color: #eeeeee;
  --popper-theme-border-radius: 6px;
  --popper-theme-box-shadow: 0 6px 20px -6px rgba(46, 45, 45, 0.25);
}
</style>