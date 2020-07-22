// WE NEED TO SIMPLIFY
//*  THIS ARE MY ELEMENTS
//Here we create a variable's
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


//Text for all of the elements that need it
mainHeader.textContent = "Ready for the big test ??";
paragraph1.textContent =
  'Whenever you click on "Get started", the quiz will start.';
paragraph2.textContent =
  "You have 45 seconds to answer the questions, there is a 15 second limit per question, if you get the answer wrong your score will be substracted by -1, and the time will be substracted by 5 seconds, get it right and you earn a point followed by a tap on the back";
startButton.textContent = "Get start";



//Styles and attributes of my elements
bodyControl.setAttribute("style", "background-image: url('https://images.unsplash.com/photo-1595173882484-028e1a206bea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');width: 100%;height: 100vh;position: fixed;-webkit-background-size:cover;background-size: cover;background-position: center center;margin: 0%;");

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
secondsLeft.setAttribute("style", "background-color:white; margin:2%; top:2%;font-size;15px; ");
wrongAnswer.setAttribute("style", "background-color:white; margin:2%; top:2%;font-size;15px; ");
rightAnswer.setAttribute("style", "background-color:white; margin:2%; top:2%;font-size;15px; ");
yesButton.setAttribute("style", "margin:2%");
noButton.setAttribute("style", "margin:2%");
yesButton.setAttribute("type","button");
noButton.setAttribute("type", "button");
startButton.id = "startButton";
//function's This is where my container lives
var container = function (event) {
  event = containerHandler.setAttribute(
    "style",
    "border:solid 1px white; display;inline-block;min-height:200px;margin:10%; background-color:white; text-align:center; font-family: 'Montserrat', sans-serif; "
  );
};
function buttons() {
  yesButton;
  noButton;
}
//this diplays the container on the window
container();
bodyControl.appendChild(wrongAnswer);
bodyControl.appendChild(rightAnswer);
bodyControl.appendChild(secondsLeft);
bodyControl.appendChild(containerHandler);
containerHandler.appendChild(mainHeader);
mainHeader.appendChild(paragraph1);
mainHeader.appendChild(paragraph2);
mainHeader.appendChild(startButton);
//this is my array of questions
var testQuestions = [
  {
    testQuestions: "Does the image tag on HTML need a closing tag?",
    options: ["Yes!!", "No!!"],
    answer: 0
  },
  {
    testQuestions: "What do we call the value that goes inside of the parethesis of a function?",
    options: ["Name of function", "Argument"],
    answer: 1
  },
  {
    testQuestions: "Is JavaScript an  API",
    options: ["Yes!!", "No!!"],
    answer: 1
  }

];

//loop that gives us our different question an variables

// these are the varaibles that keep control of the test
var timeLeft = 45;
var wrong = -1;
var right = 0;
var finalScore = right-wrong;
var currentQuestion = 0;
var interval;
//this is my onclick
startButton.addEventListener("click", function (event) {
  //this is my first container  
  var questionHtml = '<p>' + testQuestions[currentQuestion].testQuestions + '</p>';
  questionHtml += '<button>' + testQuestions[currentQuestion].options[0] + '</button>';
  questionHtml += '<button>' + testQuestions[currentQuestion].options[1] + '</button>';
  //this is the container for the test over screen
  var testOver = '<h1>'+"Test is over"+'</h1>';
  testOver += '<h2>'+"this is your highest score "+""+'</h2>'

  event = containerHandler.innerText = "";
  containerHandler.appendChild(mainHeader);
  containerHandler.children[0].innerHTML= questionHtml;

  containerHandler.addEventListener("click", function(event){
    if(event.target.matches("button")){
      var buttonClicked = event.target.innerText;
      
      if(buttonClicked=="Yes!!"){
        currentQuestion++
        right++
        rightAnswer.textContent = " Right answers: " + right;
        questionHtml.textContent = testQuestions[currentQuestion];
      }else{
        currentQuestion++
        timeLeft -= 5;
        wrong++
        wrongAnswer.textContent = " Wrong answers: " + wrong;
        questionHtml.textContent = testQuestions[currentQuestion];
      }
      
    }
  })
  //this is my interval for the how long the test should last
  var mainTimeInterval = setInterval(function () {
    if(timeLeft>=0){
       secondsLeft.textContent = "  Seconds left: " + timeLeft+" ";
    timeLeft--;
    }else{
      containerHandler.children[0].innerHTML = testOver;
    }
  }, 1000);


});
