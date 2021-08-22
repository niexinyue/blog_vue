import imgUrl from "@/assets/loading.svg"
import style from "./loading.module.less"
//创建img加载元素
function addImg(el) {
    const img = document.createElement("img");
    img.src = imgUrl
    img.className = style.imgContainer;
    img.dataset.role = "loading"
    return img
}

function getImg(el) {
    return el.querySelector("img[data-role=loading]")
}

export default function(el, bunding) {
    const curentImg = getImg(el);
    if (bunding.value && !curentImg) {
        const img = addImg(el);
        el.appendChild(img)
    } else {
        if (!bunding.value && curentImg) {
            curentImg.remove()
        }
    }
}