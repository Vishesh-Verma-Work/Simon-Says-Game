let gameseq = [];
let userseq = [];
let strated = false;
let level = 0;

let btns = ["yellow","red","green","blue"];

let para = document.querySelector(".para");

document.addEventListener("keypress", function(){
    if(strated == false){
        strated = true;
        levelup();
        
    }
});


function levelup(){
    userseq = [];
    level++;
    para.innerText = `Level : ${level}`;
    let randomidx = Math.floor(Math.random()*3);
    let randomclr = btns[randomidx];
    let randombtn = document.querySelector(`.${randomclr}`)
    gameseq.push(randomclr);
    flash(randombtn);
}

function flash(btn){
    btn.classList.add("flashclass");
    setTimeout(function(){
        btn.classList.remove("flashclass");
    },250)
}

function flashbyuser(btn){
    btn.classList.add("flashclassbyuser");
    setTimeout(function(){
        btn.classList.remove("flashclassbyuser");
    },250)
}

function checkans(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
         setTimeout(levelup, 1000);
        }
    }else {
        wrong();
        para.innerText = `Game Over!! Your score was ${level}`;
        reset();
    }
}

let body = document.querySelector("body");
function wrong() {
    body.classList.add("wronge");
    setTimeout(function(){
        body.classList.remove("wronge");
    },250)
}

function reset(){
    strated = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function btnpress(){
    let btn = this;
    flashbyuser(btn);

    userclr = btn.getAttribute("id");
    console.log(userclr);

    userseq.push(userclr);
    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".box");

for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

