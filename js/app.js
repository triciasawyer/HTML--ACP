'use strict';
console.log('proof of life!');

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






