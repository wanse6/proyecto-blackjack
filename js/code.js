// GLOBAL VARIABLES
var cardID;
var random;
var hand = 1;
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
  console.log('Loading ' + seconds + ' seg.');
  if (seconds == 1) {
    displayBlock('game-stage');
    displayNone('loading-stage');
    clearInterval(cancel);
    seconds = 0;
  }
}

function isPlayPressed() {
  playPressed = true;
  if (playPressed == true) {
    displayBlock('loading-stage');
    cancel = setInterval(LoadingIncrementSeconds, 1000);
  }
}



// RANDOMIZING CARDS
function randomCard(who, repeatedID, repeatedID2, repeatedID3, repeatedID4, repeatedID5, repeatedID6, repeatedID7, repeatedID8) {
  random = Math.floor(Math.random() * 26);

  if (who == user) {
    console.log('random user before be changed: ' + random);
  } else {
    console.log('random cpu before be changed: ' + random);
  }

  while (random == cardID || random == repeatedID || random == repeatedID2 || random == repeatedID3 || random == repeatedID4 || random == repeatedID5 || random == repeatedID6 || random == repeatedID7 || random == repeatedID8) {
    if (random == 51) {
      random = random - 1;
    } else {
      random = random + 1;
    }
  }

  console.log('Card ID: ' + random);

  if (hand == 1) {
    userCardPosition = 'user-one';
    cpuCardPosition = 'cpu-one';
  } else if (hand == 2) {
    userCardPosition = 'user-two';
    cpuCardPosition = 'cpu-two';
  } else if (hand == 3) {
    userCardPosition = 'user-three';
    cpuCardPosition = 'cpu-three';
  } else if (hand == 4) {
    userCardPosition = 'user-four';
    cpuCardPosition = 'cpu-four';
  }

  switch (random) {
    case 0:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/az_de_corazon.svg';
        cardID = 0;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/az_de_corazon.svg';
        cardID = 0;
        cpuCardPoints = 10;
      }
      break;
    case 1:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/dos_de_corazon.svg';
        cardID = 1;
        userCardPoints = 2;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/dos_de_corazon.svg';
        cardID = 1;
        cpuCardPoints = 2;
      }
      break;
    case 2:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 3:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/cuatro_de_corazon.svg';
        cardID = 3;
        userCardPoints = 4;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/cuatro_de_corazon.svg';
        cardID = 3;
        cpuCardPoints = 4;
      }
      break;
    case 4:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/cinco_de_corazon.svg';
        cardID = 4;
        userCardPoints = 5;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/cinco_de_corazon.svg';
        cardID = 4;
        cpuCardPoints = 5;
      }
      break;
    case 5:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/seis_de_corazon.svg';
        cardID = 5;
        userCardPoints = 6;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/seis_de_corazon.svg';
        cardID = 5;
        cpuCardPoints = 6;
      }
      break;
    case 6:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/siete_de_corazon.svg';
        cardID = 6;
        userCardPoints = 7;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/siete_de_corazon.svg';
        cardID = 6;
        cpuCardPoints = 7;
      }
      break;
    case 7:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/ocho_de_corazon.svg';
        cardID = 7;
        userCardPoints = 8;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/ocho_de_corazon.svg';
        cardID = 7;
        cpuCardPoints = 8;
      }
      break;
    case 8:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/nueve_de_corazon.svg';
        cardID = 8;
        userCardPoints = 9;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/nueve_de_corazon.svg';
        cardID = 8;
        cpuCardPoints = 9;
      }
      break;
    case 9:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/diez_de_corazon.svg';
        cardID = 9;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/diez_de_corazon.svg';
        cardID = 9;
        cpuCardPoints = 10;
      }
      break;
    case 10:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/j_de_corazon.svg';
        cardID = 10;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/j_de_corazon.svg';
        cardID = 10;
        cpuCardPoints = 10;
      }
      break;
    case 11:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/q_de_corazon.svg';
        cardID = 11;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/q_de_corazon.svg';
        cardID = 11;
        cpuCardPoints = 10;
      }
      break;
    case 12:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/k_de_corazon.svg';
        cardID = 12;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/k_de_corazon.svg';
        cardID = 12;
        cpuCardPoints = 10;
      }
      break;
    case 13:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/az_de_diamante.svg';
        cardID = 13;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/az_de_diamante.svg';
        cardID = 13;
        cpuCardPoints = 10;
      }
      break;
    case 14:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/dos_de_diamante.svg';
        cardID = 14;
        userCardPoints = 2;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/dos_de_diamante.svg';
        cardID = 14;
        cpuCardPoints = 2;
      }
      break;
    case 15:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/tres_de_diamante.svg';
        cardID = 15;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/tres_de_diamante.svg';
        cardID = 15;
        cpuCardPoints = 3;
      }
      break;
    case 16:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/cuatro_de_diamante.svg';
        cardID = 16;
        userCardPoints = 4;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/cuatro_de_diamante.svg';
        cardID = 16;
        cpuCardPoints = 4;
      }
      break;
    case 17:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/cinco_de_diamante.svg';
        cardID = 17;
        userCardPoints = 5;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/cinco_de_diamante.svg';
        cardID = 17;
        cpuCardPoints = 5;
      }
      break;
    case 18:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/seis_de_diamante.svg';
        cardID = 18;
        userCardPoints = 6;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/seis_de_diamante.svg';
        cardID = 18;
        cpuCardPoints = 6;
      }
      break;
    case 19:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/siete_de_diamante.svg';
        cardID = 19;
        userCardPoints = 7;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/siete_de_diamante.svg';
        cardID = 19;
        cpuCardPoints = 7;
      }
      break;
    case 20:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/ocho_de_diamante.svg';
        cardID = 20;
        userCardPoints = 8;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/ocho_de_diamante.svg';
        cardID = 20;
        cpuCardPoints = 8;
      }
      break;
    case 21:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/nueve_de_diamante.svg';
        cardID = 21;
        userCardPoints = 9;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/nueve_de_diamante.svg';
        cardID = 21;
        cpuCardPoints = 9;
      }
      break;
    case 22:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/diez_de_diamante.svg';
        cardID = 22;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/diez_de_diamante.svg';
        cardID = 22;
        cpuCardPoints = 10;
      }
      break;
    case 23:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/j_de_diamante.svg';
        cardID = 23;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/j_de_diamante.svg';
        cardID = 23;
        cpuCardPoints = 10;
      }
      break;
    case 24:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/q_de_diamante.svg';
        cardID = 24;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/q_de_diamante.svg';
        cardID = 24;
        cpuCardPoints = 10;
      }
      break;
    case 25:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/diamante/k_de_diamante.svg';
        cardID = 25;
        userCardPoints = 10;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/diamante/k_de_diamante.svg';
        cardID = 25;
        cpuCardPoints = 10;
      }
      break;
    case 26:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 27:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 28:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 29:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 30:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 31:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 32:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 33:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 34:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 35:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 36:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 37:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 38:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 39:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 40:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 41:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 42:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 43:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 44:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 45:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 46:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 47:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 48:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 49:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 50:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
    case 51:
      if (who == user) {
        document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        userCardPoints = 3;
      } else if (who == cpu) {
        document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
        cardID = 2;
        cpuCardPoints = 3;
      }
      break;
  }
  if(who == user){
    console.log('USER CARD POINTS: ' + userCardPoints);
  } else {
    console.log('CPU CARD POINTS: ' + cpuCardPoints);
  }

  return cardID;
}



// PASSING HANDS ONE BY ONE
function firstHand() {
  userAvoidNum = randomCard(user, userAvoidNum, cpuAvoidNum);
  cpuAvoidNum = randomCard(cpu, cpuAvoidNum, userAvoidNum);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum);
}

function secondHand() {
  cpuPoints = cpuCardPoints;
  userPoints = userCardPoints;
  
  userAvoidNum1 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1);
  cpuAvoidNum1 = randomCard(cpu, cpuAvoidNum, userAvoidNum, cpuAvoidNum1, userAvoidNum1);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1);

  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  userPoints = userPoints + userCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  console.log('USER POINTS: ' + userPoints);
  gameDecision();
  displayBlock('cpu-card-two');
  displayBlock('user-card-two');
}

function thirdHand() {
  
  userAvoidNum2 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1, userAvoidNum2, cpuAvoidNum2);
  cpuAvoidNum2 = randomCard(cpu, cpuAvoidNum, userAvoidNum, cpuAvoidNum1, userAvoidNum1, userAvoidNum2, cpuAvoidNum2);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1 + ' and ' + userAvoidNum2 + ' and ' + cpuAvoidNum2);


  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  userPoints = userPoints + userCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  console.log('USER POINTS: ' + userPoints);
  gameDecision();
  displayBlock('cpu-card-three');
  displayBlock('user-card-three');
}

function fourthHand() {
  
  userAvoidNum3 = randomCard(user, userAvoidNum, cpuAvoidNum, userAvoidNum1, cpuAvoidNum1, userAvoidNum2, cpuAvoidNum2, userAvoidNum3, cpuAvoidNum3);
  cpuAvoidNum3 = randomCard(cpu, cpuAvoidNum, userAvoidNum, cpuAvoidNum1, userAvoidNum1, cpuAvoidNum2, userAvoidNum2, cpuAvoidNum3, userAvoidNum3);
  console.log('ID to avoid is: ' + userAvoidNum + ' and ' + cpuAvoidNum + ' and ' + userAvoidNum1 + ' and ' + cpuAvoidNum1 + ' and ' + userAvoidNum2 + ' and ' + cpuAvoidNum2 + ' and ' + userAvoidNum3 + ' and ' + cpuAvoidNum3);


  // update cpu & user's points
  cpuPoints = cpuPoints + cpuCardPoints;
  userPoints = userPoints + userCardPoints;
  console.log('CPU POINTS: ' + cpuPoints);
  console.log('USER POINTS: ' + userPoints);
  gameDecision();
  displayBlock('cpu-card-four');
  displayBlock('user-card-four');
}

function nextHand() {
  hand = hand + 1;
  console.log('--> HAND N°' + hand + ' <--');

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
    if (cpuPoints > 21) {
      // userWin();
    } else if ((hand == 4 && cpuPoints > userPoints) || userPoints > 21) {
      // userLose();
    }
  }
}

