import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { UserAuthenticationDto } from './logic/modules/users/types/user-authentication-dto'

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        user: UserAuthenticationDto
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}