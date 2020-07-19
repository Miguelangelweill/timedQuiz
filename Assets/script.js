
//this are the elements extracted from my html.
//this is my header
var header = document.getElementById("firstHeader");
//this is my first paragraph
var paragraph1 = document.getElementById("firstParagrap");
//this is my second paragraph
var paragraph2 = document.getElementById("secondParagraph");
//the container for the header of my page
var headerContainer = document.getElementById("headerContainer");
//style to the window background
window.document.body.style.background =" rgb(223, 223, 223)"

//here I am creating a function that gives a margin to my container of 10%, and aligning everything to the middle 
function myContainer() {
headerContainer.style.margin="10%";
headerContainer.style.display="inline-block";
headerContainer.style.textAlign="center";
headerContainer.style.fontFamily ="'Open Sans', sans-serif";
headerContainer.style.background="white";
headerContainer.style.padding="10px";
}
//here i am running my container function.
myContainer();
firstHeader.style.marginBottom="2%";
// this is my button to get started
var getStarted = document.getElementById("getStartedBtn");

//here is my event listener for my srarting button
getStarted.addEventListener("click",function(){ 
   getStarted.style.display="none";

   headerContainer.style.display="none";

   var secondHeader= document.createElement("h1");

   secondHeader.innerHTML="Good luck"
   document.body.appendChild(secondHeader);
  
   secondHeader.style.fontFamily = "'Open Sans', sans-serif";

    var myFirstInput = document.createElement("input");
    myFirstInput.setAttribute("type","radio");

    myFirstInput.value="text"
    document.body.appendChild(myFirstInput);
    
    var mySecondInput = document.createElement("input");
    mySecondInput.setAttribute("type", "radio");

})

 // this is where i am going to store all of he questions in the array of question.
var myQuestions
