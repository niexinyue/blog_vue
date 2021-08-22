import VueRouter from "vue-router"
import Vue from "vue"
import rules from "./router"
import titleController from "@/utils/titleController.js"

if (!window.VueRouter) {
    Vue.use(VueRouter)
}

let router = new VueRouter({
    routes: rules,
    mode: "history"
})
router.afterEach((to, from) => {
    if (to.meta.title) {
        titleController.setRoute(to.meta.title)
    }
})
export default router