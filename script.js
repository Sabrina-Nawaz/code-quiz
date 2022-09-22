var timerEl = document.getElementById("timer");
var startContainer = document.getElementById("start-container");
var btnStart = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var timerStart;
var time = 95
var questionIndex = 0;

console.log(getElementbyId('timer')
// Create Questions 
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: ['strings', 'alerts', 'booleans', 'numbers'],
        answer: 'Alerts'
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        choices: ['quotes', 'parentheses', 'square brackets', 'curly brackets'],
        answer: 'curly brackets'
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ['numbers', 'strings', 'objects', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: "String values must be enclosed in what when being assigned to variables:",
        choices: ['quotes', 'commas', 'arrays', 'all of the above'],
        answer: 'quotes'
    },
]

console.log(questions[1].question)


// questionOne.textContent = "Commonly used data types do NOT include:"
// questionTwo.textContent = "The condition in an if/else statement is enclosed with: "
// questionThree.textContent = "Arrays in JavaScript can be used to store:"
// questionFour.textContent = "String values must be enclosed in what when being assigned to variables:"


function start() {
    // when the quiz starts,the timer starts...
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

    // iterates through the choices in the current question object
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

function click() {
    // need to check if the user selected the wrong answer. If the answer is wrong, then we need to deduct from time.
    
    
    // if there are more questions need to ask the display question function again. else the game is over. if the time has ran out the game is also over. 
    
    
    // when a button is clicked the question index is increased by one
        questionIndex++
        console.log(questionIndex)
    }


// user clicks start button
btnStart.addEventListener('click', start)


//Create Options --> are these appended to the results portion or is this just meant for the initials? Are the options in a giant object with the questions? 


