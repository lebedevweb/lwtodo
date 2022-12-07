import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	mode: "history",
	routes: [
		{
			path: "/",
			component: HomeView,
		},
	],
});

export default router;
