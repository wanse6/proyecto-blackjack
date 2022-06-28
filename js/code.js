// GLOBAL VARIABLES
var cardID;
var random;
var hand = 1;
var cpuHand = 1;
var round = 0;
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
var cpuTimeout;
var cpuTurntimeout;
var tieTimeout;
var user = 'user';
var userCardPoints;
var userCardPosition;
var userAvoidNum;
var userAvoidNum1;
var userAvoidNum2;
var userAvoidNum3;
var userPoints;
var userTimeout;
var userWon = false;


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
    displayFlex('loading-stage');
    cancel = setInterval(LoadingIncrementSeconds, 1000);
  }
}



// PASSING HANDS ONE BY ONE
function firstHand() {
  document.getElementById("stand-button").disabled = true;

  console.log('--> Round ' + ++round + ' <--');
  --round;
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

function userSecondHand() {
  document.getElementById("stand-button").disabled = false;
  userPoints = userCardPoints;

  // get the repeated IDs cards
  userAvoidNum1 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1);

  // update cpu & user's points
  userPoints = userPoints + userCardPoints;
  console.log('USER POINTS: ' + userPoints);
  showPoints();

  // display cards on table
  displayBlock('user-card-two');
  gameDecision();
}

function cpuSecondHand() {
  cpuPoints = cpuCardPoints;

  // get the repeated IDs cards
  cpuAvoidNum1 = randomCard(cpu, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1);

  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  showPoints();

  // display cards on table
  displayBlock('cpu-card-two');
  gameDecision();
}


function userThirdHand() {
  // get the repeated IDs cards
  userAvoidNum2 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1, userAvoidNum2, cpuAvoidNum2);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1 + ' and ' + userAvoidNum2 + ' and ' + cpuAvoidNum2);

  // update cpu & user's points
  userPoints = userPoints + userCardPoints;
  console.log('USER POINTS: ' + userPoints);
  showPoints();

  // display cards on table
  displayBlock('user-card-three');
  gameDecision();
}

function cpuThirdHand() {
  // get the repeated IDs cards
  cpuAvoidNum2 = randomCard(cpu, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1, userAvoidNum2, cpuAvoidNum2);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1 + ' and ' + userAvoidNum2 + ' and ' + cpuAvoidNum2);

  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  showPoints();

  // display cards on table
  displayBlock('cpu-card-three');
  gameDecision();
}

function userFourthHand() {
  // get the repeated IDs cards
  userAvoidNum3 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1, userAvoidNum2, cpuAvoidNum2, userAvoidNum3, cpuAvoidNum3);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1 + ' and ' + userAvoidNum2 + ' and ' + cpuAvoidNum2 + ' and ' + userAvoidNum3 + ' and ' + cpuAvoidNum3);

  // update cpu & user's points
  userPoints = userPoints + userCardPoints;
  console.log('USER POINTS: ' + userPoints);
  showPoints();

  // display cards on table
  displayBlock('user-card-four');
  gameDecision();

}

function cpuFourthHand() {
  // get the repeated IDs cards
  cpuAvoidNum3 = randomCard(cpu, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1, userAvoidNum2, cpuAvoidNum2, userAvoidNum3, cpuAvoidNum3);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1 + ' and ' + userAvoidNum2 + ' and ' + cpuAvoidNum2 + ' and ' + userAvoidNum3 + ' and ' + cpuAvoidNum3);

  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  showPoints();

  // display cards on table
  displayBlock('cpu-card-four');
  gameDecision();

}

function nextUserHand() {

  if (hand >= 4) {
    hand = 100;
    console.log(' ');
    console.log('All hands played!');
  } else {
    hand = hand + 1;
    console.log(' ');
    console.log('--> HAND N°' + hand + ' <--');
  }

  if (hand == 2) {
    userSecondHand();
  } else if (hand == 3) {
    userThirdHand();
  } else if (hand == 4) {
    userFourthHand();
  }
}

function nextCpuHand() {

  if (cpuHand >= 4) {
    cpuHand = 100;
    console.log(' ');
    console.log('All hands played!');
  } else {
    cpuHand = cpuHand + 1;
    console.log(' ');
    console.log('--> HAND N°' + cpuHand + ' <--');
  }

  if (cpuHand == 2) {
    cpuSecondHand();
  } else if (cpuHand == 3) {
    cpuThirdHand();
  } else if (cpuHand == 4) {
    cpuFourthHand();
  }
}

function gameDecision() {
  if(hand <= 4 && userPoints > 21) {
    roundLose++;
    // document.getElementById('rounds-lose').innerText = roundLose;
    disableButtons();
    console.log('USER BUSTED - USER LOSE');
    cpuTimeout = setTimeout(cpuWin, 2000);
  }
  if(hand == 2 && userPoints == 21) {
    roundWon++;
    // document.getElementById('rounds-won').innerText = roundWon;
    disableButtons();
    
    console.log('BLACKJACK - USER WIN');
    userTimeout = setTimeout(userWin, 3000);
    userWon = true;
  }
  if(cpuHand == 2 && cpuPoints == 21) {
    roundLose++;
    // document.getElementById('rounds-lose').innerText = roundLose;
    disableButtons();
    console.log('BLACKJACK - USER LOSE');
    cpuTimeout = setTimeout(cpuWin, 3000);
  }
  if(cpuHand <= 4 && cpuPoints > 21) {
    roundWon++;
    // document.getElementById('rounds-won').innerText = roundWon;
    disableButtons();
    
    console.log('CPU BUSTED - USER WIN');
    userTimeout = setTimeout(userWin, 2000);
    userWon = true;
  }
  if((cpuHand == 2 && cpuPoints <= 21) && cpuPoints > userPoints) {
    roundLose++;
    // document.getElementById('rounds-lose').innerText = roundLose;
    disableButtons();
    console.log('USER LOSE');
    cpuTimeout = setTimeout(cpuWin, 2000);
  }
  if((cpuHand == 3 && cpuPoints <= 21) && cpuPoints > userPoints) {
    roundLose++;
    // document.getElementById('rounds-lose').innerText = roundLose;
    disableButtons();
    console.log('USER LOSE');
    cpuTimeout = setTimeout(cpuWin, 2000);
  }
  if((cpuHand == 4 && cpuPoints <= 21) && cpuPoints > userPoints) {
    roundLose++;
    // document.getElementById('rounds-lose').innerText = roundLose;
    disableButtons();
    console.log('USER LOSE');
    cpuTimeout = setTimeout(cpuWin, 2000);
  }
  if(cpuHand == 2 && cpuPoints == userPoints && (cpuPoints >= 19 && userPoints >= 19)) {
    disableButtons();
    console.log('TIE - PUSH');
    tieTimeout = setTimeout(push, 2000);
  }
  if(cpuHand == 3 && cpuPoints == userPoints && (cpuPoints >= 19 && userPoints >= 19)) {
    disableButtons();
    console.log('TIE - PUSH');
    tieTimeout = setTimeout(push, 2000);
  }
  if(cpuHand == 4 && cpuPoints == userPoints) {
    disableButtons();
    console.log('TIE - PUSH');
    tieTimeout = setTimeout(push, 2000);
  }
  if(userPoints > cpuPoints && cpuHand == 4) {
    roundWon++;
    // document.getElementById('rounds-won').innerText = roundWon;
    disableButtons();
    
    console.log(' USER WIN');
    userTimeout = setTimeout(userWin, 2000);
    userWon = true;
  }
  if((hand == 4 && cpuHand == 1) && userPoints < 21) {
    cpuTurn();
  }
  if(userPoints == 21 && (hand <= 4 && hand > 2) && cpuHand == 1) {
    disableButtons();
    cpuTurn();
  }
}

function clearTimeoutFunc() {
  clearTimeout(userTimeout);
  clearTimeout(cpuTimeout);
  clearTimeout(tieTimeout);
}

function reset() {
  clearInterval(cpuTurntimeout);
  clearTimeoutFunc();
  allowButtons();
  if(hand != 1) round = round + 1;
  hand = 1;
  cpuHand = 1;
  // document.getElementById('rounds-played').innerText = round;
  cpuPoints = 0;
  userPoints = 0;
  closeNav();
  console.clear();
}

function showPoints() {
  document.getElementById('user-points').innerHTML = userPoints;
  document.getElementById('cpu-points').innerHTML = cpuPoints;
}

function userWin() {
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

function push() {
  reset();
  loadingGame();
  displayFlex('loading-stage');
  displayNone('game-stage');
  clearCards();
  firstHand();
}

function cpuTurn() {
  disableButtons();
  cpuTurntimeout = setInterval(nextCpuHand, 3000);
}

function clearCards() {
  displayNone('cpu-card-two');
  displayNone('cpu-card-three');
  displayNone('cpu-card-four');
  displayNone('user-card-two');
  displayNone('user-card-three');
  displayNone('user-card-four');
}

function disableButtons() {
  document.getElementById("bet-button").disabled = true;
  document.getElementById("hit-button").disabled = true;
  document.getElementById("stand-button").disabled = true;
  document.getElementById("double-button").disabled = true;
  return true;
}

function allowButtons() {
  document.getElementById("bet-button").disabled = false;
  document.getElementById("hit-button").disabled = false;
  document.getElementById("stand-button").disabled = false;
  document.getElementById("double-button").disabled = false;
  return false;
}