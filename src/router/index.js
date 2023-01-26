import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "../views/Login/Login.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Homevue from "../views/Home.vue";
import Joblist from "../components/Job/JobList.vue";
import SingleJob from "../components/Job/SingleJob.vue";
import Approved from "../components/Job/ApprovedList.vue";
import Stats from "../components/Stats/Stats.vue";
import EditJob from "../components/Job/EditJob.vue";
import company from "../components/company/Towing.vue";
import CreateJob from "../components/Job/CreateJob.vue";
import user from "../components/user/user.vue";
import createUser from "../components/user/createUser.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "", name: "home", component: Homevue },
    { path: "/login", name: "Login", component: LoginVue },
    {
      path: "/jobs",
      name: "jobDash",
      component: Dashboard,
      children: [
        {
          path: "",
          name: "jobs",
          component: Joblist,
        },
        {
          path: "/users",
          name: "users",
          component: user,
        },
        {
          path: "/users/create",
          name: "createUser",
          component: createUser,
        },
        {
          path: "/create",
          name: "create",
          component: CreateJob,
        },
        {
          path: ":jobID",
          name: "singleJob",
          component: SingleJob,
        },
        {
          path: ":jobID/edit",
          name: "editJob",
          component: EditJob,
        },
        {
          path: "company",
          name: "company",
          component: company,
        },
        {
          path: "stats",
          name: "stats",
          component: Stats,
        },
        {
          path: "approved",
          name: "approved",
          component: Approved,
        },
      ],
    },
  ],
});
export default router;
