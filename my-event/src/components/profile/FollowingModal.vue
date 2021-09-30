<template>
  <transition name="modal">
    <modal v-if="value" @close="$emit('update:value')" header="Takip">
      <co-list :items="items">
        <template #item="{ item }">
          <div class="d-flex align-items-center">
            <span class="col-2 d-flex justify-content-center">
              <i class="far fa-user-circle icon-fon-size-lg"></i>
            </span>
            <div class="col-11">
              <div class="text-capitalize">
                {{ item.userChild.firstName }} {{ item.userChild.lastName }}
              </div>
              <div>@{{ item.userChild.userName }}</div>
            </div>
          </div>
        </template>
      </co-list>
    </modal>
  </transition>
</template>
<script lang="ts">
import CoList from "../common-components/CoList.vue";
import Modal from "@/components/Modal.vue";
import { Options } from "vue-class-component";
import BaseComponent from "@/components/common-components/BaseComponent.vue";
import { PropType } from "@vue/runtime-core";
import { UserUserDto } from "@/logic/modules/users/types/user-user-dto";
@Options({
  components: { Modal, CoList },
  props: {
    value: Boolean,
    items: Object as PropType<UserUserDto[]>,
  },
  model: { prop: "value", value: "update:value" },
  emits: ["update:value"],
})
export default class FollowingModal extends BaseComponent {}
</script>

<style>
</style>