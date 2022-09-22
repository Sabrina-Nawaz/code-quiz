var timerEl = document.getElementById("timer");
var startContainer = document.getElementById("start-container");
var btnStart = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var timerStart;
var time = 10
var questionIndex = 0;

// Create Questions 
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: ['a', 'b', 'c', 'd'],
        answer: 'a'
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        choices: ['a', 'b', 'c', 'd'],
        answer: 'a'
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ['a', 'b', 'c', 'd'],
        answer: 'a'
    },
]

console.log(questions[1].question)


// questionOne.textContent = "Commonly used data types do NOT include:"
// questionTwo.textContent = "The condition in an if/else statement is enclosed with: "
// questionThree.textContent = "Arrays in JavaScript can be used to store:"
// questionFour.textContent = "String values must be enclosed in what when being assigned to variables:"


function start() {
// when the quiz start the timer starts...
    timerEl.textContent = time
    // create a timer
    timerStart = setInterval(function () {
        time--
        // this displays time on the page
        timerEl.textContent = time
        if (time === 0) {
            // this stops timer if it reaches 0
            clearInterval(timerStart)
        }

    }, 1000)
    // hide an element
    startContainer.classList.add('hidden')
    // need to show the question container
    quizEl.classList.remove('hidden')
//    call function that displays your questions
displayQuestion()
}


// user clicks start button
btnStart.addEventListener('click', start)

//Create Options --> are these appended to the results portion or is this just meant for the initials? Are the options in a giant object with the questions? 

