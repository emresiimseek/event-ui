// store.ts
import { UserAuthenticationDto } from "@/logic/modules/users/types/user-authentication-dto";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// define your typings for the store state
export interface State {
  user: UserAuthenticationDto;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const account = createStore<State>({
  state: {
    user: { password: "", token: "", userName: "", id: 0 },
  },
  mutations: {
    login(state: State, payload) {
      account.state.user = payload;
    },
  },
});
