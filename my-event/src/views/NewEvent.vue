<template>
  <co-page-layout
    mainClass="flex-1 justify-content-center  d-flex bg-light p-5"
  >
    <div
      class="
        h-100
        p-3
        bg-white
        rounded
        d-flex
        justify-content-center
        flex-column
        gap-2
      "
    >
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

  saveActivity() {
    this.activity.activitysCategory.push({
      categoryId: this.selectedCategory,
      activityId: 0,
    });
    var result = activityLogic.save(this.activity);
  }

  async getCategories() {
    this.items = await categoriesLogic.getCategoriesLookUp();
  }

  saveEvent() {}
}
</script>

<style>
</style>