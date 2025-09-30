import { createApp } from 'vue';
import router from './Router/router.js';
import './css/mainStyles.css'
import App from './App.vue'
import BaseButton from './components//Globals/buttons/BaseButton.vue'





const app = createApp(App);
app.component('BaseButton', BaseButton);
app.use(router);


app.mount('#app')