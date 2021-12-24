var introduction = document.getElementById("Introduction"); //获取父级标签的ID
function keep_hover() {
    introduction.style.backgroundColor= "#8B8B8B";
    introduction.style.color= "#E8E7E3";
    introduction.style.boxShadow= "0 0 8px #8B8B8B"
    introduction.style.transitionDuration= "0.4s"
}
function keep_hover_leave() {
    introduction.style.backgroundColor= "#E8E7E3";
    introduction.style.color= "#4E4D4C";
    introduction.style.boxShadow= ""
    introduction.style.transitionDuration= "0.4s"
}