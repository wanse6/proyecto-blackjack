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

// LOADING SCREEN
var playPressed = false;
var seconds = 0;
var cancel;

function LoadingIncrementSeconds() {
    seconds += 1;
    console.log(seconds);
    if(seconds == 2){
      displayBlock('game-stage');
      displayNone('loading-stage');
      clearInterval(cancel);
      seconds = 0;
    }
}

function isPlayPressed() {
  playPressed = true;
  if(playPressed == true){
    displayBlock('loading-stage');
    cancel = setInterval(LoadingIncrementSeconds, 1000); 
  }
}


