<template>
  <co-page-layout mainClass="flex-1 justify-content-center d-flex">
    <div class="text-center">selam</div>
  </co-page-layout>
</template>
<script lang="ts">
import CoCard from "../components/common-components/CoCard.vue";
import CoPagelayout from "../components/common-components/CoPagelayout.vue";
import FormInput from "../components/common-components/FormInput.vue";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { Options } from "vue-class-component";

@Options({
  components: { BaseComponent, FormInput, CoPagelayout, CoCard },
})
export default class NewEvent extends BaseComponent {}
</script>

<style>
</style>