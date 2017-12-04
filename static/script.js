function getRandomColor() {
    for (var e = "0123456789ABCDEF", t = "#", n = 0; 6 > n; n++) t += e[Math.floor(16 * Math.random())];
    return t
}

function changeColor() {
    document.getElementById("heading").setAttribute("style", "text-shadow:0px 0px 10px " + getRandomColor() + ";"), setTimeout(changeColor, 1e3)
}

function start() {
    setTimeout(changeColor, 1e3), document.getElementById("preloader-container").style.opacity = "0", document.getElementById("preloader").style.display = "none", document.getElementById("content").style.display = "block"
}

window.onload = function() {
    setTimeout(function() {
        document.getElementById("overlay").style.opacity = "0"
    }, 2e3)

    setTimeout(start, 1e3)
}