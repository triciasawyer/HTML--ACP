'use strict';
console.log('proof of life.');


//get some input from our user
// prompt is a thing we call a method 'way to do something'
//expressions end with semicolon
//when we use the key word let, javascript is going to create a space in memory to store the response.
//      = assignment operator
// the prompt is getting assigned to the userName variable.


function teamName(){
  let baseBallTeam = prompt('Do you like Cubs or Cardinals?');

  console.log('baseball team', baseBallTeam);
  let team = baseBallTeam.toLowerCase();
  
  
  let greeting;
  
  if (team === 'cardinals') {
      greeting = 'Right on!';
  } else if (team === 'cubs') {
      greeting = 'What a tradegy';
  }
}

teamName();


//function getTime (){}
// use function 
//
//return greeting

//process that information given to us from the user
//if else conditional and 
// if(condition is true or false){
//     do this
// } else if(condition is true or false){
//     do this
// } else if(condition is true or false){
//   do this

//conditional logic



//let confirmMessage = confirm("Do you want to continue?");
//console.log("confirm message: ", confirmMessage);
