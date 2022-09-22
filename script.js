var timer = document.getElementById("timer");
var btnStart = document.getElementById("btn-start");
var quizEl = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var timerStart;

// Create Questions 
var questionOne = document.createElement("p");
var questionTwo = document.createElement("p");
var questionThree = document.createElement("p");
var questionFour = document.createElement("p");

questionOne.textContent = "Commonly used data types do NOT include:"
questionTwo.textContent = "The condition in an if/else statement is enclosed with: "
questionThree.textContent = "Arrays in JavaScript can be used to store:"
questionFour.textContent = "String values must be enclosed in what when being assigned to variables:"
