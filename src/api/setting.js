import ins from "./request";

export async function setting() {
    return await ins.get("/api/setting")
}