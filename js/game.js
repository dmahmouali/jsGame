import * from "CollisionDetection";


var elem = document.getElementsByClassName("player")[0];
document.onkeydown = jump_fn;


function getCssProperty(elem, property) {

    return window.getComputedStyle(elem, null).getPropertyValue(property);
}

setInterval(enemy_spawn, 5000);

function enemy_spawn() {

    let rundomTime = Math.random() * 80;
    var enemy = document.createElement('img');
    enemy.src = 'images/deep.gif';
    document.getElementsByClassName('bg')[0].appendChild(enemy);
    enemy.style.position = "absolute";
    enemy.style.right = "0px";
    enemy.style.bottom = "0px";
    enemy.style.width = "220px";
    enemy.style.height = "140px";
    let _return = getCssProperty(enemy, "right");
    let enemy_right = parseInt(_return.slice(0, _return.length - 2));
    setInterval(
        function() {
            enemy_right += 5;
            enemy.style.right = enemy_right + "px";
            rundomTime = Math.random() * 80;
        }, rundomTime
    );

}

function jump_fn(e) {
    if (e.keyCode == "38") {
        myMove();
    }

    if (e.keyCode == "39") {

        move_forward();
    }

    if (e.keyCode == "37") {
        move_backward();
    }

    if (e.keyCode == "32") {

        var palyer_left = getCssProperty(elem, "left");
        console.log(palyer_left);
        let horizontal_pos = parseInt(palyer_left.slice(0, palyer_left.length - 2));
        var bullet = document.createElement('img');
        bullet.src = "images/bolet.png";
        bullet.style.position = "absolute";
        bullet.style.height = "60px";
        bullet.style.left = horizontal_pos + 20 + "px";
        bullet.style.bottom = "40px";
        document.getElementsByClassName('bg')[0].appendChild(bullet);
        var shoot_interval = setInterval(shoot, 10);

        function shoot() {
            horizontal_pos = horizontal_pos + 10;
            bullet.style.left = horizontal_pos + "px";
            if (horizontal_pos > (window.innerWidth - 150)) {

                document.getElementsByClassName('bg')[0].removeChild(bullet);
                clearInterval(shoot_interval);
            }
        }
    }
}

var horizontal_pos = 0;

function move_forward() {

    if (horizontal_pos < (window.innerWidth - 150)) {
        horizontal_pos = horizontal_pos + 15;
        elem.style.left = horizontal_pos + "px";
    }

}

function move_backward() {
    horizontal_pos = horizontal_pos - 10;
    elem.style.left = horizontal_pos + "px";

}

function myMove() {

    var pos = 0;
    var direction = -1;
    var id = setInterval(frame, 5);

    function frame() {
        if (direction == 1) {
            pos = pos - 1;
            elem.style.bottom = pos + "px";
            if (pos == 0) {
                clearInterval(id);
            }

        } else {
            pos++;
            elem.style.bottom = pos + "px";
            if (pos >= 150) {
                direction = 1;
            }
        }
    }
}