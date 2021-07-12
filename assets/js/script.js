var taskIdcounter =  0;

var buttonEl = document.querySelector("#startquiz");
var answerOneEl = document.querySelector("#answ1");


// buttonEl.addEventListener("click", function() {
//     var answerFirst = document.createElement("li");
//     answerFirst.className = "response1";
//     answerFirst.textContent = "this is the a new question/response?";
//     answerOneEl.appendChild(answerFirst);
// });







// buttonEl.addEventListener("startquiz",Beginquiz);


// FINISH 4.1.8


var createTaskHandler = function() {
    var answerFirst = document.createElement("li");
    answerFirst.className = "response1";
    answerFirst.textContent = "this is the a new question/response?";
    answerOneEl.appendChild(answerFirst);
};

buttonEl.addEventListener("click", createTaskHandler);