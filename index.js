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
let queCount = 1;
let userName = document.querySelector('#userName');
let welcomeMsg = document.querySelector('#welcomeMsg');

userName.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        welcomeMsg.innerText = "Welcome to SuperHero Quiz " + userName.value;
    }
});

let SuperHero = [
    {
        'question': 'What was the first Marvel movie ever made?',
        'answer': "Iron Man"
    },
    {
        'question': 'Which billionaire makes a cameo in Iron Man 2?',
        'answer': "Elon Musk"
    },
    {
        'question': 'What is Thanos’s home planet?',
        'answer': "Titan"
    },
    {
        'question': 'What does the acronym J.A.R.V.I.S. stand for?',
        'answer': "Just A Really Very Intelligent System"
    }
];

let a = 0;
let timeleft = 15;
function updateTime() {

    time.innerText = timeleft + "s";
    timeleft--;

    if (timeleft == 0) {
        nextQue();
        timeleft = 15;
        updateTime();
    }

}


let startQuiz = document.querySelector('.start-quiz');
startQuiz.addEventListener("click", play)
let time = document.querySelector('#time')


function play() {
    let quizQuestion = document.querySelector('.question');
    // quizQuestion.innerText = "";
    // for (i = 0; i < SuperHero.length; i++) {
    //     if (i == 0) {
    //         quizQuestion.innerText = SuperHero[i].question
    //     }
    // }
    quizQuestion.innerText = SuperHero[count].question

    // timer
    a = setInterval(updateTime, 1000)

}

let submit = document.querySelector('.submit')
let score_No = document.querySelector('#score')
let score = 0;
submit.addEventListener("click", validateAns)

function validateAns() {

    let userAnswer = document.querySelector('.userAnswer');
    let checkAns = document.querySelector('.checkAns');
    let quizQuestion = document.querySelector('.question');


    for (i = 0; i < SuperHero.length; i++) {

        let answer = SuperHero[i].answer;
        let question = SuperHero[i].question;
        if (userAnswer.value == answer && quizQuestion.textContent == question) {
            score++;
            checkAns.innerText = "Correct";
            score_No.innerText = "Score: " + score;
            break
        } else {
            checkAns.innerText = "Incorrect";
            score_No.innerText = "Score: " + score;
        }
    }
}

let next = document.querySelector('.next');
next.addEventListener("click", nextQue);

function nextQue() {
    queCount++;

    let quizQuestion = document.querySelector('.question');
    let userAnswer = document.querySelector('.userAnswer');
    let checkAns = document.querySelector('.checkAns');
    quizQuestion.innerText = "";
    checkAns.innerText = "";
    userAnswer.value = "";

    count++
    quizQuestion.innerText = SuperHero[count].question;


    // clearInterval(a);
    // timeleft = 15;
    // time.innerText = timeleft + "s";
    // a = setInterval(updateTime, 1000);


    if (queCount == SuperHero.length) {
        clearInterval(a);
        // timeleft = 15;
        // a = setInterval(updateTime, 1000);
        time.innerText = "Done"
    } else {
        clearInterval(a);
        timeleft = 15;
        time.innerText = timeleft + "s";
        a = setInterval(updateTime, 1000);
    }

}
