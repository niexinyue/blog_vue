import { getBanner } from "@/api/banner.js"
export default {
    namespaced: true,
    state: {
        data: [],
        isloading: false
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
        setLoading(state, payload) {
            state.isloading = payload
        }
    },
    actions: {
        async fetchBanner(ctx) {
            if (ctx.state.data.length !== 0) {
                return
            }
            ctx.commit("setLoading", true)
            const resp = await getBanner()
            ctx.commit("setData", resp)
            ctx.commit("setLoading", false)
        }
    }
}