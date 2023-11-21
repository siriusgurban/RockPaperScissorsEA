const result = document.querySelector("#result");
const myChoice = document.querySelector("#myChoice");
const compChoice = document.querySelector("#compChoice");
const myImg = document.querySelector("#myImg");
const compImg = document.querySelector("#compImg");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const btnrps = document.querySelector("#btnrps");

const myScore = document.querySelector("#myScore");
const compScore = document.querySelector("#compScore");


const arrRPS = ["rock", "paper", "scissors"];
let compChoiceRand = Math.floor(Math.random() * 3);
let myInputArr = { "r": arrRPS[0], "p": arrRPS[1], "s": arrRPS[2] }

let keyOrButton = confirm("Key or button?");

if (keyOrButton) {
    document.body.addEventListener("keyup", (e) => {//on key press

        let compChoiceRand = Math.floor(Math.random() * 3);

        imgChanger(myInputArr[e.key], myImg);
        imgChanger(arrRPS[compChoiceRand], compImg);

        if (myInputArr[e.key] == arrRPS[compChoiceRand] || myInputArr[e.key] == arrRPS[compChoiceRand] || myInputArr[e.key] == arrRPS[compChoiceRand]) {

            result.innerText = 'Seka';
        } else if (true) {
            if ((myInputArr[e.key] == "rock" && arrRPS[compChoiceRand] == "scissors") || (myInputArr[e.key] == "paper" && arrRPS[compChoiceRand] == "rock") || (myInputArr[e.key] == "scissors" && arrRPS[compChoiceRand] == "paper")) {

                result.innerText = 'You win';
            } else {

                result.innerText = 'Comp wins';
            }
        }

    });
} else {
    btnrps.classList.remove("d-none");

    rock.addEventListener("click", () => { //on rock button click

        let compChoiceRand = Math.floor(Math.random() * 3);

        imgChanger(arrRPS[0], myImg);
        imgChanger(arrRPS[compChoiceRand], compImg);

        winner(0);
    })

    paper.addEventListener("click", () => { //on paper button click

        let compChoiceRand = Math.floor(Math.random() * 3);

        imgChanger(arrRPS[1], myImg);
        imgChanger(arrRPS[compChoiceRand], compImg);

        winner(1);
    })

    scissors.addEventListener("click", () => { //on scissors button click

        let compChoiceRand = Math.floor(Math.random() * 3);

        imgChanger(arrRPS[2], myImg);
        imgChanger(arrRPS[compChoiceRand], compImg);

        winner(2);

    })
}


function winner(index) { //finder winner
    if (arrRPS[index] == arrRPS[compChoiceRand] || arrRPS[index] == arrRPS[compChoiceRand] || arrRPS[index] == arrRPS[compChoiceRand]) {

        result.innerText = 'Seka';
    } else if (true) {
        if ((arrRPS[index] == "rock" && arrRPS[compChoiceRand] == "scissors") || (arrRPS[index] == "paper" && arrRPS[compChoiceRand] == "rock") || (arrRPS[index] == "scissors" && arrRPS[compChoiceRand] == "paper")) {

            result.innerText = 'You win';
        } else {

            result.innerText = 'Comp wins';
        }
    }

}


function imgChanger(choice, url) {//imager changer function
    if (choice == "rock") {
        url.src = "rock.png"
    } else if (choice == "paper") {
        url.src = "paper.png"
    } else if (choice == "scissors") {
        url.src = "scissors.png"
    }
}