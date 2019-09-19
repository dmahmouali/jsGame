var level_window=document.getElementsByClassName("level_form");
var login_window = document.getElementById("login");
function show_level(){
    level_window[0].style.display = "block";
    login_window[0].style.display = "none";
}

function hide_level(){
    level_window[0].style.display = "none";
    level_window[0].style.display = "block";
}
