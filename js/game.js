var player = document.getElementsByClassName("player")[0];
document.onkeydown = move_fn;

var arrEnemys = [];
var arrBolat = [];
var score = 0;
var health = 2;
var final_death = false;
var enemy_spawn_time_1 ;
var enemy_spawn_time_2 ;

var urlParams = new URLSearchParams(window.location.search)
var playerName = urlParams.get("player")
var level = urlParams.get("level")
var character = urlParams.get("character")

document.getElementById('name').innerText = playerName ;
var image_level = document.getElementsByClassName('bg')[0];
if(level == 1)
{
    image_level.setAttribute("style","background: #000000 url(images/level01.png); background-size: cover; background-position: 0 0;");
    enemy_spawn_time_1 = 90;
    enemy_spawn_time_2 = 60;

}
else if(level == 2)
{
    image_level.setAttribute("style","background: #000000 url(images/level02.png); background-size: cover; background-position: 0 0; animation: animate 30s linear forwards;");
    enemy_spawn_time_1 = 70;
    enemy_spawn_time_2 = 50;

}
else if (level == 3)
{
    image_level.setAttribute("style","background: #000000 url(images/level03.png); background-size: cover; background-position: 0 0; animation: animate 20s linear forwards;");
    enemy_spawn_time_1 = 10;
    enemy_spawn_time_2 = 10;

}


if(character == 1)
{
    player.src = "images/character.gif";
}
else if(character == 2)
{
    player.src = "images/narto.gif";
}
else if(character == 3)
{
    player.src = "images/mario.gif";
}



var chosen_player = player.src;
console.log(chosen_player) ;
function getCssProperty(player, property) {

    return window.getComputedStyle(player, null).getPropertyValue(property);
}

let enemy1_interval;
let enemy2_interval;
enemy_spawn();

let enemy_spawn_1 = setInterval(enemy_spawn, 3000);
let enemy_spawn_2 = setInterval(enemy_spawn2, 2000);

function enemy_spawn() {

    let rundomTime = Math.random() * enemy_spawn_time_1;
    var enemy = document.createElement('img');
    enemy.src = 'images/anime03.png';
    document.getElementsByClassName('bg')[0].appendChild(enemy);
    enemy.style.position = "absolute";
    enemy.style.left = (window.innerWidth - 200) + "px";
    enemy.style.bottom = "10px";
    enemy.style.width = "150px";
    enemy.style.height = "100px";
    enemy.className = "enemyElement";
    let _return = getCssProperty(enemy, "left");
    let enemy_left = parseInt(_return.slice(0, _return.length - 2));
    enemy1_interval = setInterval(
        function() {
            enemy_left -= 5;
            enemy.style.left = enemy_left + "px";
            rundomTime = Math.random() * 80;
            /////////// collision btn player and enemy
            let _return = getCssProperty(player, "left");
            let elem_left = parseInt(_return);
            //console.log(elem_left);
            if (parseInt(elem_left) > parseInt(enemy_left) &&
                parseInt(enemy_left) + 100 > parseInt(elem_left)
            ) {
                //console.log(getCssProperty(player, "bottom"));
                //console.log(parseInt(enemy.style.height));
                if (parseInt(getCssProperty(player, "bottom")) < 100) {
                    ///// health
                    health = 1;
                    console.log(health);

                    //console.log("collosion");
                    if (!final_death) {
                        player.src = "images/anime05.png";
                        document.getElementById('health').innerText = 1;
                        setTimeout(function() {
                            player.src = chosen_player;
                            final_death = true;
                        }, 1000)
                    }
                    ////// 
                    else if (final_death) {
                        document.getElementById('health').innerText = 0;
                        var my_modal = document.getElementById('myModal');
                        var modal_body = document.getElementById('lose');
                        player.src = "images/anime02.png";
                        modal_body.innerHTML = "<p>Game Over</p>" + playerName;
                        my_modal.style.display = "block";
                        health = 0;
                    }
                }
            }
            ///////////////
        }, rundomTime
    );

}

function enemy_spawn2() {

    let rundomTime = Math.random() * enemy_spawn_time_2;
    var enemy = document.createElement('img');
    enemy.src = 'images/deep.gif';
    document.getElementsByClassName('bg')[0].appendChild(enemy);
    enemy.style.position = "absolute";
    enemy.style.left = (window.innerWidth - 250) + "px";
    enemy.style.bottom = "0%";
    enemy.style.width = "220px";
    enemy.style.height = "180px";
    enemy.className = "enemyElement";
    let _return = getCssProperty(enemy, "left");
    let enemy_left = parseInt(_return.slice(0, _return.length - 2));
    enemy2_interval = setInterval(
        function() {
            enemy_left -= 5;
            enemy.style.left = enemy_left + "px";
            rundomTime = Math.random() * 80;
            /////////// collision btn player and enemy
            let _return = getCssProperty(player, "left");
            let elem_left = parseInt(_return);
            //console.log(elem_left);
            if (parseInt(elem_left) > parseInt(enemy_left) &&
                parseInt(enemy_left) + 100 > parseInt(elem_left)
            ) {
                //console.log(getCssProperty(player, "bottom"));
                //console.log(parseInt(enemy.style.height));
                if (parseInt(getCssProperty(player, "bottom")) < 100) {
                    ///// health
                    health = 1;
                    console.log(health);
                    //console.log("collosion");
                    if (!final_death) {
                        document.getElementById('health').innerText = 1;
                        player.src = "images/anime05.png";
                        setTimeout(function() {
                            final_death = true;
                            player.src = chosen_player;
                        }, 1000)
                    }
                    ////// 
                    else if (final_death) {
                        document.getElementById('health').innerText = 0;
                        var my_modal = document.getElementById('myModal');
                        var modal_body = document.getElementById('lose');
                        player.src = "images/anime02.png";
                        modal_body.innerHTML = "<p>Game Over</p>" + playerName ;
                        my_modal.style.display = "block";
                        health = 0;
                    }
                }
            }
            ///////////////
        }, rundomTime
    );

}

function collisionDetection(element2, element1) {
    //let prams1 = element1.getBoundingClientReact();
    //let prams2 = element2.getBoundingClientReact();

    if (prams1.left < prams2.left + prams2.width) {
        return true;
    } else return false;
}

//////// hold fire
var fire = true;
///////
function move_fn(e) {
    if (health == 0) {
        return;
    }
    if (e.keyCode == "38") {
        ////////////// jump once
        let _return = getCssProperty(player, "bottom");
        let elem_bottom = parseInt(_return.slice(0, _return.length - 2));
        if (elem_bottom === 10) {
            myMove();
        }
        ///////////////
    }

    if (e.keyCode == "39") {

        move_forward();
    }

    if (e.keyCode == "37") {
        move_backward();
    }

    if (e.keyCode == "32") {
        if (fire) { ////////////
            var palyer_left = getCssProperty(player, "left");
            var player_bottom = getCssProperty(player, "bottom"); ///////////
            //console.log(palyer_left);
            let horizontal_pos = parseInt(palyer_left.slice(0, palyer_left.length - 2));
            let vertical_pos = parseInt(player_bottom.slice(0, player_bottom.length - 2)); //////////
            let bullet = document.createElement('img');
            bullet.src = "images/bolet.png";
            bullet.style.position = "absolute";
            bullet.style.height = "60px";
            bullet.style.left = horizontal_pos + 20 + "px";
            bullet.style.bottom = vertical_pos + 40 + "px"; ///////////
            bullet.className = "bulletClass";
            document.getElementsByClassName('bg')[0].appendChild(bullet);
            let shoot_interval = setInterval(shoot, 10);

            function shoot() {
                horizontal_pos = horizontal_pos + 10;
                bullet.style.left = horizontal_pos + "px";
                arrEnemys = document.getElementsByClassName("enemyElement");
                arrBolat = document.getElementsByClassName("bulletClass");

                if (horizontal_pos > (window.innerWidth - 150)) {

                    document.getElementsByClassName('bg')[0].removeChild(bullet);
                    clearInterval(shoot_interval);
                }
                //console.log(arrEnemys);
                for (let i = 0; i < arrEnemys.length; i++) {
                    const element = arrEnemys[i];
                    let elementbullet = parseInt(arrBolat[0].style.left.slice(0, arrBolat[0].style.left.length - 2));
                    let elementenemy = parseInt(element.style.left.slice(0, element.style.left.length - 2));
                    const check = elementbullet + 100 > elementenemy && elementenemy + 100 > elementbullet;
                    if (check) {
                        ///// score
                        score += 10;
                        document.getElementById('score').innerText = score;
                        /////
                        document.getElementsByClassName('bg')[0].removeChild(bullet);
                        document.getElementsByClassName('bg')[0].removeChild(element);
                        clearInterval(shoot_interval);
                        //console.log("enemy 1  : ", enemy1_interval);
                        //console.log("enemy 2  : ", enemy2_interval);
                        if (enemy2_interval != undefined) clearInterval(enemy2_interval);
                        if (enemy1_interval != undefined) clearInterval(enemy1_interval);
                        break;
                    }
                }
                //console.log(arrEnemys);
            }
            fire = false; //////////
            setTimeout(function() { fire = true }, 500); /////////////
        } ///////////
    }
}

var horizontal_pos = 0;

function move_forward() {

    if (horizontal_pos < (window.innerWidth - 200)) {
        horizontal_pos = horizontal_pos + 15;
        player.style.left = horizontal_pos + "px";
    } else { ////////////// level end
        var x = getCssProperty(document.getElementsByClassName('bg')[0], "background-position");
        //console.log(x);

        if (parseInt(x.slice(0, x.length - 3)) === 100 && health != 0) {

            //console.log("final");
            clearInterval(enemy_spawn_1);
            clearInterval(enemy_spawn_2);
            player.src = "images/jumping-dancer.png";
            ////////////// jump once
            let _return = getCssProperty(player, "bottom");
            let elem_bottom = parseInt(_return.slice(0, _return.length - 2));
            if (elem_bottom === 10) {
                myMove();
            }
            var my_modal = document.getElementById('myModal');
            my_modal.style.display = "block";

        }
    } /////////////

}

function move_backward() {
    horizontal_pos = horizontal_pos - 10;
    player.style.left = horizontal_pos + "px";

}

function myMove() {

    var pos = 10; //////////
    var direction = -1;
    var id = setInterval(frame, 5);

    function frame() {
        if (direction == 1) {
            pos = pos - 1;
            player.style.bottom = pos + "px";
            if (pos == 10) { //////////
                clearInterval(id);
            }

        } else {
            pos++;
            player.style.bottom = pos + "px";
            if (pos >= 200) { ////////
                direction = 1;
            }
        }
    }
}