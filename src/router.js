import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Schedule from "./views/Schedule";
import Employees from "./views/Employees";
import Managers from "./views/Managers";
import Individuals from "./views/Individuals";
import Vehicles from "./views/Vehicles";
import Locations from "./views/Locations";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/schedule",
      name: "schedule",
      component: Schedule
    },
    {
      path: "/employees",
      name: "employees",
      component: Employees
    },
    {
      path: "/managers",
      name: "managers",
      component: Managers
    },
    {
      path: "/individuals",
      name: "indidviduals",
      component: Individuals
    },
    {
      path: "/vehicles",
      name: "vehicles",
      component: Vehicles
    },
    {
      path: "/locations",
      name: "locations",
      component: Locations
    }
  ]
});
