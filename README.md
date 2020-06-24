

Geography Quiz Overview

For this geography themed quiz, players have 60 seconds to complete 5 questions

When the user presses begin they will be prompted with the first question/answer choices

The countdown remains the same for correct answers but 10 seconds is deducted for each wrong answer 

Once an answer is selected, they will automatically be prompted with the next question/answer choices 

Once all the questions have been answered, the score is displayed and the user will have an opportunity to input there initals to log their high score 

When they submit their initials, it will be logged locally and they will be brought to the high scores homepage 



Psuedo Code

When the start button is pressed, the startGame function will hide the starting jumbotron and display the quesiton container

The function countdown will begin a 60 second timer counting down 

The setNextQuestion function will plug the questions and answers into the question container from the quesitons array

Event Listeners for each of the four buttons will use the checkAnswer function to verify whether the answer is right or wrong

Else and if statements will let the user know if their answers are right or wrong

The current question index will continue to produce questions as long as it is less then the length of the the questions array

Once the end of the question array has been reached, the quiz will end

The end game function will hide the questionContainer and display the end of the game jumbotron complete with score and an initals text box for logging high score









