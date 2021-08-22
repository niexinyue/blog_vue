export default function(fun, time = 100) {
    let timer = null;
    return (...arg) => {
        clearInterval(timer)
        timer = setTimeout(() => {
            fun(...arg)
        }, time)
    }
}