import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { createPinia } from 'pinia'
import Datepicker from '@vuepic/vue-datepicker';
import GlobalToolbar from './components/toolbar/GlobalToolbar.vue'

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .component('GlobalToolbar', GlobalToolbar)
  .component('Datepicker', Datepicker)
  .mount('#app')
