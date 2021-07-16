var timer =  20;

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
  
function renderQuestion() {

    questionEl.textContent = questions[questionIndex].question;
  
    optionListEl.innerHTML = "";
  
    var choices = questions[questionIndex].choices;
    var choicesLength = choices.length;
  
    for (var i = 0; i < choicesLength; i++) {
      var questionListItem = document.createElement("li");
      questionListItem.textContent = choices[i];
      optionListEl.append(questionListItem);
    }
}
  






  
renderQuestion();








document
.querySelector("#change-question")
.addEventListener("click", function () {
    questionIndex++;
    renderQuestion();
}); 

