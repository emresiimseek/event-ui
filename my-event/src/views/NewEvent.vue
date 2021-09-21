<template>
  <co-page-layout
    mainClass="flex-1 justify-content-center  d-flex bg-light p-5"
  >
    <div class="w-25 h-100 m-auto p-3 bg-white rounded">
      <form-input
        size="sm"
        class="mb-2"
        label="Başlık"
        label-color="black"
      ></form-input>
      <form-input
        size="sm"
        class="mb-2"
        label="Açıklama"
        label-color="black"
      ></form-input>
      <form-input
        size="sm"
        input-type="datetime-local"
        class="mb-2"
        label="Tarih"
        label-color="black"
      ></form-input>
      <form-input
        size="sm"
        type="select"
        class="mb-2"
        label="Başlık"
        label-color="black"
      ></form-input>
      <co-select
        label="Kategiriler"
        labelColor="black"
        v-model:value="value"
        :items="items"
      ></co-select>
    </div>
  </co-page-layout>
</template>
<script lang="ts">
import CoSelect from "../components/common-components/CoSelect.vue";
import CoPageLayout from "../components/common-components/CoPageLayout.vue";
import CoCard from "../components/common-components/CoCard.vue";
import FormInput from "../components/common-components/FormInput.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import { SelectModel } from "@/logic/types/common-types/select-model";

@Options({
  components: { BaseComponent, FormInput, CoCard, CoPageLayout, CoSelect },
})
export default class NewEvent extends BaseComponent {
  value: number | null = null;

  items: SelectModel[] = [
    { value: 1, text: "emre" },
    { value: 2, text: "aycan" },
  ];
}
</script>

<style>
</style>