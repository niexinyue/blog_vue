import ins from "./request"

export async function about() {
    return await ins.get("/api/about")
}