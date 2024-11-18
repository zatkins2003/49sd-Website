'use strict';

let counter = 0;
let score = 0;
let questions = [];

const totalQuestions = 5;
const url = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';

const playBtn = document.querySelector(".startBTN");

playBtn.addEventListener('click', initGame);

function initGame() {
    counter = 0;
    score = 0;
    questions = [];
    getQuestions();
}

async function getQuestions() {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw Error(`Error: ${response.url} ${response.statusText}`);
        const data = await response.json();
        if (data.response_code === 0) {
            processQuestions(data);
            showQuestions(0);
            const startCard = document.querySelector(".start-card");
            const questionCard = document.querySelector(".question-card");
            const scoreCard = document.querySelector(".score-card");
            startCard.classList.remove("higherIndex");
            startCard.classList.remove("lowerIndex");
            questionCard.classList.remove("higherIndex");
            questionCard.classList.remove("lowerIndex");
            scoreCard.classList.remove("higherIndex");
            scoreCard.classList.remove("lowerIndex");
            questionCard.classList.add("higherIndex");
            startCard.classList.add("lowerIndex");
        } else {
            throw Error('Error: Cannot fetch questions from the API');
        }
    } catch (error) {
        console.log(error);
    }
}

function processQuestions(data) {
    questions = data.results.map(question => ({
        text: question.question.replace(/&#039;/g, "'").replace(/&quot;/g, '"'),
        level: question.difficulty,
        answers: [...question.incorrect_answers, question.correct_answer].map(answer => answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"')).sort(() => Math.random() - 0.5),
        correctAnswer: question.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"')
    }));
    questions.forEach((question, index) => {
        console.log(`Question ${index + 1}: ${question.text}`);
        console.log(`Level: ${question.level}`);
        console.log(`Answers: ${question.answers}`);
        console.log(`Correct Answer: ${question.correctAnswer}`);
    });
}



function showQuestions(index) {
    const a1 = document.querySelector('.answer.one');
    const a2 = document.querySelector('.answer.two');
    const a3 = document.querySelector('.answer.three');
    const a4 = document.querySelector('.answer.four');
    const questionTitle = document.querySelector('.question-title');
    const question = document.querySelector('.question');

    a1.textContent = questions[index].answers[0];
    a2.textContent = questions[index].answers[1];
    a3.textContent = questions[index].answers[2];
    a4.textContent = questions[index].answers[3];
    questionTitle.textContent = `Question: ${index + 1}     Score: ${score}/10`;
    question.textContent = questions[index].text;
}

function checkAns(selectedAnswer) {
    const correctAnswer = questions[counter].correctAnswer;
    console.log(`correct answer: ${correctAnswer}`);
    const selected = questions[counter].answers[selectedAnswer];
    console.log(`Answer selected: ${selected}`);

    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === selectedAnswer) {
            if (selected === correctAnswer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
        } else {
            if (questions[counter].answers[index] === correctAnswer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
        }
    });

    if (correctAnswer === selected) {
        score += 1;
        console.log(`Current Score: ${score}`);
    }

    counter += 1;

    setTimeout(() => {
        answerButtons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
            button.disabled = false;
        });
        if(counter < 10){
            showQuestions(counter);
        }
        else{
            endGame();
        }
        
    }, 2000);
}

document.querySelector(".play-againBTN").addEventListener('click', initGame);

function endGame() {

    const scoreCard = document.querySelector(".score-card");
    const scoreCardContent = scoreCard.querySelector(".score");
    scoreCard.classList.add("higherIndex");
    scoreCardContent.textContent = `Score: ${score}/10`;
}



