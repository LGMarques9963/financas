// import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from "./http";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const appInstance = createApp(App);
appInstance.config.productionTip = false;
appInstance.config.globalProperties.$http = http;

appInstance.use(store);
appInstance.use(router, axios);
appInstance.use(ArgonDashboard);
appInstance.use(vuetify);
appInstance.use(VueAxios);
appInstance.mount("#app");