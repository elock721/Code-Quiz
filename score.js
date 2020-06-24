// fetching saved user initals and score from local storage
    function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br>`;
    
    document.getElementById("quizPage").innerHTML = quizContent;
    }
// calling the function 
    getScore();