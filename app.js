let gameseq = [];
let userseq = [];
let strated = false;
let level = 0;

let btns = ["yellow","red","green","blue"];

let para = document.querySelector(".para");
let para2 = document.querySelector(".para2");

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
    let randomidx = Math.floor(Math.random()*4);
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

let prevscr = 0;
let crscr = 0;
function checkans(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
         setTimeout(levelup, 1000);
        }
    }else {
        wrong();
        crscr = level-1;
        if(crscr > prevscr){
            para.innerText = `Game Over!! Your score was ${level-1}, Press key to start`;
            para2.innerText = `Highest Score : ${crscr}`;
            prevscr = crscr;
        }else {
            para.innerText = `Game Over!! Your score was ${level-1}, Press key to start`;
            para2.innerText = `Highest Score : ${prevscr}`;
        }
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

