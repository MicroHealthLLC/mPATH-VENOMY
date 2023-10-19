import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

//Importing Stores
import programStore from './stores/programStore'
import taskStore from './stores/taskStore'

const store = createStore({
  modules: {
    programStore,
    taskStore
  },
  // state: {},
  // mutations: {},
  // actions: {},
  // getters: {},
});
const vuetify = createVuetify({
    components,
    directives,
  })  

  createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .mount('#app')


