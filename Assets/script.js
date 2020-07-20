//* we need to have an array of html
//we need to have variables that keep track of which position we are in the array of questions and array of html,they should be semantic and simultainous.
// * we need a main content and presentation of the page. and for this one to be raplaced by my array of html when the button start is clicked. the number in our array of questions should have an interval after a several ammount of seconds.
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
//these are the variables for the second html
var questionHeader = document.createElement("h2");
var firstQuestion = document.createElement("p");
var secondQestion = document.createElement("p");
var thirdQuestion = document.createElement("p");
var yesButton = document.createElement("button");
var noButton = document.createElement("button");
//Text for all of the elements that need it
mainHeader.textContent = "Ready for the big test ??";
paragraph1.textContent =
  'Whenever you click on "Get started", the quiz will start.';
paragraph2.textContent =
  "You have 45 seconds to answer the questions, there is a 15 second limit per question, if you get the answer wrong your score will be substracted by -1, and the time will be substracted by 5 seconds, get it right and you earn a point followed by a tap on the back";
startButton.textContent = "Get start";
questionHeader.textContent = "Good Luck!";
secondsLeft.textContent = "Seconds left: 45";
wrongAnswer.textContent = "Wrong answer's =0 ";
rightAnswer.textContent = "Right answer's =0 ";
firstQuestion.textContent = "Does the image tag on HTML need a closing tag?";
secondQestion.textContent =
  "What do we call the value that goes inside of the parethesis of a function?";
thirdQuestion.textContent = "Is JavaScript an  API?"
yesButton.textContent = "Yes!!";
noButton.textContent = "No!!";
//Styles and attributes of my elements
bodyControl.setAttribute("style", "background-color:rgb(146, 148, 149);");
mainHeader.setAttribute("style", "font-size:30px; padding-top:5%;");
paragraph1.setAttribute(
  "style",
  "font-size:20px; margin-top:20px; padding:15px; padding-bottom:0px;"
);
paragraph2.setAttribute(
  "style",
  "font-size:20px; padding:15px; padding-top:0px;"
);
startButton.setAttribute("style", "background-color:rgb(146, 148, 149)");
questionHeader.setAttribute("style", "font-size:30px; padding-top:5%;");
secondsLeft.setAttribute("style", "background-color:white; margin:2%");
wrongAnswer.setAttribute("style", "background-color:white; margin:2% ");
rightAnswer.setAttribute("style", "background-color:white; margin:2% ");
yesButton.setAttribute("style", "margin:2%");
noButton.setAttribute("style", "margin:2%");
//function's This is where my container lives
var container = function (event) {
  event = containerHandler.setAttribute(
    "style",
    "border:solid 1px white; display;inline-block;min-height:200px;margin:10%; background-color:white; text-align:center; font-family: 'Montserrat', sans-serif;"
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
// the biggining
var timeSpent = 45;
//this is my onclick
startButton.addEventListener("click", function (event) {
  var mainTimeInterval = setInterval(function () {
    secondsLeft.textContent = "Seconds left: " + timeSpent;
    timeSpent--;
    if (timeSpent === -1) {
      clearInterval(mainTimeInterval);
      timeSpent = 0;
      containerHandler.innerText = "";
      containerHandler.appendChild(questionHeader);
    }
    if (timeSpent === 29) {
      containerHandler.innerText = "";
      containerHandler.appendChild(questionHeader);
      containerHandler.appendChild(secondQestion);
      yesButton.textContent = "Argument?";
      noButton.textContent = "Name of function?";
      containerHandler.appendChild(yesButton);
      containerHandler.appendChild(noButton);
    }
    if (timeSpent === 14) {
      containerHandler.innerText = "";
      containerHandler.appendChild(questionHeader);
      containerHandler.appendChild(thirdQuestion);
      yesButton.textContent = "Yes!!";
      noButton.textContent = "No!!";
      containerHandler.appendChild(yesButton);
      containerHandler.appendChild(noButton);
    }
  }, 1000);

  event = containerHandler.innerText = "";
  containerHandler.appendChild(questionHeader);
  containerHandler.appendChild(firstQuestion);
  containerHandler.appendChild(yesButton);
  containerHandler.appendChild(noButton);
});
