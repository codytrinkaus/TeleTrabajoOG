import FunctionChoiceVue from "@/views/FunctionChoice.vue"
import LandingPageVue from "@/views/LandingPage.vue"
import PageNotFoundVue from "@/views/PageNotFound.vue"
import TeleTrabajoVue from "@/views/TeleTrabajo.vue"
import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landingpage",
            component: LandingPageVue
        },
        {
            path: "/choices",
            name: "choices",
            component: FunctionChoiceVue
        },
        {
            path: "/teletrabajo",
            name: "teletrabajo",
            component: TeleTrabajoVue
        },
        {
            path: "/:catchall(.*)*",
            name: "not found",
            component: PageNotFoundVue
        }
    ]
})

export default router