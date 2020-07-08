//HTML Selectors
var knowledgeText = document.querySelector("#knowledge");
var startText = document.querySelector("#startText");
var startBtn = document.querySelector("#start");
var restart = document.querySelector(".btnRestart");
var viewHighScores = document.querySelector(".btnHighScores");
var questionEl = document.querySelector("#question");
var ol = document.querySelector("#answers");
var scoreText = document.querySelector("#score");
var answerCheck = document.querySelector("#answerCheck");
var highScoreEl = document.querySelector("#highScores");
var storedScores = document.querySelector("#storedScores");

//Score Variable
var score = 0;

//Questions and Answers Arrays
//The question at index 0, corresponds with index 0 in each answer array
var questions = ["Where is the <script> tag placed in an HTML file?", "What type of brackets are used when defining an array?", "When it comes to string interpolation, what punctuation must surround the overall string?", "Which of the following is NOT a built-in type of variable in JavaScript?", "When using the querySelector(), what syntax is used to select by class and by id?"];
var answersA = ["Within the <head></head> tags", "Straight Brackets", "Double quotation marks", "prompt", "class #id"];
var answersB = ["Within the <body></body> tags", "Curly Brackets", "Single quoation marks", "string", "#class .id"]; 
var answersC = ["Within an <a></a> tag", "No Brackets", "Back Tics", "boolean", ".class id"];
var answersD = ["Anywhere as long as it is within the <html></html> tags", "Parentheses", "Any of the above will work", "object", ".class #id"];

//Timer variables and function
var timeEl = document.querySelector("#timer");
var timeLeft = 40;

function setTime() {
  var interval = setInterval(function() {

    timeEl.setAttribute("style", "opacity: 1;");

    if(timeLeft === 0) {
      timeEl.textContent = "Time is Up!";
      clearInterval(interval);
      questionEl.parentNode.removeChild(questionEl);
      ol.parentNode.removeChild(ol);
      gameEnd();
    } 
    else {
      timeLeft--;
      timeEl.textContent = timeLeft;
    }
  }, 1000);
};

//Variable and function for switching between the questions
let i = 0;

function moveNext() { 
  if(i === 4){
    timeEl.parentNode.removeChild(timeEl);
    questionEl.parentNode.removeChild(questionEl);
    answerAEl.parentNode.removeChild(answerAEl);
    answerBEl.parentNode.removeChild(answerBEl);
    answerCEl.parentNode.removeChild(answerCEl);
    answerDEl.parentNode.removeChild(answerDEl);
    return;
  } else {
    i++;
    //answerCheck.textContent = " ";
    document.getElementById("question").textContent = questions[i];
    document.getElementById("a").textContent = answersA[i];
    document.getElementById("b").textContent = answersB[i];
    document.getElementById("c").textContent = answersC[i];
    document.getElementById("d").textContent = answersD[i];
    document.getElementById("score").textContent = "Your Score: " + score;
  }
};

//Function for the game End
function gameEnd () {

  answerCheck.textContent = "Input your Initials Below:";

  //Added <br> tags for spacing
  var br1 = document.createElement("br");
  answerCheck.appendChild(br1);
  var br2 = document.createElement("br");
  answerCheck.appendChild(br2);

  //Create Input element for user initials when the game is over
  var userInitials = document.createElement("input");
  userInitials.setAttribute("type", "text");
  userInitials.setAttribute("id", "userInitials");
  answerCheck.appendChild(userInitials);

  //Create submit button and put on new line
  var br3 = document.createElement("br");
  answerCheck.appendChild(br3);
  var submitBtn = document.createElement("button");
  submitBtn.setAttribute("id", "submit");
  submitBtn.textContent = "Submit";
  answerCheck.appendChild(submitBtn);

submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    //store score and initials in local storage
    var user = document.querySelector("#userInitials").value;
    var finalScore = score;
  
    if (userInitials === "") {
      displayMessage("error", "Input cannot be blank");
    }
  
      localStorage.setItem("userInitials", user);
      localStorage.setItem("finalScore", finalScore);

      console.log(user);
      console.log(finalScore);

      showHighScores();
    });
};

  //Function to displat high scores
  function showHighScores() {

    //remove input element, submit button and score
    var deleteSubBtn = document.querySelector("#submit");
    var deleteUserInput = document.querySelector("#userInitials");

    deleteSubBtn.parentNode.removeChild(deleteSubBtn);
    deleteUserInput.parentNode.removeChild(deleteUserInput);

    answerCheck.textContent = " ";
    scoreText.textContent = " ";
    timeEl.textContent = " ";

    retrieveHighScores();
  };

  //Function to retrieve the high scores from local storage
  function retrieveHighScores() {
    highScoreEl.setAttribute("style", "opacity: 1;");

    let lastUser = localStorage.getItem("userInitials");
    let lastScore = localStorage.getItem("finalScore");
    var localScores = [];

    let lastUserAndScore = lastUser + ". . . . . . . . . . " + lastScore;

    localScores.push(lastUserAndScore);
    console.log(localScores);

    localStorage.setItem("localScores", localScores);
    localStorage.getItem("localScore");

    for(let t = 0; t < localScores.length; t++) {

       let initialsAndScore = document.createElement("p");
       initialsAndScore.setAttribute("id", "initialsAndScore");
       storedScores.prepend(initialsAndScore);
      
       initialsAndScore.textContent = localScores[t];
    }

    localStorage.setItem("localScores", localScores);
  }

  //Event listener for View High Scores Button
  viewHighScores.addEventListener('click', function(event){
    retrieveHighScores();
  });

//When start button clicked
startBtn.addEventListener('click', function(event){
  knowledgeText.parentNode.removeChild(knowledgeText);
  startText.parentNode.removeChild(startText);
  startBtn.parentNode.removeChild(startBtn);
  highScoreEl.setAttribute("style", "opacity: 0;");

  //Start timer
  setTime();

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

  //Check Answer based on the index
  answerAEl.addEventListener('click', function(event){
    if(i === 1 || i === 3){
      answerCheck.textContent = "Correct!";
      score += 2;
      moveNext();
    } else if (i === 4){
      document.getElementById("score").textContent = "Your Score: " + score;
      
      timeEl.parentNode.removeChild(timeEl);
      questionEl.parentNode.removeChild(questionEl);
      answerALi.parentNode.removeChild(answerALi);
      answerBLi.parentNode.removeChild(answerBLi);
      answerCLi.parentNode.removeChild(answerCLi);
      answerDLi.parentNode.removeChild(answerDLi);

      gameEnd();

    } else {
      answerCheck.textContent = "Incorrect";
      timeLeft -= 5;
      moveNext();
    }
  });

  answerBEl.addEventListener('click', function(event){
    if(i === 0){
      answerCheck.textContent = "Correct!";
      score += 2;
      moveNext();
    } else if (i === 4){
      document.getElementById("score").textContent = "Your Score: " + score;
      
      timeEl.parentNode.removeChild(timeEl);
      questionEl.parentNode.removeChild(questionEl);
      answerALi.parentNode.removeChild(answerALi);
      answerBLi.parentNode.removeChild(answerBLi);
      answerCLi.parentNode.removeChild(answerCLi);
      answerDLi.parentNode.removeChild(answerDLi);

      gameEnd();

    } else {
      answerCheck.textContent = "Incorrect";
      timeLeft -= 5;
      moveNext();
    }
  });

  answerCEl.addEventListener('click', function(event){
    if(i === 2){
      answerCheck.textContent = "Correct!";
      score += 2;
      moveNext();
    } else if (i === 4){
      document.getElementById("score").textContent = "Your Score: " + score;
      
      timeEl.parentNode.removeChild(timeEl);
      questionEl.parentNode.removeChild(questionEl);
      answerALi.parentNode.removeChild(answerALi);
      answerBLi.parentNode.removeChild(answerBLi);
      answerCLi.parentNode.removeChild(answerCLi);
      answerDLi.parentNode.removeChild(answerDLi);

      gameEnd();

    } else {
      answerCheck.textContent = "Incorrect";
      timeLeft -= 5;
      moveNext();
    }
  });

  answerDEl.addEventListener('click', function(event){
    if(i === 4){
      score += 2;
      document.getElementById("score").textContent = "Your Score: " + score;
      
      timeEl.parentNode.removeChild(timeEl);
      questionEl.parentNode.removeChild(questionEl);
      answerALi.parentNode.removeChild(answerALi);
      answerBLi.parentNode.removeChild(answerBLi);
      answerCLi.parentNode.removeChild(answerCLi);
      answerDLi.parentNode.removeChild(answerDLi);

      gameEnd();

    } else {
      answerCheck.textContent = "Incorrect";
      timeLeft -= 5;
      moveNext();
    }
  });
});