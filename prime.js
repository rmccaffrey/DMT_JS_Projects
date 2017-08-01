
//testing code to find all prime numbers in a range
var number = 7;
var dividedBy = number - 1;
var listOfPrimes = [];

while (dividedBy > 1) {
if (number % dividedBy != 0) {
    dividedBy--;
    continue;
}else {
    listOfPrimes.push(number);
 }
}
/*
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
