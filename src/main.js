import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.sass'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).mount('#app')
