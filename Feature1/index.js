var a=document.querySelector("h3")
var v1=document.querySelector(".btn1");
var flag= 0
// var v2=document.querySelector(".btn2")

v1.addEventListener("click",function onclick(){
   
    if(flag==0){
        a.style.color="green"
        a.innerHTML="Friend"
        v1.innerHTML="Remove friend"
        v1.style.backgroundColor = "salmon"
        flag = 1
    
    }
    else{
        a.style.color="red"
        a.innerHTML="Stranger"
        v1.innerHTML="Add friend"
        v1.style.backgroundColor = "green"
        flag = 0
       
    }
    
})
//  code if u want to use two button for follow and unfollow.....
// 
// v2.addEventListener("click",function(){
//    a.style.color="red"
//    a.innerHTML="Stranger"
//    })
