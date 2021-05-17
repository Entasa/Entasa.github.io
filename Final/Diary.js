console.log("here!")
var theUser = document.getElementById("userName").textContent;
var input = document.getElementById("userinput").value;
var Font = new FontFace("Handlee", "url(Handlee-Regular.ttf)",{});
document.fonts.add(Font);

var newText;
function Name() {
    console.log("here now");
    newText = userinput.value + theUser;
   document.querySelector("#userName").innerHTML = newText;
    // var newText = theUser + input;
   

};
function Entry() {
    console.log("here next!");
    var newDiv = document.createElement('div');
    newDiv.setAttribute("style","margin-top:1px; justify-content:center;width: 90%; border-radius:25px; background-color:#D3D8DA; padding: 5px; font-family:Handlee; color: #E2566D; font-size: 20px;");
    
    var textnode = document.createTextNode(DEntry.value);
    newDiv.appendChild(textnode)
    document.getElementById("display").appendChild(newDiv);

};
