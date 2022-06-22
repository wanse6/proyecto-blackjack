// GLOBAL VARIABLES
var cardID;
var random;
var hand = 1;
var round = 1;
var roundWon = 0;
var roundLose = 0;
var cpu = 'cpu';
var cpuCardPoints;
var cpuCardPosition;
var cpuAvoidNum;
var cpuAvoidNum1;
var cpuAvoidNum2;
var cpuAvoidNum3;
var cpuPoints;
var user = 'user';
var userCardPoints;
var userCardPosition;
var userAvoidNum;
var userAvoidNum1;
var userAvoidNum2;
var userAvoidNum3;
var userPoints;



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



// LOADING SCREEN
var playPressed = false;
var seconds = 0;
var cancel;

function LoadingIncrementSeconds() {
  seconds += 1;
  console.log('Loaded in ' + seconds + ' seg.');
  if (seconds == 1) {
    displayBlock('game-stage');
    displayNone('loading-stage');
    clearInterval(cancel);
    seconds = 0;
  }
}

function loadingGame() {
  playPressed = true;
  if (playPressed == true) {
    displayBlock('loading-stage');
    cancel = setInterval(LoadingIncrementSeconds, 1000);
  }
}



// PASSING HANDS ONE BY ONE
function firstHand() {
  console.log('--> Round ' + round + ' <--');
  console.log('--> HAND N°' + hand + ' <--');

  // get the repeated IDs cards
  cpuAvoidNum = randomCard(cpu, cpuAvoidNum, userAvoidNum);
  userAvoidNum = randomCard(user, userAvoidNum, cpuAvoidNum);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum);

  // update cpu & user's points
  cpuPoints = cpuCardPoints;
  userPoints = userCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  console.log('USER POINTS: ' + userPoints);
  showPoints();
}

function secondHand() {
  cpuPoints = cpuCardPoints;
  userPoints = userCardPoints;

  // get the repeated IDs cards
  cpuAvoidNum1 = randomCard(cpu, cpuAvoidNum, userAvoidNum, cpuAvoidNum1, userAvoidNum1);
  userAvoidNum1 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1);

  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  userPoints = userPoints + userCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  console.log('USER POINTS: ' + userPoints);
  showPoints();

  // display cards on table
  displayBlock('cpu-card-two');
  displayBlock('user-card-two');
  gameDecision();
}

function thirdHand() {
  // get the repeated IDs cards
  cpuAvoidNum2 = randomCard(cpu, cpuAvoidNum, userAvoidNum, cpuAvoidNum1, userAvoidNum1, userAvoidNum2, cpuAvoidNum2);
  userAvoidNum2 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1, userAvoidNum2, cpuAvoidNum2);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1 + ' and ' + userAvoidNum2 + ' and ' + cpuAvoidNum2);

  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  userPoints = userPoints + userCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  console.log('USER POINTS: ' + userPoints);
  showPoints();

  // display cards on table
  displayBlock('cpu-card-three');
  displayBlock('user-card-three');
  gameDecision();
}

function fourthHand() {
  // get the repeated IDs cards
  cpuAvoidNum3 = randomCard(cpu, cpuAvoidNum, userAvoidNum, cpuAvoidNum1, userAvoidNum1, cpuAvoidNum2, userAvoidNum2, cpuAvoidNum3, userAvoidNum3);
  userAvoidNum3 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1, userAvoidNum2, cpuAvoidNum2, userAvoidNum3, cpuAvoidNum3);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1 + ' and ' + userAvoidNum2 + ' and ' + cpuAvoidNum2 + ' and ' + userAvoidNum3 + ' and ' + cpuAvoidNum3);

  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  userPoints = userPoints + userCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  console.log('USER POINTS: ' + userPoints);
  showPoints();

  // display cards on table
  displayBlock('cpu-card-four');
  displayBlock('user-card-four');
  gameDecision();

}

function nextHand() {

  if(hand >= 4) {
    hand = 100;
    console.log(' ');
    console.log('All hands played!');
  } else {
    hand = hand + 1;
    console.log(' ');
    console.log('--> HAND N°' + hand + ' <--');
  }

  if (hand == 2) {
    secondHand();
  } else if (hand == 3) {
    thirdHand();
  } else if (hand == 4) {
    fourthHand();
  }
}

function gameDecision() {
  if (hand >= 2 && hand <= 4) {
    if ((hand == 4 && userPoints > cpuPoints) || cpuPoints > 21) {
       userWin();
    } 
    if ((hand == 4 && cpuPoints > userPoints) || userPoints > 21) {
       cpuWin();
    }
  }
}

function reset() {
  hand = 1;
  document.getElementById('rounds-played').innerText = round;
  round = round + 1;
  cpuPoints = 0;
  userPoints = 0;
  console.clear();
}

function showPoints() {
  document.getElementById('user-points').innerHTML = userPoints;
  document.getElementById('cpu-points').innerHTML = cpuPoints; 
}

function userWin() {
  document.getElementById('rounds-won').innerText = roundWon;
  roundWon = roundWon + 1;
  reset();
  loadingGame(); 
  displayFlex('loading-stage'); 
  displayNone('game-stage'); 
  clearCards();
  firstHand();
}

function cpuWin() {
  reset();
  loadingGame(); 
  displayFlex('loading-stage'); 
  displayNone('game-stage'); 
  clearCards();
  firstHand();
}

function clearCards() {
  displayNone('cpu-card-two');
  displayNone('cpu-card-three'); 
  displayNone('cpu-card-four'); 
  displayNone('user-card-two'); 
  displayNone('user-card-three');
  displayNone('user-card-four'); 
}