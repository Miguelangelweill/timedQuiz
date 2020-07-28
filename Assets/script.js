//NEXT STEP IS TO SEE IF I GO OUTSIDE OF THE ARRAY, BECAUSE RIGHT NOW THAT IS MY PROBLEM
//WE ALSO MUST CHECK IF THE USER ALSO FINISHES BEFORE

//HERE I CREATE MY ELEMNTS
var bodyControl = document.body;
var containerHandler = document.createElement("main");
var mainHeader = document.createElement("h2");
var paragraph1 = document.createElement("p");
var paragraph2 = document.createElement("p");
var startButton = document.createElement("button");
var secondsLeft = document.createElement("span");
var wrongAnswer = document.createElement("span");
var rightAnswer = document.createElement("span");
// buttons for the question
var yesButton = document.createElement("button");
var noButton = document.createElement("button");

//TEXT FOR ALL OF THE ELEMENTS AT THE BIGGINNING OF THE TEST
mainHeader.textContent = "Ready for the big test ??";
paragraph1.textContent =
  'Whenever you click on "Get started", the quiz will start.';
paragraph2.textContent =
  "You have 45 seconds to answer the questions, there is a 15 second limit per question, if you get the answer wrong your score will be substracted by -1, and the time will be substracted by 5 seconds, get it right and you earn a point followed by a tap on the back";
startButton.textContent = "Get start";

//THESE ARE THE STYLES AND ATTRIBUTES FOR ALL OF MY ELEMENTS
bodyControl.setAttribute(
  "style",
  "background-image: url('https://images.unsplash.com/photo-1595173882484-028e1a206bea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');width: 100%;height: 100vh;position: fixed;-webkit-background-size:cover;background-size: cover;background-position: center center;margin: 0%;"
);
mainHeader.setAttribute("style", "font-size:30px; padding-top:5%;");
paragraph1.setAttribute(
  "style",
  "font-size:20px; margin-top:20px; padding:15px; padding-bottom:0px;"
);
paragraph2.setAttribute(
  "style",
  "font-size:20px; padding:15px; padding-top:0px;"
);
startButton.setAttribute("style", "background-color:rgb(146, 148, 149);");
secondsLeft.setAttribute(
  "style",
  "background-color:white; margin:2%; top:2%;font-size;15px; "
);
wrongAnswer.setAttribute(
  "style",
  "background-color:white; margin:2%; top:2%;font-size;15px; "
);
rightAnswer.setAttribute(
  "style",
  "background-color:white; margin:2%; top:2%;font-size;15px; "
);
yesButton.setAttribute("style", "margin:2%");
noButton.setAttribute("style", "margin:2%");
yesButton.setAttribute("type", "button");
noButton.setAttribute("type", "button");

//THIS IS THE FUNTCTION FOR MY CONTIANER
var container = function (event) {
  event = containerHandler.setAttribute(
    "style",
    "border:solid 1px white; display;inline-block;min-height:200px;margin:10%; background-color:white; text-align:center; font-family: 'Montserrat', sans-serif; "
  );
};
//THIS DISPLAYES THE CONTAINER ON MY SCREEN
container();
bodyControl.appendChild(wrongAnswer);
bodyControl.appendChild(rightAnswer);
bodyControl.appendChild(secondsLeft);
bodyControl.appendChild(containerHandler);
containerHandler.appendChild(mainHeader);
mainHeader.appendChild(paragraph1);
mainHeader.appendChild(paragraph2);
mainHeader.appendChild(startButton);
//THIS IS MY ARRAY OF QUESTIONS
var testQuestions = [
  {
    testQuestions: "Does the image tag on HTML need a closing tag?",
    options: ["Yes!!", "No!!"],
    answer: "Yes!!",
  },
  {
    testQuestions:
      "What do we call the value that goes inside of the parethesis of a function?",
    options: ["Name of function", "Argument"],
    answer: "Argument",
  },
  {
    testQuestions: "Is JavaScript an  API",
    options: ["Yes!!", "No!!"],
    answer: "No!!",
  },
];

// THESE ARE THE VARIABLES THAT KEEP THE TEST RUNNING
var timeLeft = 50;
var wrong = 0;
var right = 0; 
var currentQuestion = 0;
var finalScore = 0;
var interval;
//HERE WE ARE CREATING A FUNCTION WITH THE INNER HTML THAT WILL BE DISPLAYED ON OUR SCREEN

function displayQuestion() {
  var questionHtml =
    "<p>" + testQuestions[currentQuestion].testQuestions + "</p>";
  questionHtml +=
    "<button class='button'>" +
    testQuestions[currentQuestion].options[0] +
    "</button>";
  questionHtml +=
    "<button class='button'>" +
    testQuestions[currentQuestion].options[1] +
    "</button>";  
  //THIS IS WHERE I APPEND THE FIRST HTML THAT IS DISPLAYED INSIDE OF THE SCREEN
  event = containerHandler.innerText = "";
  containerHandler.appendChild(mainHeader);
  containerHandler.children[0].innerHTML = questionHtml;
}
  //THIS IS THE HTML FOR WHEN THE TEST IS OVER
function testFinished() {
  var testOver = "<h1>" + "Test is over" + "</h1>";
  testOver += "<h2>" + "this is your highest score " + "" + "</h2>";
  testOver +="<p>"+"Wrong answers: "+wrong+"</p>"
  testOver += "<p>" + "Right answers: " + right + "</p>"
  testOver += "<p>" + "Final score: " + finalScore + "</p>"
  return testOver;
}
//HERE I AM SEPERATING THE START BUTTON FROM THE QUESTION BUTTONS
startButton.addEventListener("click", function (event) {
  //HERE I AM CALLING THE FUNCTION THAT DISPLAYES THE HTML FOR MY QUESTIONS AND DISPLAYES THE QUESTION DEPENDING ON ITS INDEX POSITION
  displayQuestion();
  //THIS IS TE INTERVAL FOR HOW LONG THE TEST SHOULD LAST
  var mainTimeInterval = setInterval(function () {
    if (timeLeft >= 0) {
      secondsLeft.textContent = "  Seconds left: " + timeLeft + " ";
      timeLeft--;
    }
  }, 1000);
});
function theWholeTest(){
  if (currentQuestion < testQuestions.length) {
    displayQuestion();
  } else {
    containerHandler.innerHTML = testFinished();
  }
}
//HERE WE ARE ONLY LISTENING FOR THE CLICKS THAT COME FROM THE BUTTONS THAT HAVE A CLASS
containerHandler.addEventListener("click", function (event) {
  //THIS IS WHERE I ACRUALLY TARGET THOSE BUTTONS
  if (event.target.matches(".button")) {
    var buttonClicked = event.target.innerText;
    // I AM TELLING IT WHAT TO DO IF THE BUTTON THAT IS CLICKED IS EQUALS TO THE ANSWER

    if (buttonClicked == testQuestions[currentQuestion].answer) {
      finalScore++
      currentQuestion++;
      right++;
      rightAnswer.textContent = " Right answers: " + right;
      theWholeTest();
      } else {
        finalScore--
        currentQuestion++;
        timeLeft -= 5;
        wrong++;
        wrongAnswer.textContent = " Wrong answers: " + wrong;
        theWholeTest();

      }
    } 
  }
);
//NOW I JUST NEED TO CONTROL IF THE USER FINISHES BEFORE TIME AND DISPLAY THE OVER SCREEN WITH THE FINAL RESULE

//THEN SAVE THE LAST HIGHEST SCORE THE THE  LOCALLIBRARY
