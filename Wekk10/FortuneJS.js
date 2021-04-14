var answers = ["Yes", "No", "Certainly", "Maybe", "Of Course", "Never", "Definitely","Unsure"]
var fortune = ["Love awaits you this month. Accept it with open arms and let it transform you.","You need to take control. Hold tight to what is yours and don't let yourself be swayed by some temporary obsession.",
"Persistence can change failure into extraordinary achievement.", " Take charge of your narrative. Hold true to your words. Remember that you know yourself best!","Let nature take its course, but understand that you are the guiding hand and wherever this water goes...it takes you." ]

var tell_fortune = function() {
    var response = answers[Math.floor(Math.random()* answers.length)];

    document.getElementById('response').innerHTML = response;
}

$( "#Fbutton" ).dblclick(function() {
    var response = fortune[Math.floor(Math.random()* fortune.length)];
    document.getElementById('response').innerHTML = response

});
 

