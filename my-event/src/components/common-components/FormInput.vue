<template>
  <div>
    <div class="form-input-label mb-1" :style="{ color: labelColor }">
      {{ label }}
    </div>

    <textarea
      v-if="inputType == 'text-area'"
      :value="computedValue"
      @input="onInput($event)"
      class="form-control mb-1 w-100"
      :style="{
        maxWidth: maxWidth,
        width: width,
      }"
    >
    </textarea>

    <input
      v-else
      :value="computedValue"
      :type="inputType"
      class="form-control co-input"
      :placeholder="placeHolder"
      :class="computedClaseses"
      @input="onInput($event)"
      :style="{
        maxWidth: maxWidth,
      }"
    />

    <div
      v-if="fieldName"
      class="text-white validation-text"
      :style="{ maxWidth: maxWidth }"
    >
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
import { dateUtils } from "@/logic/utilities/date-utils";
import { PropType } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import { InputType } from "../../logic/types/common-types/input-type";
import BaseComponent from "./BaseComponent.vue";
@Options({
  props: {
    value: String,
    placeHolder: String,
    inputType: String,
    size: String,
    label: String,
    clasess: String,
    labelColor: { default: "white", type: String },
    validations: Object,
    fieldName: String,
    maxWidth: String,
    width: String,
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
  label!: string;
  inputType!: InputType;

  get computedValue() {
    return this.inputType == "datetime-local"
      ? dateUtils.toDateString(new Date(this.value))
      : this.value;
  }

  get computedClaseses() {
    return [
      `form-control-${this.size}`,
      this.clasess ? this.clasess : "",
      !!this.validationItems.length
        ? "text-danger validation-danger-border"
        : "",
    ];
  }

  get validationItems() {
    let items: string[] = [];

    for (const key in this.validations) {
      if (key == this.fieldName) {
        const data = this.validations[key] as string[];
        items = data.map((d) => {
          const firstIndex = d.indexOf("'");
          const lastIndex = d.lastIndexOf("'");
          const value = d.slice(firstIndex + 1, lastIndex);
          return d.replace(value, this.label);
        });
      }
    }

    return items;
  }

  onInput(event: any) {
    let localValue = "";

    if (this.inputType == "datetime-local")
      localValue = new Date(Date.parse(event.target.value)).toJSON();

    const data1 = new Date(localValue).toUTCString();

    this.$emit("update:value", localValue ? localValue : event.target.value);
  }
}
</script>
<style lang="scss">
.form-input-label {
  font-size: 10px;
}

.validation-danger-border {
  border-color: red !important;
}
</style>
