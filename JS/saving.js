function save() {
    localStorage.setItem("points", points)
    localStorage.setItem("c", c)
    localStorage.setItem("rebirth", rebirth)
}
function load() {
    points = localStorage.getItem("points")
    c = localStorage.getItem("c")
    rebirth = localStorage.getItem("rebirth")
}