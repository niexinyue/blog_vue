import imgurl from "@/assets/default.gif";
import eventBus from "@/eventBus.js"

let arr = []

function setImg(item) {

    item.dom.src = imgurl;
    const clientHeight = document.documentElement.clientHeight;
    const rect = item.dom.getBoundingClientRect()
    if (rect.top > -100 && rect.top <= clientHeight) {
        setTimeout(() => {
            item.dom.src = item.src;
        }, 2000);
        item.dom.src = item.src;
        arr = arr.filter((i) => i !== item);
    }
}

function setImgs(arr) {
    for (const img of arr) {
        setImg(img)
    }
}

function handleScroll() {
    setImgs(arr)
}

eventBus.$on("mainScroll", handleScroll)



export default {
    inserted(el, binding) {
        const img = {
            src: binding.value,
            dom: el
        }
        arr.push(img)
        setImg(img)
    },
    unbind(el) {
        arr.filter((item) => item.dom !== el)
    }
}