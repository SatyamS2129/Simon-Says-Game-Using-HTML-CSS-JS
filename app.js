let gameSeq = [];
let userSeq = [];
let colorBtn = ["red", "green", "orange", "blue"];
let started = false;
let lvl = 0;
let h4 = document.querySelector("h4");
let hSSpan = document.querySelector("span");
let highestScore = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        // console.log("game stated");
        started = true;
        setTimeout(lvlUp, 1000);
        
    }
});

function btnFlash(rBtn){
    rBtn.classList.add("flash");
    setTimeout(function(){
        rBtn.classList.remove("flash")
    }, 200);
    
};

function lvlUp(){
    userSeq = [];
    lvl++;
    h4.innerText = `Level ${lvl}`;
    // choosing randon color to flash
    let randIdx = Math.floor(Math.random()*4);
    let randCol = colorBtn[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randCol);
    gameSeq.push(randCol);
    //console.log(gameSeq);
    btnFlash(randBtn);
};

function checkSeq(idx){
    // console.log(lvl);
    if( userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(lvlUp, 1000);
        }
    } else {
        console.log("game over");
        h4.innerHTML = `Game Over! Your score was <b>${lvl}<b> <br> Press any key to start again...`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "rgb(29, 31, 31)";       
        }, 150)

        if(lvl > highestScore){
            highestScore = lvl;
            hSSpan.innerText = highestScore;
        };
        reset();
    };
};

function btnPress(){
    // console.log(this);
    let btn = this;
    btnFlash(btn);
    userCol = btn.getAttribute("id");
    //console.log(userCol);
    userSeq.push(userCol);
    //console.log(userSeq);
    checkSeq(userSeq.length-1);
};

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    lvl = 0;
};
