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

// create the function that will diplay your question
function displayQuestion() {
    // dynamically target a single object in the questions array
    var currentQuestionObject = questions[questionIndex]
    // created our h2 and div elements
    var h2El = document.createElement('h2');
    var divEl = document.createElement('div');

    // targeted the question property from the current question object and added it to the h2El as its text content
    h2El.textContent = currentQuestionObject.question;

    // iterates throught the choices in the current question object
    for (var i = 0; i < currentQuestionObject.choices.length; i++) {
    // create a button
        var btnEl = document.createElement('button')
        // targeted the choices array and added the content of it to each button
        btnEl.textContent = currentQuestionObject.choices[i];
        btnEl.addEventListener('click', click)
        // append newly created buttons the div element
        divEl.append(btnEl)

    }
    // appends the question and the choices to the quizEl
    quizEl.append(h2El, divEl)
}



