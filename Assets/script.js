//HTML Selectors
var startText = document.querySelector("#startText");
var startBtn = document.querySelector("#start");
var restart = document.querySelector(".btnRestart");
var viewHighScores = document.querySelector(".btnHighScores")
var questionEl = document.querySelector("#question");
var ol = document.querySelector("#answers")
var answerCheck = document.querySelector("#answerCheck");

//Questions and Answers Arrays
//The question in index 0, corresponds with the 
var questions = ["What does HTML stand for?", "What type of brackets are used when defining an array?", "When it comes to string interpolation, what punctuation must surround the overall string?", "Which of the following is NOT a built-in type of variable in JavaScript?", "When styling in CSS, what is used to define styling for a class and id?"];
var answersA = ["Hypertext Markdown Language", "Straight Brackets", "Double quotation marks", "prompt", "class{} #id{}"];
var answersB = ["Hypertext Markup Language", "Curly Brackets", "Single quoation marks", "string", "#class{} .id{}"]; 
var answersC = ["Hypertransfer Markup List", "No Brackets", "Back Tics", "boolean", "class{} .id{}"];
var answersD = ["Hypertransfer Markdown List", "Parentheses", "Any of the above will work", "object", ".class{} #id{}"];

//When start button clicked
startBtn.addEventListener('click', function(event){
  startText.textContent = " ";
  startBtn.parentNode.removeChild(startBtn);

  //Create list element buttons for each possible answer
  var answerALi = document.createElement("li");
  ol.appendChild(answerALi);
  var answerAEl = document.createElement("button");
  answerAEl.setAttribute("id", "a");
  answerALi.appendChild(answerAEl);

  var answerBLi = document.createElement("li");
  ol.appendChild(answerBLi);
  var answerBEl = document.createElement("button");
  answerBEl.setAttribute("id", "b");
  answerBLi.appendChild(answerBEl);

  var answerCLi = document.createElement("li");
  ol.appendChild(answerCLi);
  var answerCEl = document.createElement("button");
  answerCEl.setAttribute("id", "c");
  answerCLi.appendChild(answerCEl);

  var answerDLi = document.createElement("li");
  ol.appendChild(answerDLi);
  var answerDEl = document.createElement("button");
  answerDEl.setAttribute("id", "d");
  answerDLi.appendChild(answerDEl);

  //Place the index 0 of each array into the answer buttons
  questionEl.textContent = questions[0];
  answerAEl.textContent = answersA[0];
  answerBEl.textContent = answersB[0];
  answerCEl.textContent = answersC[0];
  answerDEl.textContent = answersD[0];

  //Start timer
  setTime();
})

//Variable and functions for switching between the questions
let i = 0;

function moveNext() { 
    i++;
    //answerCheck.textContent = " ";
    document.getElementById("question").textContent = questions[i];
    document.getElementById("a").textContent = answersA[i];
    document.getElementById("b").textContent = answersB[i];
    document.getElementById("c").textContent = answersC[i];
    document.getElementById("d").textContent = answersD[i];

    if(i === 5){
      showHighScores();
    }
}

//add Event listeners for each button, do if statemets for if i=number say correct or incorrect based on the index of the array
//and move next
// answerAEl.addEventListener('click', function(event)){
//    if(i=1 || i=3){say correct} else{incorrect}
//}
//this function might not be needed
function checkAnswer() {

}

//Timer variables and function
var timeEl = document.querySelector("#timer");
var timeLeft = 21;

function setTime() {
  var timeInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if(timeLeft === 0) {
      answerCheck.textContent = "Time is Up!";
      timeLeft += 21;
      moveNext();
    } else if(timeLeft === 18){
      answerCheck.textContent = " ";
    }
  }, 1000);
}

//Function to displat high scores
function showHighScores() {
  console.log("High scores!");
}

//Event listener for View High Scores Button
viewHighScores.addEventListener('click', function(event){
  showHighScores();
})