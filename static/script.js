function getRandomColor() {
    for (var e = "0123456789ABCDEF", t = "#", n = 0; 6 > n; n++) t += e[Math.floor(16 * Math.random())];
    return t
}

function changeColor() {
    document.getElementById("heading").setAttribute("style", "text-shadow:0px 0px 10px " + getRandomColor() + ";"), setTimeout(changeColor, 1e3)
}

function start() {
    setTimeout(changeColor, 1e3), document.getElementById("preloader").style.display = "none", document.getElementById("content").style.display = "block"
}

// document.getElementById("background").style.height = (window.innerHeight + 60) + "px";

// window.onresize = function() {
//     document.getElementById("background").style.height = (window.innerHeight + 60) + "px";
// }

window.onload = function () {
        document.getElementById("content").style.height = window.innerHeight + "px", document.getElementById("content-resume").style.height = window.innerHeight + "px", setTimeout(function () {
            document.getElementById("overlay").style.opacity = "0"
        }, 200), setTimeout(function () {
            document.getElementById("arrow").style.opacity = "1", document.getElementById("content-resume").style.display = "block"
        }, 3e3), setTimeout(start, 2e3)
    },
    function (e, t, n, o, a, c, l) {
        e.GoogleAnalyticsObject = a, e[a] = e[a] || function () {
            (e[a].q = e[a].q || []).push(arguments)
        }, e[a].l = 1 * new Date, c = t.createElement(n), l = t.getElementsByTagName(n)[0], c.async = 1, c.src = o, l.parentNode.insertBefore(c, l)
    }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-82924435-1", "auto"), ga("send", "pageview");