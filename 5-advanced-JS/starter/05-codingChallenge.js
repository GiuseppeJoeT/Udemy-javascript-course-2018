/* CODING CHALLENGE
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers [USATO AIUTO PER OUTPUT RISPOSTA] (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

TAKE ALL THE TIME YOU NEED (5 hrs)
*/

// step 7
(function () {
    // step 1
    // function constructor: The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically.
    // This is known as ABSTRACTION — creating a simple model of a more complex thing
    var Question = function(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    // step 4
    // (Math.random() * 3) gives us numbers between 0 and 2
    var randomQuestion = Math.floor(Math.random() * 3);
    // var logCorrectAnswer = questions[randomQuestion].correctAnswer;
    
    // step 5
    var userAnswer = window.prompt('Please insert your answer: ', 'Possible answers: 0, 1, 2, 3');

    Question.prototype.logRandomQuestion = function() {
            console.log(questions[randomQuestion].question);
    };

    Question.prototype.checkAnswer = function() {
        if (userAnswer === this.correctAnswer) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong Answer! Try again. :)');
        }
    };
    
    var question01 = new Question(
                        'Which of the following is NOT a primitive JavaScript data type?', 
                        ['Number', 
                        'Boolean',
                        'Text',
                        'Undefined'
                        ], 
                        2);

    var question02 = new Question(
                        'A JavaScript operator is similar to a:',
                        ['Variable',
                        'Function',
                        'Array',
                        'Closure'],
                        1);

    var question03 = new Question(
                        'What do the expressions 1 == true and 1 === true return?',
                        ['true and false, because == performs type coercion and === does not',
                        'false and true, because == performs type coercion and === does not',
                        'true and false, because === performs type coercion and == does not',
                        'false and true, because === performs type coercion and == does not'],
                        0);

    var questions = [question01, question02, question03];

    
    question01.logRandomQuestion();
    question01.checkAnswer();

})();


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/