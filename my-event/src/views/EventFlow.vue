<template>
  <co-page-layout mainClass="flex-2" rightClass="flex-1" position="absolute">
    <div class="d-flex flex-row flex-1 bg-light">
      <div class="col-1 m-2"></div>
      <div class="col-6 p-3">
        <co-card></co-card>
        <co-card></co-card>
        <co-card></co-card>
        <co-card></co-card>
        <co-card></co-card>
      </div>

      <div class="col-4 pt-2">
        <div class="right-area rounded bg-white position-fixed p-3">
          <form-input size="sm" />
        </div>
      </div>
    </div>
  </co-page-layout>
</template>

<script lang="ts" >
import FormInput from "../components/common-components/FormInput.vue";
import CoPagelayout from "../components/common-components/CoPagelayout.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import CoCard from "../components/common-components/CoCard.vue";
@Options({
  components: { CoCard, BaseComponent, CoPagelayout, FormInput },
})
export default class EventFlow extends BaseComponent {}
</script>

<style scoped>
.right-area {
  height: 400px;
  width: 20%;
  margin-left: 12px;
}
</style>