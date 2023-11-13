const result = document.querySelector("#result");
const myChoice = document.querySelector("#myChoice");
const compChoice = document.querySelector("#compChoice");
const myImg = document.querySelector("#myImg");
const compImg = document.querySelector("#compImg");

const myScore = document.querySelector("#myScore");
const compScore = document.querySelector("#compScore");


const arrRPS = ["rock", "paper", "scissors"];

document.body.addEventListener("keyup", (e) => {

    let compChoiceRand = Math.floor(Math.random() * 3);
    let myInputArr = { "r": arrRPS[0], "p": arrRPS[1], "s": arrRPS[2] }

    console.log(myInputArr[e.key] );
    console.log("Comp input" + arrRPS[compChoiceRand]);

    function imgChanger(choice, url){
        if(choice == "rock"){
            url.src = "rock.png"
        }else if(choice == "paper"){
            url.src = "paper.png"
        } else if(choice == "scissors"){
            url.src = "scissors.png"
        }
    }

    imgChanger(myInputArr[e.key], myImg);
    imgChanger(arrRPS[compChoiceRand], compImg);

    if (myInputArr[e.key] == arrRPS[compChoiceRand] || myInputArr[e.key] == arrRPS[compChoiceRand] || myInputArr[e.key] == arrRPS[compChoiceRand]) {
        // alert('seka');
        result.innerText = 'Seka';
    } else if (true) {
        if ((myInputArr[e.key] == "rock" && arrRPS[compChoiceRand] == "scissors") || (myInputArr[e.key] == "paper" && arrRPS[compChoiceRand] == "rock") || (myInputArr[e.key] == "scissors" && arrRPS[compChoiceRand] == "paper")) {
            // alert("you win");
            result.innerText = 'You win';
        } else {
            // alert("comp win");
            result.innerText = 'Comp wins';
        }
    }
    console.log(e.key);
});
