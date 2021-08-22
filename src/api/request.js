import axios from "axios"
import showMessage from "../utils/popMessage"

const ins = axios.create()
ins.interceptors.response.use(function(resp) {
    if (resp.data.code !== 0) {
        showMessage({ type: "error", message: resp.data.msg, duration: 1500 })
        return null
    }
    return resp.data.data
})
export default ins