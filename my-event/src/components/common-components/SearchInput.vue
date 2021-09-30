<template >
  <co-popover>
    <div class="form-group font-2 has-search">
      <i class="fas fa-search"></i>
      <form-input v-model:value="searchKey" size="sm" class="search" />
    </div>

    <template #content>
      <div v-if="users.length" class="d-flex flex-column users-container">
        <div
          @click="toProfile(item)"
          v-for="item in users"
          :key="item.id"
          class="
            flex-1
            border-bottom
            d-flex
            align-items-center
            gap-2
            pb-1
            hoverable
          "
        >
          <i class="far fa-user-circle"></i>
          <span class="font-1">
            @{{ item.userName }} |
            {{ item.firstName }}
            {{ item.lastName }}
          </span>
        </div>
      </div>
      <div v-else class="users-container text-center">
        <span class="font-0">Kayıt Bulunamadı.</span>
      </div>
    </template>
  </co-popover>
</template>

<script lang="ts">
import CoPopover from "./CoPopover.vue";
import FormInput from "./FormInput.vue";
import { defineComponent } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";
import BaseComponent from "./BaseComponent.vue";
import { userLogic } from "@/logic/modules/users/user-logic";
import { UserDto } from "@/logic/types/common-types/user-dto";
@Options({
  components: { FormInput, CoPopover },
  watch: {
    searchKey: "searchUser",
  },
})
export default class Searctınput extends BaseComponent {
  searchKey: string = "";
  users: UserDto[] = [];

  async searchUser() {
    const result = await this.handleRequest(() =>
      userLogic.searchUser(this.searchKey)
    );

    this.users = result ?? [];
  }

  toProfile(item: UserDto) {
    this.$router.push({ name: "profile", params: { userId: item.id } });
  }
}
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

.users-container {
  width: 350px;
  padding: 20px;
}
</style>