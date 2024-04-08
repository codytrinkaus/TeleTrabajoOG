import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueClock from '@dangvanthanh/vue-clock';

const app = createApp(App)

app.use(VueClock);

app.use(router)

app.mount('#app')
