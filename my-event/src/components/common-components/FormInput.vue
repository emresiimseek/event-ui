<template>
  <div>
    <div class="text-white font-1">{{ label }}</div>
    <input
      v-model="localValue"
      :type="inputType"
      class="form-control co-input"
      :placeholder="placeHolder"
      :class="computedClaseses"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { InputType } from "../../logic/types/common-types/input-type";
import BaseComponent from "./BaseComponent.vue";
@Options({
  props: {
    value: Object as PropType<any>,
    placeHolder: String,
    inputType: String,
    size: String,
    label: String,
    clasess: String,
  },
  components: { BaseComponent },
})
export default class FormInput extends BaseComponent {
  size!: String;
  value!: any;
  clasess!: string;

  localValue: any = "";

  get computedClaseses() {
    return [`form-control-${this.size}`, this.clasess ? this.clasess : ""];
  }

  onInput() {
    this.$emit("valueChanged", this.localValue);
  }
}
</script>
<style scoped>
.custom-search-input {
  padding: 0 !important;
}
</style>