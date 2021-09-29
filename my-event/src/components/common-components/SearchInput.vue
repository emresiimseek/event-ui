<template >
  <co-popover>
    <div class="form-group font-2 has-search">
      <i class="fas fa-search"></i>
      <form-input size="sm" class="search" />
    </div>

    <template #content> </template>
  </co-popover>
</template>

<script>
import CoPopover from "./CoPopover.vue";
import FormInput from "./FormInput.vue";
import { defineComponent } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
@Options({ components: { FormInput, CoPopover } })
export default class Searctınput extends Vue {}
</script>

<style>
.fa-search {
  position: absolute;
  z-index: 2;
  display: block;
  height: 1.9rem;
  margin-left: 6px;
  text-align: center;
  pointer-events: none;
  color: #aaa;
  text-indent: 50px;
}

.search input {
  text-indent: 15px;
}
</style>