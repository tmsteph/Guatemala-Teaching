// @TODO: Complete the following sections to create a lottery number generator.

console.log("Math.random()", Math.random());
// Create an empty array to add the numbers.
var powerBallNumbers = []


// Create a for loop to generate 5 random numbers between 1 and 59.
while (powerBallNumbers.length < 6 ){
    var r = Math.floor(Math.random() * 59) + 1; 
    if(powerBallNumbers.indexOf(r) === -1) powerBallNumbers.push(r);
}

//  Check your numbers.
console.log(powerBallNumbers);

//Bonus: Add a 6th number to the array between 1 and 35.


//  Check your numbers.
console.log(powerBallNumbers);


//  Additional bonus.
// How would you generate the random numbers using python?
