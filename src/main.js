import "@/mock/index.js"
import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import "@/styles/global.less";
import "@/utils/popMessage.js"
import showMessage from "@/utils/popMessage"
import "@/api/banner.js"
import store from "@/store"
import vLoading from "@/directives/loading.js"
import vlazy from "@/directives/lazy.js"

import { getMessage } from "@/api/message.js"
Vue.directive("loading", vLoading)
Vue.directive("lazy", vlazy)
store.dispatch("sett/fetchSetting")
store.dispatch("about/fetchAbout")
    // store.dispatch("project/fetch")
Vue.prototype.$showMessage = showMessage
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

// getMessage().then((n) => {
//     console.log("mainjs", n)
// })