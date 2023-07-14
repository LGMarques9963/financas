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

const appInstance = createApp(App);
appInstance.config.productionTip = false;

appInstance.use(store);
appInstance.use(router, axios);
appInstance.use(ArgonDashboard);
appInstance.use(VueAxios);
appInstance.mount("#app");