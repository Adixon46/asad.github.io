function alert1(){

alert("Hey my script is running")

}

var username = prompt("What would you like to be called");
console.log(username);



var mood = prompt("And how are you feeling today");
console.log(mood);

var currentDate = new Date();
    
var date = (currentDate.getMonth() +1 ) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();

var currentTime = new Date();

var time = currentTime.getHours() + ":" + currentTime.getUTCMinutes()






function math(){

var Num1 = prompt("First number");
var Num2 = prompt("Second number");

var result = Num1 + Num2;
return result;

}
