<template>
  <div
    v-for="(item, i) in items"
    :key="item.id"
    class="d-flex flex-column flex-1"
  >
    <div class="p-2 border-bottom rounded hoverable-gray">
      <slot name="item" :item="item" :index="i"> </slot>
    </div>
  </div>
</template>
<script lang="ts">
import BaseComponent from "../common-components/BaseComponent.vue";
import { Options } from "vue-class-component";
import { PropType } from "@vue/runtime-core";

@Options({
  components: {},
  props: { items: Object as PropType<any[]> },
})
export default class CoList extends BaseComponent {}
</script>
<style>
</style>