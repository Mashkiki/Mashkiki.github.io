function save() {
    localStorage.setItem("points", points)
    localStorage.setItem("c", c)
}
function load() {
    points = localStorage.getItem("points")
    c = localStorage.getItem("c")
    points = toNumber(points)
    c = toNumber(c)
}