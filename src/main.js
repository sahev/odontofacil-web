import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createPinia } from 'pinia'
import Datepicker from '@vuepic/vue-datepicker';

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .component('Datepicker', Datepicker)
  .mount('#app')
