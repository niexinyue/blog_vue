let site = "",
    route = ""

function setTilte() {
    if (!site && !route) {
        document.title = "loading..."
    } else if (site && !route) {
        document.title = site
    } else if (!site && route) {
        document.title = route
    } else {
        document.title = `${route}-${site}`
    }
}
export default {
    setSite(title) {
        site = title
        setTilte()
    },
    setRoute(title) {
        route = title
        setTilte()
    }
}