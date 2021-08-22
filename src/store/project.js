import { getProject } from "@/api/project.js"
export default {
    namespaced: true,
    state: {
        data: [],
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
        async fetchProject(ctx) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getProject()
            ctx.commit("setData", resp)
            ctx.commit("setLoading", false)
        }
    }
}