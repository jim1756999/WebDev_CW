// Hold selected when mouse on submenu
var introduction = document.getElementById("Introduction");
function keep_hover() {
    introduction.style.backgroundColor = "#8B8B8B";
    introduction.style.color = "#E8E7E3";
    introduction.style.boxShadow = "0 0 8px #8B8B8B"
    introduction.style.transitionDuration = "0.4s"
}
function keep_hover_leave() {
    introduction.style.backgroundColor = "#E8E7E3";
    introduction.style.color = "#4E4D4C";
    introduction.style.boxShadow = ""
    introduction.style.transitionDuration = "0.4s"
}

// TODO unable to get value

function submit() {
    var v = document.forms["application"]["address"].value;
    
}