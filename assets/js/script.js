
// var buttonEl = document.querySelector("#startquiz");
// var answerOneEl = document.querySelector("#answ1");


// buttonEl.addEventListener("click", function() {
//     var answerFirst = document.createElement("li");
//     answerFirst.className = "response1";
//     answerFirst.textContent = "this is the a new question/response?";
//     answerOneEl.appendChild(answerFirst);
// });







// buttonEl.addEventListener("startquiz",Beginquiz);


// FINISH 4.1.8


// YOU CAN USE THIS ONE TOO - IT WORKS SEE BELOW!!!!!

// var createTaskHandler = function() {
//     var answerFirst = document.createElement("li");
//     answerFirst.className = "response1";
//     answerFirst.textContent = "this is the a new question/response?";
//     answerOneEl.appendChild(answerFirst);
// };

// buttonEl.addEventListener("click", createTaskHandler);


function renderLastRegistered() {
    // Retrieve the last email and password from localStorage using `getItem()`
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');
  
    // If they are null, return early from this function
    if (email === null || password === null) {
      return;
    }
  
    // Set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
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
    }
];
  
var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

var time = 80;
var intervalId;

function endQuiz() {
  clearInterval(intervalId);
  var body = document.body;
  body.innerHTML = "Game over, You scored " + correctCount;

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
  var choicesLenth = choices.length;

  for (var i = 0; i < choicesLenth; i++) {
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

renderQuestion();
optionListEl.addEventListener("click", checkAnswer);








