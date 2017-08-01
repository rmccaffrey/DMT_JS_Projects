
//testing code to find all prime numbers in a range
var number = 7;
var dividedBy = number - 1;
var listOfPrimes = [];


/**
 * this needs a number as input
 * followed by a loop that divides the number by every number
 * between it and the number 1. If any of those divisions has no 
 * remainder, the number isn't prime and we should 'continue' to 
 * the next number (input--). If every number smaller
 * than the input leaves a remainder, the input number should be
 * pushed to a 'prime numbers' array and we should continue to
 * the next number (input--)
*/

/* second attempt at cycling through both number and its divider
while (dividedBy > 1) {
if (number % dividedBy != 0) {
    dividedBy--;
    continue;
}else {
    listOfPrimes.push(number);
 }
}
*/

/* first attempt at cycling through both the numbers and their dividers
for (var i = number; i > 1; i--) {
for (var j = dividedBy; j > 1; j--) {
    if (number % dividedBy !== 0) {
        continue;
    } else {
        listOfPrimes.push(number)
    }
    
    } 
}
*/

alert (listOfPrimes);
