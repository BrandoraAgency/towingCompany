import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// ** Root Style File
import "./style.css";

// ** Font Awesome icons Style
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// ** View Components
import App from "./App.vue";
import LoginVue from "./views/Login/Login.vue";
import Dashboard from "./views/Dashboard/Dashboard.vue";
import Joblist from "./components/Job/JobList.vue";
import Approved from "./components/Job/ApprovedList.vue";
import Stats from "./components/Stats/Stats.vue";
import company from "./components/company/Towing.vue";

// ** Bootstrap files
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// ** Router Links
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", name: "Login", component: LoginVue },
    {
      path: "/jobs",
      name: "jobDash",
      component: Dashboard,
      children: [
        {
          path: "",
          name:'jobs',
          component: Joblist,
        },
        {
            path: "company",
            name:'company',
            component: company,
        },
        {
            path: "stats",
            name:'stats',
            component: Stats,
        },
        {
          path: "approved",
          name:'approved',
          component: Approved,
      },
      ],
    },
  ],
});
library.add(fas, fab, far);
// ** App start
createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
