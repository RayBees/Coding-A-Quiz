console.log("hello");
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
  var timeClockEl = document.getElementById("timeClock");
  var startButtonEl = document.getElementById("start");
  var quizAreaEl = document.getElementById("quiz");
  var questionTextEl = document.getElementById("qText");
  var choicesEl = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
  ];
  var count = 12;
  var scoreEl = document.getElementById("scoreContainer");
  
  function startQuiz() {
    // Toggle visibility
    startButtonEl.style.display = "none";
    quizAreaEl.style.display = "";
    
    // Show first question
    renderQuestion(0);
    renderScore();
  }
  startButtonEl.addEventListener("click", () =>{
    console.log("start");
    var countdown = setInterval(() =>{
       timeClockEl.innerHTML = count;
        count--;
        console.log(count);
        if (count<= -1) {       
            clearInterval(countdown);
        }
    }, 1000);
    startQuiz();
});
  
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
  
//   startButtonEl.addEventListener("click", startQuiz);