// Get elements
const startBtn = document.getElementById("startBtn");
const questionsContainer = document.getElementById("questionsContainer");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const doneBtn = document.getElementById("doneBtn");

const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");

// Function to show the next question
function showNextQuestion(currentQuestion, nextQuestion) {
    currentQuestion.classList.add("hidden");
    nextQuestion.classList.remove("hidden");
}

// When "Let's Start" button is clicked
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"; // Hide "Let's Start" button
    questionsContainer.classList.remove("hidden"); // Show question container
    question1.classList.remove("hidden"); // Show first question
});

// When "Next" button is clicked for each question
next1.addEventListener("click", () => showNextQuestion(question1, question2));
next2.addEventListener("click", () => showNextQuestion(question2, question3));
next3.addEventListener("click", () => showNextQuestion(question3, question4));
next4.addEventListener("click", () => showNextQuestion(question4, question5));

// When "Done" button is clicked
doneBtn.addEventListener("click", () => {
    alert("Your schedule has been created!");
    // You can process or display the answers here.
});
