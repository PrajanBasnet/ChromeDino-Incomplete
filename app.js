const char = document.querySelector(".char");
const obj = document.querySelector(".object");
const dino1 = document.querySelector("#dino1");
const dino2 = document.querySelector("#dino2");

const divMain = document.querySelector("#main");

console.log("works");

document.addEventListener("keydown",(event)=>{
    char.classList.add("active");
 
    setTimeout(() => {
        char.classList.remove("active");
    }, 600);
})
function imgAnimation(){
    if(char.src.includes('public/images/dino_run2.png')){
        char.src = 'public/images/dino_run1.png';
        console.log("dino1");
    }else if( char.src.includes('public/images/dino_run1.png')){
        char.src = 'public/images/dino_run2.png';
        console.log("dino2");
    
    }
}

let set = setInterval(() => {
    imgAnimation();
}, 600);
let checkDead = setInterval( function(){
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    let objLeft = parseInt(window.getComputedStyle(obj).getPropertyValue("left"));


        // console.log(charTop,objLeft);
    if(charTop > 30 && objLeft > 240 && objLeft < 270){
        alert("Collission detected");
        let reload = window.location.reload(true);
        alert("Game over")

        setTimeout(()=>{
            reload();
        },2000);
    }else{
        console.log("nothing");
    }

    
},10);
