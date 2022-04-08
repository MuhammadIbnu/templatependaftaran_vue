import { createApp } from 'vue'
import App from './App.vue'



// import toastr
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// import tailwindcss
import './index.css'

//import mixins
import mixins from './mixins'

// router
import router from './router';

// create app vue
const app = createApp(App);
app.use(Toast)
app.use(mixins)
app.use(router)
app.mount('#app')
