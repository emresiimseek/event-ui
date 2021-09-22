<template>
  <div>
    <div class="form-input-label" :style="{ color: labelColor }">
      {{ label }}
    </div>
    <select
      @input="onInput($event)"
      class="form-select form-select-sm"
      aria-label=".form-select-sm example"
    >
      <option selected>Seçiniz</option>
      <option
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :selected="isSelected(item)"
      >
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Options } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";
import { PropType } from "@vue/runtime-core";
import { SelectModel } from "@/logic/types/common-types/select-model";
@Options({
  components: {},
  props: {
    items: Object as PropType<SelectModel[]>,
    value: Number,
    labelColor: { default: "white", type: String },
    label: String,
  },
  emits: ["update:value"],
  model: { prop: "value", value: "input" },
})
export default class CoSelect extends BaseComponent {
  value!: number;

  get isSelected() {
    return (value: SelectModel) => {
      return this.value == +value.value;
    };
  }

  onInput(event: any) {
    this.$emit("update:value", +event.target.value);
  }
}
</script>

<style>
</style>