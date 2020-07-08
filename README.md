# Coding Quiz Challenge

This application take the user through a 5 question, multiple choice quiz on JavaScript Fundementals. There are two buttons at the top,
one to view any saved high scores, and another to restart the quiz. When the user clicks the start button, they are then presented with a multiple choice question and the timer begins. The user is given 40 seconds to complete this quiz. Once the user chooses an answers, the quiz automatically moves to the next question. If the question is answered incorrectly, 5 seconds are deducted from the timer.

At the end of the quiz or when the timer reaches 0, the user is then prompted to input their initials. One the submit button is clicked the page moves to the high scores page which shows the user's recent scores. 

## Code Description

The code is set up to select HTML elements and either hide/show them or create new elements and append children to existing ones. The questions and answers are stored in arrays, where the index in the questions arrary corresponds with the same index in each answers arrary. Example, index 0 in the questions arrary, has the multiple choice answers of index 0 in each answers arrary. 

Buttons for each answer (a, b, c, d) along with a bolded heading area, are created upon the user clicking the start button. From there, index 0 of the questions and each answer array are placed as the text content in the appropriate places. When the user selects an answer, an if statement checks if it is correct or not, displays text stating so, adds to the user's score if correct, and moves to the next question using the moveNext() function. The if statement checks for correctness based on the index of the array; there is an if statement within the event listener for each button.

The moveNext() function's sole responsibility is to replace the text on the buttons with the next index in the questions and each answer array.

When the time runs out, the interval is cleared, the questions and answers are removed and the user is presented with an input. This also occurs when the user answers the 5th question. This is controlled by the gameEnd() function. 

Once the user inputs their initials and clicks the submit button, and event listener triggers the storage of the user initials and final score as well as deletion of the input and button. The retrieveHighScores() function is called. This function is also called when the "View High Scores" button is clicked in the upper left corner.

The retrieveHighScores() function displays the high scores element by changing the opacity to 1. Then the function takes the user initials and score out of storage, pushes them onto the array as a string, creates p elements for each item in the array and displays them accordingly. 

From there the user is free to close the application and reopen it and click the view high scores button to view the stored scores. Or they can take the quiz again. 

Link to application: 

The following animation demonstrates the application functionality:
**Note this is not the application but a similar one that solely serves to show the functionality of the application. 

![code quiz](./Assets/04-web-apis-homework-demo.gif)

The following photos show the application in various stages: 

Below is the page when first opened by the user:
![home page](./Assets/Images/homepage.png)

Below shows the page while the quiz is being taken:
![question](./Assets/Images/question.png)

Below shows what displays when the timer runs out:
**Note that the same input will display without the Time is Up! text if the user completes the quiz before the timer reaches 0. 
![timeout and input](./Assets/Images/timeout.png)

Below shows the view high scores page, this also displays after the user inputs their initials:
![high scores](./Assets/Images/Highscore.png)
