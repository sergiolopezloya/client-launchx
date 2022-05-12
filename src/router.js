import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/explorers/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/missioncommanders",
    name: "missioncommanders",
    component: () => import("./components/CommandersList")
  },
  {
    path: "/missioncommanders/:id",
    name: "missioncommanders-details",
    component: () => import("./components/Commander")
  },
  {
    path: "/missioncommanders/add",
    name: "add-missioncommanders",
    component: () => import("./components/AddCommander")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
