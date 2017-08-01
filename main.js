
//initial test of the connection between main.js and index.html
var userName = prompt("What's your name?");

var gotName = confirm("Your name is " + userName + "?");

alert("Howdy, " + userName);

console.log(gotName);

//testing 2D arrays

var roomNum = [150, 151, 152];
var dayOfWeek = [roomNum, roomNum, roomNum, roomNum, roomNum];
document.write (dayOfWeek[2][1]  + "<br>");

//check what happens when I change one of the indecies in the top level array

dayOfWeek[2][1] = "Building 9 Studio";
document.write (dayOfWeek[2][1]  + "<br>");
document.write (dayOfWeek[3][1]  + "<br>");

//result: changing a value in the embedded array changes the value for each instance of the embedded array

/*test of using objects to build a room scheduler. Possible objects and 
properties include ROOM{number, capacity, classAssigned}, TEACHER{prepped
classes, load, availability}, CLASS{cap, duration, #preReqs, track, timeOfDay}.
Possible code might include:
if room.classAssigned is true, check class.duration to see next free time
if class.timeOfDay is "evening", check teacher.availability
if class.cap is > room.capacity, change class.cap to = room.capacity*/