var con = document.querySelector(".container")
var heart =document.querySelector("#like")
var like = document.querySelector("#like2")
var num = document.querySelector("h2")
let count = 0
con.addEventListener("dblclick",function(){
   heart.style.transform=" translate(-50%,-50%) scale(2)"
   console.log("hello")
   heart.style.opacity="0.8"
   setTimeout(function(){
       heart.style.opacity="0.8"
   },500)
   setInterval(function(){
    heart.style.transform=" translate(-50%,-50%) scale(0)"
      },1000)
    like.style.color="red"
    count = count +1
    num.innerHTML=count 

})
