










// FINISH 4.1.8


// YOU CAN USE THIS ONE TOO - IT WORKS SEE BELOW!!!!!

// var createTaskHandler = function() {
//     var answerFirst = document.createElement("li");
//     answerFirst.className = "response1";
//     answerFirst.textContent = "this is the a new question/response?";
//     answerOneEl.appendChild(answerFirst);
// };

// buttonEl.addEventListener("click", createTaskHandler);

// RETRIEVE LAST SCORE... TO WORK


function renderLastScore() {
    // Retrieve the last score from localStorage using `getItem()`
    var finalScore = localStorage.getItem('score');
    
  
    // If they are null, return early from this function
    if (score === null) {
      return;
    }
  
    // Set the text of the 'finalScore' to the corresponding values from localStorage
    finalScoreEl.textContent = finalScore;
    highScoreSpan.textContent = score;
    
  }




// CODE PROVIDED BY INSTRUCTOR




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
        question: "how to code properly?",
        choices: ["sleep", "watch youtube only", "go to the beach", "practice"],
        answer: "practice",
    },
    {
        question: "question4",
        choices: ["choice4.1", "choice4.2", "choice4.3", "choice4.4"],
        answer: "choice4.1",
    },
    {
        question: "question5",
        choices: ["choice5.1", "choice5.2", "choice5.3", "choice5.4"],
        answer: "choice5.1",
    }
];
  


var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var finalScoreEl = document.querySelector("#finalscore");
var highScoreSpan = document.querySelector("#high-score")

var questionIndex = 0;
var correctCount = 0;

var time = 80;
var intervalId;

function endQuiz() {
  clearInterval(intervalId);
  var body = document.body;
  body.innerHTML = "All done! Your final score is " + correctCount;

  localStorage.setItem('score', correctCount);
}

function updateTime() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion() {
    
  
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
      time = time - 2;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}






// renderQuestion();
optionListEl.addEventListener("click", checkAnswer);
startQuizBtn.addEventListener("click" , renderQuestion);
initials.addEventListener("click", renderLastScore);








