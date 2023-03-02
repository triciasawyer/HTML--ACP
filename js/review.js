'use strict';

console.log('connected');



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