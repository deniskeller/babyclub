import Vue from "vue";
import Router from "vue-router";
// import Landing from "./views/Landing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/Landing/",
    //   name: "landing",
    //   component: Landing
    // },
    {
      path: "/AboutClub/AboutClub",
      name: "AboutClub",
    //   component: () => import("./views/AboutClub.vue")
    },
    
  ]
});
