/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingage = 18;
if (votingage > 18){
    console.log('You can vote')
} else {
    console.log('You shall not vote')
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let adult = 'tall';

if(adult === 'short'){
    console.log('ok')
}else if(adult === 'tall'){
    console.log('mkay')
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number(new Date("1999"));  




//Task d: Write a function to multiply a*b 
function multiply(a, b){
    return a * b;
}
console.log(multiply(3, 3));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function multiply(a, b){
    return a * b;
}

console.log(multiply(1, 7));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
let adultdog = 'adult';

if(adultdog === '<5lbs'){
    console.log('5% of bw')
}else if(adultdog === '6-10lbs'){
    console.log('4% of bw')
}else if(adultdog === '11-15lbs'){
    console.log('3% of their bw')
}else (adultdog === '<15lbs')
    console.log('2% of bw')

let puppy = 'pup';

if(puppy === '2-4months'){
    console.log('10% of bw')
}else if(puppy === '4-7months'){
    console.log('5% of their body weight')
}else (puppy === '7-12months')
    console.log('4% of bw')




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var userChoice = prompt ("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice <=0.33) {
    "rock";
} else if (computerChoice <=0.66) {
    "paper";
} else {
    "scissors";
}
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function LengthConverter(valNum) {
    document.getElementById("outputMiles").innerHTML=valNum*0.62137;
  }



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function LengthConverter(valNum) {
    document.getElementById("outputcm").innerHTML=valNum/0.032808;
  }



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
let i;

for (i = 0; i < annoyingsong.length; i++) {
    text +=  bottlesofsoda [i] + "<br>";
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
var userChoice = prompt ("Input your test percentage");

var computerChoice = Math.random();
console.log(computerChoice);


if (computerChoice >=90) {
    "A";
} else if (computerChoice >=80) {
    "B";
} else if (computerChoice >=70) {
    "C";
} else if (compuerChoice >=60) {
    "D";
} else (computerChoice >=50) 
    "F";
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





