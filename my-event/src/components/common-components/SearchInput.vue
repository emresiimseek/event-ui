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
          class="border-bottom hoverable-gray"
        >
          <div class="d-flex align-items-center pb-1">
            <span class="col-3 d-flex justify-content-center p-2">
              <i class="far fa-user-circle icon-fon-size-lg"></i>
            </span>

            <div class="font-1 col-9">
              <div>@{{ item.userName }}</div>
              <div class="pl-2 text">
                {{ item.firstName }}
                {{ item.lastName }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="
          empty-text-area
          d-flex
          align-items-center
          justify-content-center
          text-center
        "
      >
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
  min-height: 50px;
}
.empty-text-area {
  width: 350px;
  min-height: 100px;
  text-shadow: 1px;
  text-shadow: 1px 1px 5px #757474;
}
</style>