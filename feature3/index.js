var main = document.querySelector("#main")
var crsr =document.querySelector("#cursor")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x  + "px";
    crsr.style.top = dets.y + "px";
})
