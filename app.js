const char = document.querySelector(".char");
const obj = document.querySelector(".object");
const obj2 = document.querySelector("#object2");


const divMain = document.querySelector("#main");

//count 
let count = 0;
let score = document.querySelector(".score");
score.innerHTML = "Score: " + count;


document.addEventListener("keydown",(event)=>{
    char.classList.add("active");
 
    setTimeout(() => {
        char.classList.remove("active");
    }, 400);
})
function imgAnimation(){
    if(char.src.includes('public/images/dino_run2.png')){
        char.src = 'public/images/dino_run1.png';
     
    }else if( char.src.includes('public/images/dino_run1.png')){
        char.src = 'public/images/dino_run2.png';
        
    }
}

let set = setInterval(() => {
    imgAnimation();
}, 600);
let checkDead = setInterval( function(){
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    let objLeft = parseInt(window.getComputedStyle(obj).getPropertyValue("left"));
    let objLeft2 = parseInt(window.getComputedStyle(obj2).getPropertyValue("left"));



    if(charTop > 40 && objLeft > 240 && objLeft < 250){
        alert("Collission detected");
        let reload = window.location.reload(true);
        alert("Game over")

        setTimeout(()=>{
            reload();
        },2000);
    }else if(charTop > 40 && objLeft2 > 240 && objLeft2 < 250){
        let reload = window.location.reload(true);
        alert("Game over");
        setTimeout(()=>{
            reload();
        },2000);
    }


    
},10);

let scoreBord = setInterval(() =>{
    count += 50;
    score.innerHTML = "Score: " + count;
},5000);

