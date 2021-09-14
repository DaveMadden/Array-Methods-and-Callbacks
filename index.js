/* eslint-disable no-debugger */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
console.log("WORKING BEFORE REQUIRE");

const { fifaData } = require('./fifa.js') //this breaks on the web  - only works with node? ASK ABOUT THIS

console.log("WORKING AFTER REQUIRE");
// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const all2014 = fifaData.filter(function(item){
    return (item.Year === 2014); //&& (item.Stage == 'Final'));
}, 0);
// console.log("this one!!!! - " + all2014.City);

//(a) Home Team name for 2014 world cup final

//TWO WAYS TO DO THIS

//method a: 
const finalHomeName = all2014.filter(function(item){
    if (item.Stage === 'Final'){
        console.log(`2014 Final Home Team: ` + item['Home Team Name']);
        return item;
    }
})
//method b:
const theFinal = all2014.filter(function(item){
    return item.Stage === 'Final';
})
console.log(`2014 Final Home Team: ` + theFinal[0]["Home Team Name"]);

const finalGame = theFinal[0];
//console.log(finalGame);

//console.log(theFinal);
// console.log("NO WAY: " + finalHomeName[0].city);


//(b) Away Team name for 2014 world cup final
console.log(`2014 Final Away Team: ` + finalGame["Away Team Name"]);
//(c) Home Team goals for 2014 world cup final
console.log(`2014 Final Home Goals: ${finalGame['Home Team Goals']}`);
//(d) Away Team goals for 2014 world cup final
console.log(`Final Away Goals: ${finalGame['Away Team Goals']}`);
//(e) Winner of 2014 world cup final */
if (finalGame['Away Team Goals'] > finalGame['Home Team Goals']){
    console.log(`winner: ${finalGame['Away Team Name']}`);
}
else if (finalGame['Away Team Goals'] < finalGame['Home Team Goals']){
    console.log(`winner: ${finalGame['Home Team Name']}`);
}
else {
    console.log(`it was a tie`);
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(fifaData) {
   const madeIt = fifaData.filter(x => x.Stage === 'Final');
//    console.log(madeIt);
   return madeIt;
}
// console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, getFinalsCB) {
    return getFinalsCB(arr).map(x => x.Year);
}

console.log(getYears(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(arr, getFinalsCB) {
    // debugger;
    function isWinner(x){
        if ((x['Home Team Goals']) > (x['Away Team Goals'])){
            return x['Home Team Name'];
        }
        else if (x['Home Team Goals'] < x['Away Team Goals']){
            return x['Away Team Name'];
        }
        else{
            let tieBreaker = x['Win conditions'];
            // console.log(tieBreaker);
            tieBreaker = tieBreaker.substr(0, tieBreaker.indexOf(" "));
            // console.log(tieBreaker);
            return tieBreaker; //this is the problem. can't be undefined, can't be "tied" 94, 06
        }
    }
    const winners = getFinalsCB(arr).map(isWinner);
    // console.log(winners);
    return winners;
}
// console.log(getWinners(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(arr, getYearsCB, getWinnersCB) {
    /* code here */
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(/* code here */) {
   /* code here */
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
