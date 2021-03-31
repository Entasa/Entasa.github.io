console.log("the message is here!")

var button = document.getElementById("myButton");
var buzzer = new Audio()

buzzer.src = "https://static.wixstatic.com/mp3/868335_2d40d28420724ed0beac8d9002a4c1a5.mp3"

button.addEventListener('animationEnd',function(){
    this.style.animationName = '';},false);

document.getElementById('myButton').onclick = function(){
    console.log("clicked!");
    buzzer.play();
    button.style.animationName = "shake";

};

theBody = document.querySelector("body")
