// Composables
import { createRouter, createWebHistory } from "vue-router";
import TaskAddPage from "../components/TaskAddPage/TaskAddPage.vue";
// import HelloWorld from "../components/HelloWorld.vue";
import DetailModal from "../components/DetailModal/DetailModal.vue";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/new-route", // Define the path for your new route
    component: TaskAddPage, // Use your new component here
  },
  {
    path: "/task/:taskId/:status", // Define a route parameter ":taskId"
    name: "rehan",
    component: DetailModal,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
