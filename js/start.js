var level_form=document.getElementsByClassName("level_form");
var login_form = document.getElementById("login");
var char_form = document.getElementsByClassName("Char_form");
var player_name = document.getElementById("player_name");
var play_button = document.getElementById("playButton");
var level_button = document.getElementById("level_button");
var char_button = document.getElementById("character_button");
var level_button_hide = document.getElementById("hide_level_button");
var char_button_hide = document.getElementById("hide_char_form");
var level_img = document.getElementsByClassName("img_level");
var char_img = document.getElementsByClassName("cahr_img");
var help_form = document.getElementsByClassName("help_form");
var help_button_hide = document.getElementById("hide_help_form");
var help_button = document.getElementById("help");

var Level=1;
var character=1;



function show_level(){
    level_form[0].style.display = "block";
    login_form.style.display = "none";
}

function hide_level(){
    level_form[0].style.display = "none";
    login_form.style.display = "block";
}
 function show_char(){
    char_form[0].style.display = "block";
    login_form.style.display = "none";
 }

 function Hide_Char(){
     char_form[0].style.display = "none";
     login_form.style.display = "block";
 }

 
 function play_game(event){
    if(player_name.value.length < 3){
        alert("Your name must be at least 3 character");
    }else{
            window.location.href = "gameLevel.html?player="+player_name.value+"&level="+Level+"&character="+character;
    }
 }

function show_help(){
    help_form[0].style.display = "block";
    login_form.style.display = "none";
}

function hide_help(){
    help_form[0].style.display = "none";
    login_form.style.display = "block";
}

 function level_check(event){
     Level = event.target.name;
     hide_level();
 }
 function char_check(event){
     character = event.target.name;
     Hide_Char();
 }


 play_button.addEventListener('click' , play_game);
 level_button.addEventListener('click' , show_level);
 level_button_hide.addEventListener('click' , hide_level);
 char_button.addEventListener('click' , show_char);
 char_button_hide.addEventListener('click' , Hide_Char);
 help_button_hide.addEventListener('click' , hide_help);
 help_button.addEventListener('click' , show_help);

 for(var i =0; i < level_img.length ; i++){
     level_img[i].addEventListener('click' , level_check);
 }
 for(var i =0; i <char_img.length; i++){
     char_img[i].addEventListener('click' , char_check);
 }

 localStorage["player"]=player_name.value;
 
 