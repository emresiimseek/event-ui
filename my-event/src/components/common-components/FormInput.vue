<template>
  <div>
    <div class="text-white font-1">{{ label }}</div>
    <input
      :value="value"
      :type="inputType"
      class="form-control co-input"
      :placeholder="placeHolder"
      :class="computedClaseses"
      @input="$emit('update:value', $event.target.value)"
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
    value: Object,
    placeHolder: String,
    inputType: Object as PropType<InputType>,
    size: String,
    label: String,
    clasess: String,
  },
  components: { BaseComponent },
  model: { prop: "value", value: "input" },
  emits: ["update:value"],
})
export default class FormInput extends BaseComponent {
  size!: string;
  value!: any;
  clasess!: string;

  get computedClaseses() {
    return [`form-control-${this.size}`, this.clasess ? this.clasess : ""];
  }

  onInput(event: any) {
    this.$emit("update:value", event.target.value);
  }
}
</script>
