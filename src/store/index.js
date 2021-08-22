import Vuex from "vuex"
import Vue from "vue"
import sett from "./setting.js"
import banner from "./banner.js"
import about from "./about.js"
import project from "./project.js"

if (!window.Vuex) {
    Vue.use(Vuex)
}

const store = new Vuex.Store({
    strict: true,
    modules: {
        sett,
        banner,
        about,
        project
    }
})
window.store = store
export default store