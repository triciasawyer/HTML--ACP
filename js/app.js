'use strict';
console.log('proof of life!');


//get some input from our user
// prompt is a thing we call a method 'way to do something'
//expressions end with semicolon
//when we use the key word let, javascript is going to create a space in memory to store the response.
//      = assignment operator
// the prompt is getting assigned to the userName variable.


// function teamName() {
//   let baseBallTeam = prompt('Do you like Cubs or Cardinals?');

//   let confirmMessage = confirm('Do you want to continue?');
//   console.log('confirm message: ', confirmMessage);

//   console.log('baseball team', baseBallTeam);
//   let team = baseBallTeam.toLowerCase();


//   let greeting;
//   if (team === 'cardinals') {
//     greeting = 'Right on!';
//   } else if (team === 'cubs') {
//     greeting = 'What a tradegy';
//   }
//   return greeting;
// }


//while loop
//let count = 0;
// while(count <=20) {
// console.log (count);
//  count = count +5; }

// or count += 5;

// let stop = '1';
//  while (true){
//let input = prompt ('Guess a number. Type 1 to exit')}




//lab 8

//function userInputParsed() {}

let imageElement = document.getElementById('imageSection');

let userInput = prompt('How many seasons are there in Iowa?');
console.log('Our user input is of type: ',typeof(userInput));

let userInputParsed = parseInt(userInput);
console.log('user input parsed to int: ', userInputParsed)

if (!isNaN(userInputParsed)) {
  console.log('that is a valid number');
} else {
  userInputParsed = parseInt(prompt('How many seasons are there in Iowa?'));
}
console.table(typeof(userInput));

for (var i = 0; i < userInputParsed; i++) {
  let listImage = document.createElement('li');
  let image = document.createElement('img');
  image.setAttribute('src', 'images/states.png');
  image.setAttribute('alt', 'pic of Iowa');
  //give the image to the list
  listImage.appendChild(image);
  console.log(listImage);
  imageElement.appendChild(listImage);
}








//function getTime (){}
// use function 

//process that information given to us from the user
//if else conditional and 
// if(condition is true or false){
//     do this
// } else if(condition is true or false){
//     do this
// } else if(condition is true or false){
//   do this

//conditional logic
