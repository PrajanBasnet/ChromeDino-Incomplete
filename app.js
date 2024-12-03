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
    let charTop = window.getComputedStyle(char).getPropertyValue("top");
    let objTop = window.getComputedStyle(obj).getPropertyPriority("top");
    let charBottom = window.getComputedStyle(char).getPropertyValue("bottom");
    let objBottom = window.getComputedStyle(obj).getPropertyPriority("Bottom");

    if(charTop < objTop && charBottom > objBottom ){
        console.log("collision detected");
    }
},10);
