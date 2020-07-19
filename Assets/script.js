
//* we need to have an array of html
//we need to have variables that keep track of which position we are in the array of questions and array of html,they should be semantic and simultainous.
// * we need a main content and presentation of the page. and for this one to be raplaced by my array of html when the button start is clicked. the number in our array of questions should have an interval after a several ammount of seconds.
//*  THIS ARE MY ELEMENTS

//here we create a variable equals to the body of the document so we can use it to instert our html
var bodyControl= document.body;
bodyControl.setAttribute("style","background-color:rgb(146, 148, 149);")
//main container handler
var containerHandler = document.createElement("main");
//starting header 
var mainHeader = document.createElement("h2");
mainHeader.textContent = "Ready for the big test ??";
mainHeader.setAttribute("style", "font-size:30px;")
//first paragraph with instructions for the game
var paragraph1 = document.createElement("p");
paragraph1.textContent = 'Whenever you click on "Get started", the quiz will start.';
paragraph1.setAttribute("style", "font-size:20px; margin-top:20px; padding:15px; padding-bottom:0px;");
// second paragraph with instructions for the game.
var paragraph2 = document.createElement("p");
paragraph2.textContent = 'You have 1 minute and a half to answer the questions, if you get the answer wrong your score will be substracted by -1 and time will be substracted from your test, get it right and you earn a pont followed by a tap on the back';
paragraph2.setAttribute("style", "font-size:20px; padding:15px; padding-top:0px;")
//start button
var startButton = document.createElement("button");
startButton.setAttribute("type","button");
startButton.textContent="Get start";
//container function
function container(event){
    event = containerHandler.setAttribute("style", "border:solid 1px white; height:400px; width:400px;margin:30%; background-color:white; text-align:center; font-family: 'Montserrat', sans-serif;");
}
//this diplays the container on the window
container();
bodyControl.appendChild(containerHandler);
containerHandler.appendChild(mainHeader);
mainHeader.appendChild(paragraph1);
mainHeader.appendChild(paragraph2);
mainHeader.appendChild(startButton);
 //* this is where i am going to store all of the array of questions in the array of question.
var myQuestions = [
    {
        question:"Does the image tag on HTML need a closing tag?",
        answer:["yes","no"],
        correctAnwer:"no"
    },
    {
        question: "What color is Don Juan's white horse?",
        answer: ["black", "white","brown"],
        correctAnwer: "white"
    },
    {
        question: "What are the three main languages for web development?",
        answer: ["'javascript','html','css'", "'csharp','bootsrap','ruby'"],
        correctAnwer: "'javascript','html','css'"
    }
];




