window.onload = function() {setTimeout(start,1e3);}

function getRandomColor() {
    for (var a = "0123456789ABCDEF", b = "#", c = 0; c < 6; c++) b += a[Math.floor(16 * Math.random())];
    return b
}

function changeColor() {
    document.getElementById("heading").setAttribute("style", "text-shadow:0px 0px 10px " + getRandomColor() + ";"), setTimeout(changeColor, 1e3)
}

function start() {
    setTimeout(changeColor, 1e3);  
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
}