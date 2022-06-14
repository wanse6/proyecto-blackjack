// INITIALIZING DISPLAY FUNCTIONS
function displayNone(id) {
  document.getElementById(id).style.display = "none";
}

function displayBlock(id) {
  document.getElementById(id).style.display = "block";
}

function displayInline(id) {
  document.getElementById(id).style.display = "inline";
}

function displayInlineBlock(id) {
  document.getElementById(id).style.display = "inline-block";
}

function displayFlex(id) {
  document.getElementById(id).style.display = "flex";
}

function displayInherit(id) {
  document.getElementById(id).style.display = "inherit";
}

// INITIALIZING BACKGROUND-COLOR FUNCTIONS
function backgroundColor(id, color) {
  document.getElementById(id).style.backgroundColor = color;
}

// COUNTER SETINTERVAL
var playPressed = false;
var seconds = 0;


function incrementSeconds() {
    seconds += 1;
    console.log(seconds);
    if(seconds == 3){
      displayBlock('game-stage');
      displayNone('loading-stage');
    }
}

function isPlayPressed() {
  playPressed = true;
  if(playPressed == true){
    displayBlock('loading-stage');
    var cancel = setInterval(incrementSeconds, 1000); 
  }
}





