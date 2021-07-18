
function renderLastScore() {
    var initialsEl = document.querySelector('#input-initials');

    var initials =initialsEl.value;

    // save to localstorage
    localStorage.setItem("intials", initials);

    // Retrieve the last score from localStorage using `getItem()`
    var finalScore = localStorage.getItem('score');
    
    // If they are null, return early from this function
    if (finalScore === null) {
      return;
    }
  
    // Set the text of the 'finalScore' to the corresponding values from localStorage
    highScoreSpan.textContent = initials + ' - ' + finalScore;
  }

// code provided by instructor STARTS
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
        question: "Which of these values is NOT considered false",
        choices: ["0", "'0'", "null", "' '"],
        answer: "'0'",
    },
    {
        question: "Which of the following is NOT a reason to validate a user's responses?",
        choices: ["Offers the user an opportunity to enter a correct response.", "Reduces bogus answers getting stored in the database.", "Improves the user experience.", "Increases the overall quality of the user data."],
        answer: "Improves the user experience.",
    },
    {
        question: "Arrays in JavaScript can be used to store __________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    }
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var highScoreSpan = document.querySelector("#high-score")

var questionIndex = 0;
var correctCount = 0;
// code provided by instructor ENDS


var time = 80;
var intervalId;

function endQuiz() {

  clearInterval(intervalId);

  var newH2 = document.createElement("h2");
  newH2.textContent = "All done! Your final score is " + correctCount;

  var finalScoreEl = document.querySelector("#finalscore");
  finalScoreEl.prepend(newH2);

  finalScoreEl.style.display = "block";

  var fScoreDiv = document.querySelector("#fscore");
  fScoreDiv.style.display = "block";

  var endQuestions = document.querySelector("#question-contents");
  endQuestions.innerHTML = "";

  localStorage.setItem('score', correctCount);
}

function updateTime() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}


// code provided by instructor STARTS
function renderQuestion() {
    var header = document.querySelector("#hide");
    header.style.display = "none";
  
  if (time == 0) {
    updateTime();
    return;
  }

  intervalId = setInterval(updateTime, 1000);
  
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}
// code provided by instructor ENDS


function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time = time - 10;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}




optionListEl.addEventListener("click", checkAnswer);
startQuizBtn.addEventListener("click" , renderQuestion);
initials.addEventListener("click", renderLastScore);








