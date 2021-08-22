import { setting } from "@/api/setting.js"
import titleController from "@/utils/titleController"
export default {
    namespaced: true,
    state: {
        data: null,
        loading: false
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        async fetchSetting(ctx) {
            ctx.commit("setLoading", true)
            const resp = await setting()
            ctx.commit("setData", resp)
            if (resp.favicon) {
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
                let link = document.querySelector("link[ref='shortcut icon']")
                if (link) {
                    return
                }
                link = document.createElement("link")
                link.rel = "shortcut icon"
                link.type = "images/x-icon"
                link.href = resp.favicon
                document.querySelector("head").appendChild(link)
            }
            if (resp.siteTitle) {
                titleController.setSite(resp.siteTitle)
            }
        }
    }
}