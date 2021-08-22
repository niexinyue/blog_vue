import Vue from "vue"
export default function(comp, props) {
    let vm = new Vue({
        render(h) {
            return h(comp, { props })
        }
    })
    vm.$mount()
    return vm.$el
}