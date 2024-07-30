import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue3 } from 'bootstrap-vue-3';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(BootstrapVue3);
app.mount('#app');

// import Vue, { createApp } from 'vue'
// import App from './App.vue';
// import store from './store'
// import VueRouter from './router';


// createApp(App).use(store).use(VueRouter).mount('#app')

// import Vue, { createApp } from 'vue'
// import App from './App.vue'
// import './registerServiceWorker'
// import router from './router'
// import store from './store'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// // import './app.scss'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'



// const app = createApp(App)
// app.use(router)
// // app.use(BootstrapVue)
// app.mount('#app')

// // createApp(App).use(store).use(router).mount('#app')
