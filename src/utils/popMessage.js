// type : success info warm error
import getComponentRootDom from "./getComponentRootDom.js";
import Icon from "@/components/icon"
import css from "./css.module.less"

function showMessage(option = {}) {
    const duration = option.duration || 2000;
    const message = option.message || "操作成功";
    const type = option.type || "success";
    const dom = option.dom || document.body

    const div = document.createElement("div");
    const infoImg = getComponentRootDom(Icon, { ty: type })
    const classN = css[`container-${type}`];
    div.innerHTML = `<span class="${css.icon}">${infoImg.outerHTML}</span><div>${message}</div>`
    div.className = `${css.container} ${classN}`
    if (dom != document.body && getComputedStyle(dom).position === "static") {
        dom.style.position = "relative";
    }
    dom.appendChild(div)

    div.clientHeight
    div.style.transform = "translate(-50%, -50%)";
    div.style.opacity = 1;

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = "translate(-50%, -50%) translateY(-25px)";
        div.addEventListener("transitionend", function() {
            // div.remove()
            option.callBack && option.callBack()
        }, { once: true })
    }, duration);
}
export default showMessage