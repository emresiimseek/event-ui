<template>
  <transition name="modal">
    <modal v-if="value" @close="$emit('update:value')"> </modal>
  </transition>
</template>
<script lang="ts">
import Modal from "@/components/Modal.vue";
import { Options } from "vue-class-component";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
@Options({
  components: { Modal },
  props: {
    value: Boolean,
  },
  model: { prop: "value", value: "update:value" },
  emits: ["update:value"],
})
export default class ModalComponent extends BaseComponent {}
</script>

<style>
</style>