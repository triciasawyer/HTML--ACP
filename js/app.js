"use strict";
console.log("proof of life!");

function teamName() {
  let baseBallTeam = prompt("Do you like Cubs or Cardinals?");

  let confirmMessage = confirm("Do you want to continue?");
  console.log("confirm message: ", confirmMessage);

  console.log("baseball team", baseBallTeam);
  let team = baseBallTeam.toLowerCase();

  let greeting;
  if (team === "cardinals") {
    greeting = "Right on!";
  } else if (team === "cubs") {
    greeting = "What a tradegy";
  }
  return greeting;
}

//this is getting our element from the index.html
let imageElement = document.getElementById("imageSection");

let userInput = prompt("How many seasons are there in Iowa?");
// console.log('Our user input is of type: ',typeof(userInput));

//parseInt will make a string a NUMBER
let userInputParsed = parseInt(userInput);
// console.log('user input parsed to int: ', userInputParsed)

if (!isNaN(userInputParsed)) {
  console.log("that is a valid number");
} else {
  userInputParsed = parseInt(prompt("How many seasons are there in Iowa?"));
}

console.log(typeof userInput);

//declare i      conditional       i = i + 1
for (var i = 0; i < userInputParsed; i++) {
  //this going to create and li  <li></li>
  let listImage = document.createElement("li");
  //creating another image <img >
  let image = document.createElement("img");

  //<img src="images/states.png"  alt=" " >
  image.setAttribute("src", "images/states.png");
  image.setAttribute("alt", "pic of Iowa");
  //give the image to the list

  //full image

  //<li><img></li>
  listImage.appendChild(image);

  console.log("here is the tag and image", listImage);
  imageElement.appendChild(listImage);
}
