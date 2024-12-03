const char = document.querySelector(".char");
const obj = document.querySelector(".object");
const divMain = document.querySelector("#main");

console.log("works");

document.addEventListener("keydown",(event)=>{
    char.classList.add("active");
 
    setTimeout(() => {
        char.classList.remove("active");
  
    }, 600);
})

let checkDead = setInterval( function(){
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    let objLeft = parseInt(window.getComputedStyle(obj).getPropertyValue("left"));


        console.log(charTop,objLeft);
    if(charTop > 30 && objLeft > 240 && objLeft < 270){
        alert("Collission detected");
        window.onload();
    }else{
        console.log("nothing");
    }

    
},10);
