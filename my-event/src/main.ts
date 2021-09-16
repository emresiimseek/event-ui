import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { key } from './store/modules/users';




createApp(App).use(store, key).use(router).mount('#app')
