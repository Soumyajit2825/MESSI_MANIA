// Quize Area 
const questions = [
    {
        question: "In which year did Messi win his first Ballon d'Or?",
        options: ["2008", "2009", "2010", "2011"],
        answer: "2009"
    },
    {
        question: "Which club did Messi join after leaving Barcelona in 2021?",
        options: ["Manchester City", "PSG", "Inter Miami", "AC Milan"],
        answer: "PSG"
    },
    {
        question: "How many goals did Messi score in the 2022 FIFA World Cup?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which country did Argentina defeat in the 2022 World Cup Final?",
        options: ["France", "Brazil", "Germany", "Portugal"],
        answer: "France"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const resultElement = document.querySelector(".result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        score++;
        resultElement.textContent = "✅ Correct!";
        resultElement.style.color = "lightgreen";
    } else {
        resultElement.textContent = `❌ Wrong! The correct answer is ${correctAnswer}.`;
        resultElement.style.color = "red";
    }

    document.querySelectorAll(".options button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        resultElement.textContent = "";
        loadQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        resultElement.innerHTML = `🎉 Your Score: ${score}/${questions.length}`;
    }
}

loadQuestion();