import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './styles/index.css'
import './styles/App.css'

createApp(App).use(router).mount('#app')
