<template>
  <co-page-layout mainClass="flex-1 justify-content-center  d-flex  p-4">
    <div class="d-flex flex-column bg-light rounded gap-2 p-3">
      <form-input
        v-model:value="activity.title"
        size="sm"
        label="Başlık"
        label-color="black"
      ></form-input>
      <form-input
        v-model:value="activity.description"
        size="sm"
        label="Açıklama"
        label-color="black"
      ></form-input>
      <form-input
        size="sm"
        input-type="datetime-local"
        label="Tarih"
        label-color="black"
      ></form-input>
      <co-select
        label="Kategiriler"
        labelColor="black"
        v-model:value="selectedCategory"
        :items="items"
      ></co-select>

      <co-button
        @click="saveActivity"
        buttonText="Kaydet"
        color="dark"
        size="sm"
        class="m-auto"
        is-outline
        :buttonLoading="isAnyLoading"
        laodingColor="black"
      />
    </div>
  </co-page-layout>
</template>
<script lang="ts">
import CoButton from "../components/common-components/CoButton.vue";
import CoSelect from "../components/common-components/CoSelect.vue";
import CoPageLayout from "../components/common-components/CoPageLayout.vue";
import CoCard from "../components/common-components/CoCard.vue";
import FormInput from "../components/common-components/FormInput.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import { SelectModel } from "@/logic/types/common-types/select-model";
import { categoriesLogic } from "@/logic/modules/categories/categories-logic";
import { activityLogic } from "@/logic/modules/activities/activity-logic";
import { LookUp } from "@/logic/modules/users/types/look-up";
import { Activity } from "@/logic/modules/activities/types/activity";

@Options({
  components: {
    BaseComponent,
    FormInput,
    CoCard,
    CoPageLayout,
    CoSelect,
    CoButton,
  },
})
export default class NewEvent extends BaseComponent {
  value: number | null = null;
  items: SelectModel[] = [];

  selectedCategory: number = 0;

  activity: Activity = activityLogic.defaultModel();

  created() {
    this.getCategories();
  }

  async saveActivity() {
    this.activity.activitysCategory.push({
      categoryId: this.selectedCategory,
      activityId: 0,
    });

    var result = await activityLogic.save(this.activity);
  }

  async getCategories() {
    const result = await this.handleRequest<SelectModel[]>(() =>
      categoriesLogic.getCategoriesLookUp()
    );

    this.items = result ?? [];
  }

  saveEvent() {}
}
</script>

<style>
</style>