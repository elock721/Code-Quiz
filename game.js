let timeLeft = 60
const timeLeftDisplay = document.querySelector('#timer')
const startingEl = document.querySelector(".row1")
const questContainer = document.querySelector(".question-container")
const questionElement = document.getElementById("question")
var currentQuestionIndex = 0
var buttonOne = document.getElementById('button1')
var buttonTwo = document.getElementById('button2')
var buttonThree = document.getElementById('button3')
var buttonFour = document.getElementById('button4')
var questionTitle = document.getElementById('questionTitle')
var gameOver = document.querySelector('.row3')
var feedBack = document.querySelector('#feedback')
var score = 0; 
var endScore = document.querySelector('#endScore');
var submitBtn = document.getElementById('submitBtn');



document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('start-btn')

    const startButton = document.getElementById("start-btn");

// Starts the quiz
    function startGame() {
        console.log('Started');
        console.log(startingEl);
        startingEl.style.display = "none";
        questContainer.style.display = "block";
        setNextQuestion()
    }
// Starts the countdown 
    startButton.addEventListener('click', function () {
        startGame();
        countDown();
    })
})
// timer
function countDown() {
    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -= 1
    }, 1000)
}
// prompts the next question 
function setNextQuestion() {
    var question = questions[currentQuestionIndex]
    buttonOne.textContent = question.choices[0]
    buttonTwo.textContent = question.choices[1]
    buttonThree.textContent = question.choices[2]
    buttonFour.textContent = question.choices[3]
    questionTitle.textContent = question.title
}
// event listeners for answers
buttonOne.addEventListener('click', checkAnswer);
buttonTwo.addEventListener('click', checkAnswer);
buttonThree.addEventListener('click', checkAnswer);
buttonFour.addEventListener('click', checkAnswer);

// checks answer
function checkAnswer(event) {
    var answer = questions[currentQuestionIndex].answer
    // provided feeback if answer is correct
    if (answer === event.target.innerHTML) {
        feedBack.textContent = "Correct!";
        score++;
        clearFeedBack(); 
    // provided feedback if answer is wrong
    } else{
        feedBack.textContent = "Wrong!";
        clearFeedBack(); 
        timeLeft-=10
    }
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        setNextQuestion()  
    }
    else{
        endGame();
    }
  
}
// prompts initals and shows score
function endGame() {
    endScore.textContent = score; 
    questContainer.style.display = "none";
    gameOver.style.display = "block";
    
    
}
// click event 
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    setScore();

}) 
// stores in local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('exampleInputName1').value);
    window.location.replace('highscore.html')
    }

// clears answer feedback 
function clearFeedBack(){
    setTimeout(function(){
        feedBack.textContent = "";
    },1000) 
    
}

// Answers array
var questions = [
    {
        title: 'The Andes Mountian range is a part of what continent?',
        choices: ["Europe", "South America", "Africa", "Asia"],
        answer: "South America"
    },
    {
        title: 'What country is the Nile River in?',
        choices: ["Sweden", "India", "Canada", "Egypt"],
        answer: "Egypt"
    },
    {
        title: 'The Great Barrier Reef is off the North East coast of what country?',
        choices: ["Australia", "England", "South Africa", "Japan"],
        answer: "Australia"
    },
    {
        title: 'What country has the most amount of coastline in the world?',
        choices: ["Russia", "Indonesia", "Australia", "Canada"],
        answer: "Canada"
    },
    {
        title: 'What country is the Gobi Desert in?',
        choices: ["Spain", "Angola", "Mongolia", "United States"],
        answer: "Mongolia"
    },
]


