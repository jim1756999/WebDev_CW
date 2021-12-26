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


function checkInfo() {
    var firstname = document.forms["application"]["firstname"].value;
    var phone = document.forms["application"]["phone"].value;
    var sex = document.forms["application"]["sex"].value;
    var date = document.forms["application"]["date"].value;
    var lastname = document.forms["application"]["lastname"].value;
    var email = document.forms["application"]["email"].value;
    var address = document.forms["application"]["address"].value;
    var age = document.forms["application"]["age"].value;
    var event = document.forms["application"]["event"].value;
    alert(
        "Firstname: " + firstname + "\n" +
        "Lastname: " + lastname + "\n" +
        "Sex: " + sex + "\n" +
        "Age: " + age + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Address: " + address + "\n" +
        "Date: " + date + "\n"
    )
}

function startTime() {
    var today = new Date();
    var { m, d, min, s, y, h } = getTime();
    CHKZERO();
    var day = Day();
    document.getElementById('Date').innerHTML = y + "-" + m + "-" + d + " " + h + ":" + min + ":" + s + "   " + day;
    setTimeout('startTime()', 1000);

    function CHKZERO() {
        m = chkzero(m);
        d = chkzero(d);
        min = chkzero(min);
        s = chkzero(s);
    }

    function getTime() {
        var y = today.getFullYear();
        var m = today.getMonth() + 1;
        var d = today.getDate();
        var h = today.getHours();
        var min = today.getMinutes();
        var s = today.getSeconds();
        return { m, d, min, s, y, h };
    }

    function Day() {
        var day;
        if (today.getDay() == 0)
            day = "Sunday ";
        if (today.getDay() == 1)
            day = "Monday ";
        if (today.getDay() == 2)
            day = "Tuesday ";
        if (today.getDay() == 3)
            day = "Wednesday ";
        if (today.getDay() == 4)
            day = "Thursday ";
        if (today.getDay() == 5)
            day = "Friday ";
        if (today.getDay() == 6)
            day = "Saturday ";
        return day;
    }

    function chkzero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
}
