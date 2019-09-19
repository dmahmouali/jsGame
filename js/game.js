var elem = document.getElementsByClassName("player")[0];
document.onkeydown = jump_fn;
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
    let horizontal_pos = 0;
    var bullet = document.createElement('img');
    bullet.src = "img/enemy1.png";
    bullet.style.width = "20px";
    bullet.style.height = "20px";
    bullet.style.position = "absolute";
    /*var h = elem.style.left ;
    bullet.style.left = 500 + "px";
    bullet.style.bottom = 500 + "px" ;*/
    elem.appendChild(bullet);
    var shoot_interval = setInterval(shoot, 10);
    function shoot() {
      horizontal_pos = horizontal_pos + 10;
      bullet.style.left = horizontal_pos + "px";

      //console.log(bullet.style.left);
      //console.log(window.innerWidth);
      if (horizontal_pos > (window.innerWidth - 50)) {

        elem.removeChild(bullet);
        clearInterval(shoot_interval);
      }
    }
  }
}

var horizontal_pos = 0;
function move_forward() {
  horizontal_pos = horizontal_pos + 10;
  elem.style.left = horizontal_pos + "px";
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
      //elem.style.left = pos + "px"; 
      if (pos >= 100) {
        direction = 1;
      }
    }
  }
}

