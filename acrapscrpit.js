let questions = [
    {
      question: "1. What color are flamingos when they are born?",
      choices: ["pink", "brown", "grey", "green"],
      correctAnswer: 2
    },
    {
      question: "2. Where is a shrimps heart?",
      choices: ["head", "body", "tail", "thorax"],
      correctAnswer: 0
    },
    {
      question: "3. Where are  French poodles from?",
      choices: ["Japan", "Russia", "Germany", "Poland"],
      correctAnswer: 2
    },
    {
      question: "4. What animal is more related to a hippo?",
      choices: ["rodent", "rhinocerous", "elephant", "horse"],
      correctAnswer: 3
    },
    {
      question: "5. What mammal is unable to jump?",
      choices: ["rhino", "hippo", "elephant", "Anteater"],
      correctAnswer: 2
    },
    {
      question: "6. How many ants can an anteater eat in a day?",
      choices: ["500", "35,000", "10,000", "2,000"],
      correctAnswer: 1
    },
    {
      question: "7. Which is the hottest planet in our solar system?",
      choices: ["Mars", "Mercury", "Venus", "Jupiter"],
      correctAnswer: 2
    },
    {
      question: "8. Which planet has the most moons?",
      choices: ["Saturn", "Jupiter", "Venus", "Uranus"],
      correctAnswer: 0
    },
    {
      question: "9. Where is the smallest bone in your body located?",
      choices: ["ear", "nose", "toe", "pinky"],
      correctAnswer: 0
    },
    {
      question:
        "10. How fast does one red blood cell take to complete a circuit around your body?",
      choices: ["'10 mins'", "'5 mins'", "'1hr'", "'20 secs'"],
      correctAnswer: 3
    }
  ];
  
  var startButtonEl = document.getElementById("start");
  var quizAreaEl = document.getElementById("quiz");
  var questionTextEl = document.getElementById("qText");
  var choicesEl = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
  ];
  var scoreEl = document.getElementById("scoreContainer");
  
  function startQuiz() {
    // Toggle visibility
    startButtonEl.style.display = "none";
    quizAreaEl.style.display = "";
    
    // Show first question
    renderQuestion(0);
    renderScore()
  }
  
  let currentQuestionIndex;
  function renderQuestion(index) {
    currentQuestionIndex = index;
    let currentQuestion = questions[index];
    questionTextEl.textContent = currentQuestion.question;
    for (var i = 0; i < choicesEl.length; i++) {
      choicesEl[i].textContent = currentQuestion.choices[i];
    }
  }
  function startOver(){
      currentScore = 0;
      renderQuestion(0);
      renderScore();
      }
  
  let currentScore = 0;
  function renderScore() {
    scoreEl.textContent = "score: "+ currentScore;
  }
  
  function checkAnswer(answerLetter) {
      let answerIndex = {"a":0, "b":1, "c":2, "d":3}[answerLetter]
      
    let currentQuestion = questions[currentQuestionIndex];
   
    let correctAnswer = currentQuestion.correctAnswer;
    
    if (answerIndex === correctAnswer) {
      currentScore++;
    }
    console.log(answerIndex);
    console.log(currentQuestionIndex);
    if (currentQuestionIndex === 9)document.getElementById("startOver").style.display="initial";
    else renderQuestion(currentQuestionIndex+1);
    renderScore();
  }
  
  startButtonEl.addEventListener("click", startQuiz);
  













// var currentQuestion = 0;
// var viewingAns = 0;
// var correctAnswers = 0;
// var quizOver = false;
// var iSelectedAnswer = [];
// 	var c=180;
// 	var t;
// $(document).ready(function () 
// {
//     // Display the first question
//     displayCurrentQuestion();
//     $(this).find(".quizMessage").hide();
//     $(this).find(".preButton").attr('disabled', 'disabled');
	
// 	timedCount();
	
// 	$(this).find(".preButton").on("click", function () 
// 	{		
		
//         if (!quizOver) 
// 		{
// 			if(currentQuestion == 0) { return false; }
	
// 			if(currentQuestion == 1) {
// 			  $(".preButton").attr('disabled', 'disabled');
// 			}
			
// 				currentQuestion--; // Since we have already displayed the first question on DOM ready
// 				if (currentQuestion < questions.length) 
// 				{
// 					displayCurrentQuestion();
					
// 				} 					
// 		} else {
// 			if(viewingAns == 3) { return false; }
// 			currentQuestion = 0; viewingAns = 3;
// 			viewResults();		
// 		}
//     });

	
// 	// On clicking next, display the next question
//     $(this).find(".nextButton").on("click", function () 
// 	{
//         if (!quizOver) 
// 		{
			
//             var val = $("input[type='radio']:checked").val();

//             if (val == undefined) 
// 			{
//                 $(document).find(".quizMessage").text("Please select an answer");
//                 $(document).find(".quizMessage").show();
//             } 
// 			else 
// 			{
//                 // TODO: Remove any message -> not sure if this is efficient to call this each time....
//                 $(document).find(".quizMessage").hide();
// 				if (val == questions[currentQuestion].correctAnswer) 
// 				{
// 					correctAnswers++;
// 				}
// 				iSelectedAnswer[currentQuestion] = val;
				
// 				currentQuestion++; // Since we have already displayed the first question on DOM ready
// 				if(currentQuestion >= 1) {
// 					  $('.preButton').prop("disabled", false);
// 				}
// 				if (currentQuestion < questions.length) 
// 				{
// 					displayCurrentQuestion();
					
// 				} 
// 				else 
// 				{
// 					displayScore();
// 					$('#iTimeShow').html('Quiz Time Completed!');
// 					$('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
// 					c=185;
// 					$(document).find(".preButton").text("View Answer");
// 					$(document).find(".nextButton").text("Play Again?");
// 					quizOver = true;
// 					return false;
					
// 				}
// 			}
					
// 		}	
// 		else 
// 		{ // quiz is over and clicked the next button (which now displays 'Play Again?'
// 			quizOver = false; $('#iTimeShow').html('Time Remaining:'); iSelectedAnswer = [];
// 			$(document).find(".nextButton").text("Next Question");
// 			$(document).find(".preButton").text("Previous Question");
// 			 $(".preButton").attr('disabled', 'disabled');
// 			resetQuiz();
// 			viewingAns = 1;
// 			displayCurrentQuestion();
// 			hideScore();
// 		}
//     });
// });



// function timedCount()
// 	{
// 		if(c == 185) 
// 		{ 
// 			return false; 
// 		}
		
// 		var hours = parseInt( c / 3600 ) % 24;
// 		var minutes = parseInt( c / 60 ) % 60;
// 		var seconds = c % 60;
// 		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);            
// 		$('#timer').html(result);
		
// 		if(c == 0 )
// 		{
// 					displayScore();
// 					$('#iTimeShow').html('Quiz Time Completed!');
// 					$('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
// 					c=185;
// 					$(document).find(".preButton").text("View Answer");
// 					$(document).find(".nextButton").text("Play Again?");
// 					quizOver = true;
// 					return false;
					
// 		}
		
// 		/*if(c == 0 )
// 		{	
// 			if (!quizOver) 
// 			{
// 				var val = $("input[type='radio']:checked").val();
//             	if (val == questions[currentQuestion].correctAnswer) 
// 				{
// 					correctAnswers++;
// 				}
// 				currentQuestion++; // Since we have already displayed the first question on DOM ready
				
// 				if (currentQuestion < questions.length) 
// 				{
// 					displayCurrentQuestion();
// 					c=15;
// 				} 
// 				else 
// 				{
// 					displayScore();
// 					$('#timer').html('');
// 					c=16;
// 					$(document).find(".nextButton").text("Play Again?");
// 					quizOver = true;
// 					return false;
// 				}
// 			}
// 			else 
// 			{ // quiz is over and clicked the next button (which now displays 'Play Again?'
// 				quizOver = false;
// 				$(document).find(".nextButton").text("Next Question");
// 				resetQuiz();
// 				displayCurrentQuestion();
// 				hideScore();
// 			}		
// 		}	*/
// 		c = c - 1;
// 		t = setTimeout(function()
// 		{
// 			timedCount()
// 		},1000);
// 	}
	
	
// // This displays the current question AND the choices
// function displayCurrentQuestion() 
// {

// 	if(c == 185) { c = 180; timedCount(); }
//     //console.log("In display current Question");
//     var question = questions[currentQuestion].question;
//     var questionClass = $(document).find(".quizContainer > .question");
//     var choiceList = $(document).find(".quizContainer > .choiceList");
//     var numChoices = questions[currentQuestion].choices.length;
//     // Set the questionClass text to the current question
//     $(questionClass).text(question);
//     // Remove all current <li> elements (if any)
//     $(choiceList).find("li").remove();
//     var choice;
	
	
//     for (i = 0; i < numChoices; i++) 
// 	{
//         choice = questions[currentQuestion].choices[i];
		
// 		if(iSelectedAnswer[currentQuestion] == i) {
// 			$('<li><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
// 		} else {
// 			$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
// 		}
//     }
// }

// function resetQuiz()
// {
//     currentQuestion = 0;
//     correctAnswers = 0;
//     hideScore();
// }

// function displayScore()
// {
//     $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
//     $(document).find(".quizContainer > .result").show();
// }

// function hideScore() 
// {
//     $(document).find(".result").hide();
// }

// // This displays the current question AND the choices
// function viewResults() 
// {

// 	if(currentQuestion == 10) { currentQuestion = 0;return false; }
// 	if(viewingAns == 1) { return false; }

// 	hideScore();
//     var question = questions[currentQuestion].question;
//     var questionClass = $(document).find(".quizContainer > .question");
//     var choiceList = $(document).find(".quizContainer > .choiceList");
//     var numChoices = questions[currentQuestion].choices.length;
//     // Set the questionClass text to the current question
//     $(questionClass).text(question);
//     // Remove all current <li> elements (if any)
//     $(choiceList).find("li").remove();
//     var choice;
	
	
// 	for (i = 0; i < numChoices; i++) 
// 	{
//         choice = questions[currentQuestion].choices[i];
		
// 		if(iSelectedAnswer[currentQuestion] == i) {
// 			if(questions[currentQuestion].correctAnswer == i) {
// 				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
// 			} else {
// 				$('<li style="border:2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
// 			}
// 		} else {
// 			if(questions[currentQuestion].correctAnswer == i) {
// 				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
// 			} else {
// 				$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
// 			}
// 		}
//     }
	
// 	currentQuestion++;
	
// 	setTimeout(function()
// 		{
// 			viewResults();
// 		},3000);
// }
