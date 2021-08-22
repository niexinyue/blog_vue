import ins from "./request"
export async function getMessage(page = 1, limit = 10) {
    return await ins.get("/api/message", {
        params: {
            page,
            limit
        }
    })
}
//发送请求
export async function postMessage(obj) {
    return await ins.post("/api/message", obj)
}