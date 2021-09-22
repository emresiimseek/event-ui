<template>
  <div>
    <div class="form-input-label mb-1" :style="{ color: labelColor }">
      {{ label }}
    </div>
    <input
      :value="value"
      :type="inputType"
      class="form-control co-input"
      :placeholder="placeHolder"
      :class="computedClaseses"
      @input="$emit('update:value', $event.target.value)"
    />

    <div ref="UserName" class="text-white validation-text">
      <div
        class="d-flex flex-column"
        v-for="item in validationItems"
        :key="item"
      >
        <span class="font-0 bg-danger p-1 mt-1 rounded">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { InputType } from "../../logic/types/common-types/input-type";
import BaseComponent from "./BaseComponent.vue";
@Options({
  props: {
    value: String,
    placeHolder: String,
    inputType: Object as PropType<InputType>,
    size: String,
    label: String,
    clasess: String,
    labelColor: { default: "white", type: String },
    validations: Object,
    fieldName: String,
  },
  components: { BaseComponent },
  model: { prop: "value", value: "input" },
  emits: ["update:value"],
})
export default class FormInput extends BaseComponent {
  size!: string;
  value!: any;
  clasess!: string;
  fieldName!: string;

  get computedClaseses() {
    return [`form-control-${this.size}`, this.clasess ? this.clasess : ""];
  }

  get validationItems() {
    let items: string[] = [];
    for (const key in this.validations) {
      if (key == this.fieldName) {
        items = this.validations[key] as string[];
      }
    }

    return items;
  }

  onInput(event: any) {
    this.$emit("update:value", event.target.value);
  }
}
</script>
<style lang="scss">
.form-input-label {
  font-size: 10px;
}
</style>
