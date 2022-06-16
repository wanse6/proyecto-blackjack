// GLOBAL VARIABLES
var cardID;
var cpuCardPoints;
var cpuCardPosition;

var userCardPoints;
var userCardPosition;

var hand = 1;


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
  if (seconds == 2) {
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
function randomCpuCard() {
  random = Math.floor(Math.random() * 52);

  while(random == cardID){
    if(random == 51){
      random = random - 1;
    } else {
      random = random + 1;
    }
  }

  console.log('Card ID: ' + random);

  if(hand == 1) {
    cpuCardPosition = 'cpu-one';
  } else if(hand == 2) {
    cpuCardPosition = 'cpu-two';
  } else if(hand == 3) {
    cpuCardPosition = 'cpu-three';
  } else if(hand == 4) {
    cpuCardPosition = 'cpu-four';
  }

  switch (random) {
    case 0:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/az_de_corazon.svg';
      cardID = 0;
      cpuCardPoints = 10;
      break;
    case 1:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/dos_de_corazon.svg';
      cardID = 1;
      cpuCardPoints = 2;
      break;
    case 2:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
      cardID = 2;
      cpuCardPoints = 3;
      break;
    case 3:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/cuatro_de_corazon.svg';
      cardID = 3;
      cpuCardPoints = 4;
      break;
    case 4:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/cinco_de_corazon.svg';
      cardID = 4;
      cpuCardPoints = 5;
      break;
    case 5:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/seis_de_corazon.svg';
      cardID = 5;
      cpuCardPoints = 6;
      break;
    case 6:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/siete_de_corazon.svg';
      cardID = 6;
      cpuCardPoints = 7;
      break;
    case 7:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/ocho_de_corazon.svg';
      cardID = 7;
      cpuCardPoints = 8;
      break;
    case 8:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/nueve_de_corazon.svg';
      cardID = 8;
      cpuCardPoints = 9;
      break;
    case 9:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/diez_de_corazon.svg';
      cardID = 9;
      cpuCardPoints = 10;
      break;
    case 10:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/j_de_corazon.svg';
      cardID = 10;
      cpuCardPoints = 10;
      break;
    case 11:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/q_de_corazon.svg';
      cardID = 11;
      cpuCardPoints = 10;
      break;
    case 12:
      document.getElementById(cpuCardPosition).src = 'img/cards/corazon/k_de_corazon.svg';
      cardID = 12;
      cpuCardPoints = 10;
      break;
    case 13:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/az_de_diamante.svg';
      cardID = 13;
      cpuCardPoints = 10;
      break;
    case 14:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/dos_de_diamante.svg';
      cardID = 14;
      cpuCardPoints = 2;
      break;
    case 15:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/tres_de_diamante.svg';
      cardID = 15;
      cpuCardPoints = 3;
      break;
    case 16:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/cuatro_de_diamante.svg';
      cardID = 16;
      cpuCardPoints = 4;
      break;
    case 17:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/cinco_de_diamante.svg';
      cardID = 17;
      cpuCardPoints = 5;
      break;
    case 18:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/seis_de_diamante.svg';
      cardID = 18;
      cpuCardPoints = 6;
      break;
    case 19:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/siete_de_diamante.svg';
      cardID = 19;
      cpuCardPoints = 7;
      break;
    case 20:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/ocho_de_diamante.svg';
      cardID = 20;
      cpuCardPoints = 8;
      break;
    case 21:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/nueve_de_diamante.svg';
      cardID = 21;
      cpuCardPoints = 9;
      break;
    case 22:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/diez_de_diamante.svg';
      cardID = 22;
      cpuCardPoints = 10;
      break;
    case 23:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/j_de_diamante.svg';
      cardID = 23;
      cpuCardPoints = 10;
      break;
    case 24:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/q_de_diamante.svg';
      cardID = 24;
      cpuCardPoints = 10;
      break;
    case 25:
      document.getElementById(cpuCardPosition).src = 'img/cards/diamante/k_de_diamante.svg';
      cardID = 25;
      cpuCardPoints = 10;
      break;
    case 26:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/az_de_pica.svg';
      cardID = 26;
      cpuCardPoints = 10;
      break;
    case 27:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/dos_de_pica.svg';
      cardID = 27;
      cpuCardPoints = 2;
      break;
    case 28:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/tres_de_pica.svg';
      cardID = 28;
      cpuCardPoints = 3;
      break;
    case 29:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/cuatro_de_pica.svg';
      cardID = 29;
      cpuCardPoints = 4;
      break;
    case 30:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/cinco_de_pica.svg';
      cardID = 30;
      cpuCardPoints = 5;
      break;
    case 31:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/seis_de_pica.svg';
      cardID = 31;
      cpuCardPoints = 6;
      break;
    case 32:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/siete_de_pica.svg';
      cardID = 32;
      cpuCardPoints = 7;
      break;
    case 33:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/ocho_de_pica.svg';
      cardID = 33;
      cpuCardPoints = 8;
      break;
    case 34:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/nueve_de_pica.svg';
      cardID = 34;
      cpuCardPoints = 9;
      break;
    case 35:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/diez_de_pica.svg';
      cardID = 35;
      cpuCardPoints = 10;
      break;
    case 36:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/j_de_pica.svg';
      cardID = 36;
      cpuCardPoints = 10;
      break;
    case 37:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/q_de_pica.svg';
      cardID = 37;
      cpuCardPoints = 10;
      break;
    case 38:
      document.getElementById(cpuCardPosition).src = 'img/cards/pica/k_de_pica.svg';
      cardID = 38;
      cpuCardPoints = 10;
      break;
    case 39:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/az_de_trebol.svg';
      cardID = 39;
      cpuCardPoints = 10;
      break;
    case 40:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/dos_de_trebol.svg';
      cardID = 40;
      cpuCardPoints = 2;
      break;
    case 41:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/tres_de_trebol.svg';
      cardID = 41;
      cpuCardPoints = 3;
      break;
    case 42:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/cuatro_de_trebol.svg';
      cardID = 42;
      cpuCardPoints = 4;
      break;
    case 43:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/cinco_de_trebol.svg';
      cardID = 43;
      cpuCardPoints = 5;
      break;
    case 44:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/seis_de_trebol.svg';
      cardID = 44;
      cpuCardPoints = 6;
      break;
    case 45:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/siete_de_trebol.svg';
      cardID = 45;
      cpuCardPoints = 7;
      break;
    case 46:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/ocho_de_trebol.svg';
      cardID = 46;
      cpuCardPoints = 8;
      break;
    case 47:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/nueve_de_trebol.svg';
      cardID = 47;
      cpuCardPoints = 9;
      break;
    case 48:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/diez_de_trebol.svg';
      cardID = 48;
      cpuCardPoints = 10;
      break;
    case 49:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/j_de_trebol.svg';
      cardID = 49;
      cpuCardPoints = 10;
      break;
    case 50:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/q_de_trebol.svg';
      cardID = 50;
      cpuCardPoints = 10;
      break;
    case 51:
      document.getElementById(cpuCardPosition).src = 'img/cards/trebol/k_de_trebol.svg';
      cardID = 51;
      cpuCardPoints = 10;
      break;
  }
  console.log('CPU points: ' + cpuCardPoints);
  return cardID;
}

function randomUserCard() {
  random = Math.floor(Math.random() * 52);

  while(random == cardID){
    if(random == 51){
      random = random - 1;
    } else {
      random = random + 1;
    }
  }

  console.log('Card ID: ' + random);

  if(hand == 1) {
    userCardPosition = 'user-one';
  } else if(hand == 2) {
    userCardPosition = 'user-two';
  } else if(hand == 3) {
    userCardPosition = 'user-three';
  } else if(hand == 4) {
    userCardPosition = 'user-four';
  }

  switch (random) {
    case 0:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/az_de_corazon.svg';
      cardID = 0;
      userCardPoints = 10;
      break;
    case 1:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/dos_de_corazon.svg';
      cardID = 1;
      userCardPoints = 2;
      break;
    case 2:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/tres_de_corazon.svg';
      cardID = 2;
      userCardPoints = 3;
      break;
    case 3:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/cuatro_de_corazon.svg';
      cardID = 3;
      userCardPoints = 4;
      break;
    case 4:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/cinco_de_corazon.svg';
      cardID = 4;
      userCardPoints = 5;
      break;
    case 5:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/seis_de_corazon.svg';
      cardID = 5;
      userCardPoints = 6;
      break;
    case 6:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/siete_de_corazon.svg';
      cardID = 6;
      userCardPoints = 7;
      break;
    case 7:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/ocho_de_corazon.svg';
      cardID = 7;
      userCardPoints = 8;
      break;
    case 8:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/nueve_de_corazon.svg';
      cardID = 8;
      userCardPoints = 9;
      break;
    case 9:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/diez_de_corazon.svg';
      cardID = 9;
      userCardPoints = 10;
      break;
    case 10:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/j_de_corazon.svg';
      cardID = 10;
      userCardPoints = 10;
      break;
    case 11:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/q_de_corazon.svg';
      cardID = 11;
      userCardPoints = 10;
      break;
    case 12:
      document.getElementById(userCardPosition).src = 'img/cards/corazon/k_de_corazon.svg';
      cardID = 12;
      userCardPoints = 10;
      break;
    case 13:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/az_de_diamante.svg';
      cardID = 13;
      userCardPoints = 10;
      break;
    case 14:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/dos_de_diamante.svg';
      cardID = 14;
      userCardPoints = 2;
      break;
    case 15:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/tres_de_diamante.svg';
      cardID = 15;
      userCardPoints = 3;
      break;
    case 16:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/cuatro_de_diamante.svg';
      cardID = 16;
      userCardPoints = 4;
      break;
    case 17:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/cinco_de_diamante.svg';
      cardID = 17;
      userCardPoints = 5;
      break;
    case 18:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/seis_de_diamante.svg';
      cardID = 18;
      userCardPoints = 6;
      break;
    case 19:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/siete_de_diamante.svg';
      cardID = 19;
      userCardPoints = 7;
      break;
    case 20:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/ocho_de_diamante.svg';
      cardID = 20;
      userCardPoints = 8;
      break;
    case 21:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/nueve_de_diamante.svg';
      cardID = 21;
      userCardPoints = 9;
      break;
    case 22:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/diez_de_diamante.svg';
      cardID = 22;
      userCardPoints = 10;
      break;
    case 23:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/j_de_diamante.svg';
      cardID = 23;
      userCardPoints = 10;
      break;
    case 24:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/q_de_diamante.svg';
      cardID = 24;
      userCardPoints = 10;
      break;
    case 25:
      document.getElementById(userCardPosition).src = 'img/cards/diamante/k_de_diamante.svg';
      cardID = 25;
      userCardPoints = 10;
      break;
    case 26:
      document.getElementById(userCardPosition).src = 'img/cards/pica/az_de_pica.svg';
      cardID = 26;
      userCardPoints = 10;
      break;
    case 27:
      document.getElementById(userCardPosition).src = 'img/cards/pica/dos_de_pica.svg';
      cardID = 27;
      userCardPoints = 2;
      break;
    case 28:
      document.getElementById(userCardPosition).src = 'img/cards/pica/tres_de_pica.svg';
      cardID = 28;
      userCardPoints = 3;
      break;
    case 29:
      document.getElementById(userCardPosition).src = 'img/cards/pica/cuatro_de_pica.svg';
      cardID = 29;
      userCardPoints = 4;
      break;
    case 30:
      document.getElementById(userCardPosition).src = 'img/cards/pica/cinco_de_pica.svg';
      cardID = 30;
      userCardPoints = 5;
      break;
    case 31:
      document.getElementById(userCardPosition).src = 'img/cards/pica/seis_de_pica.svg';
      cardID = 31;
      userCardPoints = 6;
      break;
    case 32:
      document.getElementById(userCardPosition).src = 'img/cards/pica/siete_de_pica.svg';
      cardID = 32;
      userCardPoints = 7;
      break;
    case 33:
      document.getElementById(userCardPosition).src = 'img/cards/pica/ocho_de_pica.svg';
      cardID = 33;
      userCardPoints = 8;
      break;
    case 34:
      document.getElementById(userCardPosition).src = 'img/cards/pica/nueve_de_pica.svg';
      cardID = 34;
      userCardPoints = 9;
      break;
    case 35:
      document.getElementById(userCardPosition).src = 'img/cards/pica/diez_de_pica.svg';
      cardID = 35;
      userCardPoints = 10;
      break;
    case 36:
      document.getElementById(userCardPosition).src = 'img/cards/pica/j_de_pica.svg';
      cardID = 36;
      userCardPoints = 10;
      break;
    case 37:
      document.getElementById(userCardPosition).src = 'img/cards/pica/q_de_pica.svg';
      cardID = 37;
      userCardPoints = 10;
      break;
    case 38:
      document.getElementById(userCardPosition).src = 'img/cards/pica/k_de_pica.svg';
      cardID = 38;
      userCardPoints = 10;
      break;
    case 39:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/az_de_trebol.svg';
      cardID = 39;
      userCardPoints = 10;
      break;
    case 40:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/dos_de_trebol.svg';
      cardID = 40;
      userCardPoints = 2;
      break;
    case 41:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/tres_de_trebol.svg';
      cardID = 41;
      userCardPoints = 3;
      break;
    case 42:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/cuatro_de_trebol.svg';
      cardID = 42;
      userCardPoints = 4;
      break;
    case 43:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/cinco_de_trebol.svg';
      cardID = 43;
      userCardPoints = 5;
      break;
    case 44:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/seis_de_trebol.svg';
      cardID = 44;
      userCardPoints = 6;
      break;
    case 45:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/siete_de_trebol.svg';
      cardID = 45;
      userCardPoints = 7;
      break;
    case 46:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/ocho_de_trebol.svg';
      cardID = 46;
      userCardPoints = 8;
      break;
    case 47:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/nueve_de_trebol.svg';
      cardID = 47;
      userCardPoints = 9;
      break;
    case 48:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/diez_de_trebol.svg';
      cardID = 48;
      userCardPoints = 10;
      break;
    case 49:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/j_de_trebol.svg';
      cardID = 49;
      userCardPoints = 10;
      break;
    case 50:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/q_de_trebol.svg';
      cardID = 50;
      userCardPoints = 10;
      break;
    case 51:
      document.getElementById(userCardPosition).src = 'img/cards/trebol/k_de_trebol.svg';
      cardID = 51;
      userCardPoints = 10;
      break;
  }
  console.log('User points: ' + userCardPoints);
  return cardID;
}

function secondHand() {
  randomCpuCard();
  randomUserCard();
  displayBlock('cpu-card-two');
  displayBlock('user-card-two');
}

function thirdHand() {
  randomCpuCard();
  randomUserCard();
  displayBlock('cpu-card-three');
  displayBlock('user-card-three');
}

function fourthHand() {
  randomCpuCard();
  randomUserCard();
  displayBlock('cpu-card-four');
  displayBlock('user-card-four');
}

function nextHand() {
  hand = hand + 1;
  console.log('HAND N°' + hand + '.');

  if(hand == 2) {
    secondHand();
  } else if(hand == 3) {
    thirdHand();
  } else if(hand == 4) {
    fourthHand();
  }
}

