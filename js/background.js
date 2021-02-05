console.log("hi")
document.addEventListener('mousemove', e => {
console.log(e)
var w = window.innerWidth;
mousex = e.clientX;
blue = 255 * mousex/w
console.log(blue)
document.body.style.backgroundColor = "rgb(255,0," + blue + ")";

});

