var timerEl = document.getElementById("timer");
var startContainer = document.getElementById("start-container");
var btnStart = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var resultsEl = document.getElementById("results");
var timerStart;
var time = 95
var questionIndex = 0;
var score = 0;

// Creates Questions 
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: ['strings', 'alerts', 'booleans', 'numbers'],
        answer: 'alerts',
        result: false
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        choices: ['quotes', 'parentheses', 'square brackets', 'curly brackets'],
        answer: 'curly brackets',
        result: false
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ['numbers', 'strings', 'objects', 'all of the above'],
        answer: 'all of the above',
        result: false
    },
    {
        question: "String values must be enclosed in what when being assigned to variables:",
        choices: ['quotes', 'commas', 'arrays', 'all of the above'],
        answer: 'quotes',
        result: false
    },
]
//console.log(questions[1].question)

function start() {
    // when the quiz starts,the timer starts...
    timerEl.textContent = time
    // create a timer
    timerStart = setInterval(function () {
        time--
        // this displays time on the page
        timerEl.textContent = time
        if (time <= 0) {
            //this stops timer if it reaches 0
            return clearInterval(timerStart)
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
    quizEl.innerHTML = '';
    // dynamically target a single object in the questions array
    var currentQuestionObject = questions[questionIndex]
    // created our h2 and div elements
    var h2El = document.createElement('h2');
    var divEl = document.createElement('div');
    var incorrectEl = document.createElement('p');

    // targeted the question property from the current question object and added it to the h2El as its text content
    h2El.textContent = currentQuestionObject.question;
    // targeted the incorrect answers and added the string below as its text content. 
    incorrectEl.textContent = "Previous question is incorrect!"

    // iterates through the choices in the current question object
    for (var i = 0; i < currentQuestionObject.choices.length; i++) {
        // create a button
        var btnEl = document.createElement('button')
        // targeted the choices array and added the content of it to each button
        btnEl.textContent = currentQuestionObject.choices[i];
        btnEl.setAttribute('value', currentQuestionObject.choices[i])
        btnEl.addEventListener('click', click)
        // append newly created buttons the div element
        divEl.append(btnEl)
    }
    // appends the question, the choices and incorrect element to the quizEl and checks whether the previous question was answered correctly 
    var previousQuestion = questions[questionIndex - 1]
    if (!previousQuestion || previousQuestion.result === true) {
        quizEl.append(h2El, divEl)
    } else {
        quizEl.append(h2El, divEl, incorrectEl)
    }
}

function click() {

    // need to check if the user selected the wrong answer. If the answer is wrong, then we need to deduct from time.
    if (this.value !== questions[questionIndex].answer) {
        time -= 15

        // time = time - 10
        // to ensure that time never goes below 0 if the user answers the questions incorrectly. This condition keeps it at 0
        if (time < 0) {
            time = 0;
        }
        // this displays time on the page
        timerEl.textContent = time
    } else {
        score++
        questions[questionIndex].result = true
    }
    // when a button is clicked the question index is increased by one
    questionIndex++

    // if there are more questions needed to ask the display question function again. else the game is over. if the time has ran out the game is also over. 
    if (time <= 0 || questionIndex === questions.length) {
        gameOver()
    } else {
        displayQuestion()
    }
}
function gameOver() {
    // stop timer
    clearInterval(timerStart)

    // hide an element
    document.getElementById("quiz").classList.add('hidden')
    // need to show the question container
    resultsEl.classList.remove('hidden')
    // need to hide the timer once the game is over
    document.getElementById("header").classList.add('hidden')
    // need to hide the question once the game is over
}
// user clicks start button
btnStart.addEventListener('click', start)

var submitButtonEl = document.getElementById("submit");
var submitNameEl = document.getElementById("enter-name");
var answersEl = document.getElementById("answers");

submitButtonEl.addEventListener('click', function onClick() {
    var name = submitNameEl.value;
    var answers = localStorage.getItem("answers");
    if (answers) {
        // parse the answers so now that it is an array
        var parseAnswers = JSON.parse(answers)

        // pushing new answers into the parseAnswers array 
        parseAnswers.push({ name, score })
        // need to stringify parsed answers
        var stringifiedparseAnswers = JSON.stringify(parseAnswers)
        // set the stringified answers to local storage 
        localStorage.setItem("answers", stringifiedparseAnswers)
        var joinedAnswers = ""
        for (var i = 0; i < parseAnswers.length; i++) {
            joinedAnswers += parseAnswers[i].name + parseAnswers[i].score + "\n"
        }
        document.getElementById("answers").textContent = joinedAnswers
        // Push the name and score into the initial Array
    } else {
        var initialArr = [];
        initialArr.push({ name, score })
        var stringifyinitialArr = JSON.stringify(initialArr)
        localStorage.setItem("answers", stringifyinitialArr)
    }
})



