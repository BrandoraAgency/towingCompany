import { createRouter, createWebHistory } from "vue-router";
import CreditForm from "../views/CreditForm/CreditForm.vue";
const LoginVue = () => import('../views/Login/Login.vue')
const Dashboard = () => import('../views/Dashboard/Dashboard.vue')
const Homevue = () => import('../views/Home.vue')
const Joblist = () => import('../components/Job/JobList.vue')
const SingleJob = () => import('../components/Job/SingleJob.vue')
const Approved = () => import('../components/Job/ApprovedList.vue');
const Cancelled = () => import('../components/Job/Cancelled.vue');
const EditJob = () => import('../components/Job/EditJob.vue');
const company = () => import('../components/company/Towing.vue');
const CreateJob = () => import('../components/Job/CreateJob.vue');
const user = () => import('../components/user/user.vue');
const SingleCompany = () => import('../components/company/SingleCompany.vue');
const createUser = () => import('../components/user/createUser.vue');
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "", name: "home", component: Homevue },
    { path: "/login", name: "Login", component: LoginVue },
    { path: "/towingform", name: "towingform", component: CreditForm },
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
          path: "company/:companyId",
          name: "singleCompany",
          component: SingleCompany,
        },
        {
          path: "approved",
          name: "approved",
          component: Approved,
        },
        {
          path: "cancelled",
          name: "cancelled",
          component: Cancelled,
        },
      ],
    },
  ],
});
export default router;
