// import Home from "@/views/home"
// import Blog from "@/views/blog"
// import BlogDetail from "@/views/blog/detail.vue"
// import About from "@/views/about"
// import Project from "@/views/project"
// import Message from "@/views/message"
import notFoud from "@/components/notFoud"
import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress"
configure({
    trickleSpeed: 2000,
    showSpinner: true

})
async function lazy(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration)
    })
}

function setComponent(s) {
    return async() => {
        start()
        if (process.env.NODE_ENV === "development") {
            await lazy(0)
        }
        const comp = await s();
        done()
        return comp
    }
}
let rules = [{
    path: "/",
    component: setComponent(() =>
        import ( /* webpackChunkName: "home" */ "@/views/home")),
    name: "home",
    meta: {
        title: "首页"
    }
}, {
    path: "/blog",
    component: setComponent(() =>
        import ("@/views/blog")),
    name: "blog",
    meta: {
        title: "博客"
    }
}, {
    path: "/blog/cate/:categoryId",
    component: setComponent(() =>
        import ("@/views/blog")),
    name: "blogType",
    meta: {
        title: "博客"
    }
}, {
    path: "/blog/:id",
    component: setComponent(() =>
        import ("@/views/blog/detail.vue")),
    name: "blogDetail",
    meta: {
        title: "文章详情"
    }
}, {
    path: "/about",
    component: setComponent(() =>
        import ("@/views/about")),
    name: "about",
    meta: {
        title: "关于我"
    }
}, {
    path: "/message",
    component: setComponent(() =>
        import ("@/views/message")),
    name: "message",
    meta: {
        title: "留言板"
    }
}, {
    path: "/project",
    component: setComponent(() =>
        import ("@/views/project")),
    name: "project",
    meta: {
        title: "项目"
    }
}, {
    path: "/*",
    component: notFoud,
    name: "notFoud",
    meta: {
        title: "无响应"
    }
}]

export default rules