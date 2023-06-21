// const userName = readLineSync.question("Pls enter your name: ");

// let welcomeMsg = "Welcome to SpiderVerse " + userName;
// console.log(welcomeMsg + "\n");

// let score = 0;
// function play(question, answer) {
//     userAnswer = readLineSync.question(question);
//     if (answer == userAnswer) {
//         console.log("Your are correct!")
//         score++
//     } else {
//         console.log("Sorry, answer is not correct!");
//     }
//     console.log(score);
//     console.log("----------------");
// }

// let SuperHero = [
//     {
//         'question': ' What is the name of the SpiderMan? ',
//         'answer': "Peter Parker"
//     },
//     {
//         'question': 'What is the name of the IronMan? ',
//         'answer': "Tony Stark"
//     },
//     {
//         'question': 'What is the name of the Batman? ',
//         'answer': "Batman"
//     }
// ];

// for (i = 0; i < SuperHero.length; i++) {
//     play(SuperHero[i].question, SuperHero[i].answer);
// };

// let HighScore = 1;
// if (score > HighScore) {
//     console.log("Congo!, You are the Champion.")
//     console.log("New HighScore is: " + score);
// } else {
//     console.log("Better luck Next Time");
// }

// -----------------------------------------------------------------------------------------------------------------------------
let count = 0
let userName = document.querySelector('#userName');
let welcomeMsg = document.querySelector('#welcomeMsg');

userName.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        welcomeMsg.innerText = "Welcome to SuperHero Quiz " + userName.value;
    }
});

let SuperHero = [
    {
        'question': ' What is the name of the SpiderMan? ',
        'answer': "Peter Parker"
    },
    {
        'question': 'What is the name of the IronMan? ',
        'answer': "Tony Stark"
    },
    {
        'question': 'What is the name of the Batman? ',
        'answer': "Batman"
    }
];


let startQuiz = document.querySelector('.start-quiz');
startQuiz.addEventListener("click", play)


function play() {
    let quizQuestion = document.querySelector('.question');
    // quizQuestion.innerText = "";
    // for (i = 0; i < SuperHero.length; i++) {
    //     if (i == 0) {
    //         quizQuestion.innerText = SuperHero[i].question
    //     }
    // }
    quizQuestion.innerText = SuperHero[count].question
}

let submit = document.querySelector('.submit')
submit.addEventListener("click", validateAns)

function validateAns() {

    let userAnswer = document.querySelector('.userAnswer');
    let checkAns = document.querySelector('.checkAns');
    let quizQuestion = document.querySelector('.question');


    for (i = 0; i < SuperHero.length; i++) {

        let answer = SuperHero[i].answer;
        let question = SuperHero[i].question;
        if (userAnswer.value == answer && quizQuestion.textContent == question) {
            checkAns.innerText = "Correct";
            break
        } else {
            checkAns.innerText = "Incorrect";
        }
    }
}

let next = document.querySelector('.next');
next.addEventListener("click", run);

function run() {

    let quizQuestion = document.querySelector('.question');
    let userAnswer = document.querySelector('.userAnswer');
    let checkAns = document.querySelector('.checkAns');
    quizQuestion.innerText = "";
    checkAns.innerText = ""
    userAnswer.value = ""

    count++
    quizQuestion.innerText = SuperHero[count].question // ye read kse kr rha h fir?

}

