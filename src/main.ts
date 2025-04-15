
import { createApp } from 'vue'
import {Quasar, Dialog} from 'quasar'

import router from './router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from '@/App.vue'

const app = createApp(App)

app.use(router)


app.use(Quasar, {
    plugins: {
        Dialog
    }, // import Quasar plugins and add here
})

app.mount('#app')
