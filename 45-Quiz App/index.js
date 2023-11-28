
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the  PM of India",
        options: ["Rajinder Prasad", "Yogi", "Kejri Wal", "Narinder Modi"],
        correctAnswer: "Narinder Modi"
    },
    {
        question: "What is the capital of India?",
        options: ["Ujjain", "Delhi", "Agra", "Gurdaspur"],
        correctAnswer: "Delhi"
    },
    {
        question: "What is the name of the ancient citadel in Athens, Greece?",
        options: ["Athens", "Thessaloniki", "Acropolis", "Serres"],
        correctAnswer: "Acropolis"
    },
    {
        question: "Where is Neuschwanstein Castle?",
        options: ["UK", "Germany", "Italy", "Rome"],
        correctAnswer: "Germany"
    },
    {
        question: "Which is the tallest waterfall in the world?",
        options: ["Victoria Falls (Zimbabwe)", "Niagara Falls (Canada)", "Angel Falls (Venezuela)", "Iguazu Falls (Argentina and Brazil)"],
        correctAnswer: "Angel Falls (Venezuela)"
    },
    {
        question: "Which city is Angkor Wat situated in?",
        options: ["Phnom Penh", "Kampong Cham", "Sihanoukville", "Siem Reap"],
        correctAnswer: "Siem Reap"
    },
    {
        question: "How many times did Efren Reyes win the World Pool League championship? ",
        options: ["One ", "Two", "Three", "Four"],
        correctAnswer: "Two"
    },
    {
        question: "What year did boxing become a legal sport? ",
        options: ["1921", "1901", "1931", "1911"],
        correctAnswer: "1901"
    },
    {
        question: "Where is the largest bowling centre located?",
        options: ["US", "Japan", "Singapore", "Finland"],
        correctAnswer: "Japan"
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerHTML = `<p>${currentQuizData.question}</p>`;
    optionsElement.innerHTML = "";

    currentQuizData.options.forEach((option) => {
        const optionElement = document.createElement("p");
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => selectAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

function selectAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];

    if (selectedOption === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
    document.getElementById("options").innerHTML = "";
    document.getElementById("submit-btn").style.display = "none";
}
loadQuestion();