// GLOBAL VARIABLES
var cardValue;


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
  console.log(seconds);
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
  random = Math.floor(Math.random() * 5);

  while(random == cardValue){
    if(random == 51){
      random = random - 1;
    } else {
      random = random + 1;
    }
  }

  console.log(random);

  switch (random) {
    case 0:
      document.getElementById('cpu-one').src = 'img/cards/corazon/az_de_corazon.svg';
      cardValue = 0;
      break;
    case 1:
      document.getElementById('cpu-one').src = 'img/cards/corazon/dos_de_corazon.svg';
      cardValue = 1;
      break;
    case 2:
      document.getElementById('cpu-one').src = 'img/cards/corazon/tres_de_corazon.svg';
      cardValue = 2;
      break;
    case 3:
      document.getElementById('cpu-one').src = 'img/cards/corazon/cuatro_de_corazon.svg';
      cardValue = 3;
      break;
    case 4:
      document.getElementById('cpu-one').src = 'img/cards/corazon/cinco_de_corazon.svg';
      cardValue = 4;
      break;
    case 5:
      document.getElementById('cpu-one').src = 'img/cards/corazon/seis_de_corazon.svg';
      cardValue = 5;
      break;
    case 6:
      document.getElementById('cpu-one').src = 'img/cards/corazon/siete_de_corazon.svg';
      cardValue = 6;
      break;
    case 7:
      document.getElementById('cpu-one').src = 'img/cards/corazon/ocho_de_corazon.svg';
      cardValue = 7;
      break;
    case 8:
      document.getElementById('cpu-one').src = 'img/cards/corazon/nueve_de_corazon.svg';
      cardValue = 8;
      break;
    case 9:
      document.getElementById('cpu-one').src = 'img/cards/corazon/diez_de_corazon.svg';
      cardValue = 9;
      break;
    case 10:
      document.getElementById('cpu-one').src = 'img/cards/corazon/j_de_corazon.svg';
      cardValue = 10;
      break;
    case 11:
      document.getElementById('cpu-one').src = 'img/cards/corazon/q_de_corazon.svg';
      cardValue = 11;
      break;
    case 12:
      document.getElementById('cpu-one').src = 'img/cards/corazon/k_de_corazon.svg';
      cardValue = 12;
      break;
    case 13:
      document.getElementById('cpu-one').src = 'img/cards/diamante/az_de_diamante.svg';
      cardValue = 13;
      break;
    case 14:
      document.getElementById('cpu-one').src = 'img/cards/diamante/dos_de_diamante.svg';
      cardValue = 14;
      break;
    case 15:
      document.getElementById('cpu-one').src = 'img/cards/diamante/tres_de_diamante.svg';
      cardValue = 15;
      break;
    case 16:
      document.getElementById('cpu-one').src = 'img/cards/diamante/cuatro_de_diamante.svg';
      cardValue = 16;
      break;
    case 17:
      document.getElementById('cpu-one').src = 'img/cards/diamante/cinco_de_diamante.svg';
      cardValue = 17;
      break;
    case 18:
      document.getElementById('cpu-one').src = 'img/cards/diamante/seis_de_diamante.svg';
      cardValue = 18;
      break;
    case 19:
      document.getElementById('cpu-one').src = 'img/cards/diamante/siete_de_diamante.svg';
      cardValue = 19;
      break;
    case 20:
      document.getElementById('cpu-one').src = 'img/cards/diamante/ocho_de_diamante.svg';
      cardValue = 20;
      break;
    case 21:
      document.getElementById('cpu-one').src = 'img/cards/diamante/nueve_de_diamante.svg';
      cardValue = 21;
      break;
    case 22:
      document.getElementById('cpu-one').src = 'img/cards/diamante/diez_de_diamante.svg';
      cardValue = 22;
      break;
    case 23:
      document.getElementById('cpu-one').src = 'img/cards/diamante/j_de_diamante.svg';
      cardValue = 23;
      break;
    case 24:
      document.getElementById('cpu-one').src = 'img/cards/diamante/q_de_diamante.svg';
      cardValue = 24;
      break;
    case 25:
      document.getElementById('cpu-one').src = 'img/cards/diamante/k_de_diamante.svg';
      cardValue = 25;
      break;
    case 26:
      document.getElementById('cpu-one').src = 'img/cards/pica/az_de_pica.svg';
      cardValue = 26;
      break;
    case 27:
      document.getElementById('cpu-one').src = 'img/cards/pica/dos_de_pica.svg';
      cardValue = 27;
      break;
    case 28:
      document.getElementById('cpu-one').src = 'img/cards/pica/tres_de_pica.svg';
      cardValue = 28;
      break;
    case 29:
      document.getElementById('cpu-one').src = 'img/cards/pica/cuatro_de_pica.svg';
      cardValue = 29;
      break;
    case 30:
      document.getElementById('cpu-one').src = 'img/cards/pica/cinco_de_pica.svg';
      cardValue = 30;
      break;
    case 31:
      document.getElementById('cpu-one').src = 'img/cards/pica/seis_de_pica.svg';
      cardValue = 31;
      break;
    case 32:
      document.getElementById('cpu-one').src = 'img/cards/pica/siete_de_pica.svg';
      cardValue = 32;
      break;
    case 33:
      document.getElementById('cpu-one').src = 'img/cards/pica/ocho_de_pica.svg';
      cardValue = 33;
      break;
    case 34:
      document.getElementById('cpu-one').src = 'img/cards/pica/nueve_de_pica.svg';
      cardValue = 34;
      break;
    case 35:
      document.getElementById('cpu-one').src = 'img/cards/pica/diez_de_pica.svg';
      cardValue = 35;
      break;
    case 36:
      document.getElementById('cpu-one').src = 'img/cards/pica/j_de_pica.svg';
      cardValue = 36;
      break;
    case 37:
      document.getElementById('cpu-one').src = 'img/cards/pica/q_de_pica.svg';
      cardValue = 37;
      break;
    case 38:
      document.getElementById('cpu-one').src = 'img/cards/pica/k_de_pica.svg';
      cardValue = 38;
      break;
    case 39:
      document.getElementById('cpu-one').src = 'img/cards/trebol/az_de_trebol.svg';
      cardValue = 39;
      break;
    case 40:
      document.getElementById('cpu-one').src = 'img/cards/trebol/dos_de_trebol.svg';
      cardValue = 40;
      break;
    case 41:
      document.getElementById('cpu-one').src = 'img/cards/trebol/tres_de_trebol.svg';
      cardValue = 41;
      break;
    case 42:
      document.getElementById('cpu-one').src = 'img/cards/trebol/cuatro_de_trebol.svg';
      cardValue = 42;
      break;
    case 43:
      document.getElementById('cpu-one').src = 'img/cards/trebol/cinco_de_trebol.svg';
      cardValue = 43;
      break;
    case 44:
      document.getElementById('cpu-one').src = 'img/cards/trebol/seis_de_trebol.svg';
      cardValue = 44;
      break;
    case 45:
      document.getElementById('cpu-one').src = 'img/cards/trebol/siete_de_trebol.svg';
      cardValue = 45;
      break;
    case 46:
      document.getElementById('cpu-one').src = 'img/cards/trebol/ocho_de_trebol.svg';
      cardValue = 46;
      break;
    case 47:
      document.getElementById('cpu-one').src = 'img/cards/trebol/nueve_de_trebol.svg';
      cardValue = 47;
      break;
    case 48:
      document.getElementById('cpu-one').src = 'img/cards/trebol/diez_de_trebol.svg';
      cardValue = 48;
      break;
    case 49:
      document.getElementById('cpu-one').src = 'img/cards/trebol/j_de_trebol.svg';
      cardValue = 49;
      break;
    case 50:
      document.getElementById('cpu-one').src = 'img/cards/trebol/q_de_trebol.svg';
      cardValue = 50;
      break;
    case 51:
      document.getElementById('cpu-one').src = 'img/cards/trebol/k_de_trebol.svg';
      cardValue = 51;
      break;
  }
  return cardValue;
}

function randomUserCard() {
  random = Math.floor(Math.random() * 5);

  while(random == cardValue){
    if(random == 51){
      random = random - 1;
    } else {
      random = random + 1;
    }
  }
  
  console.log(random);

  switch (random) {
    case 0:
      document.getElementById('user-one').src = 'img/cards/corazon/az_de_corazon.svg';
      cardValue = 0;
      break;
    case 1:
      document.getElementById('user-one').src = 'img/cards/corazon/dos_de_corazon.svg';
      cardValue = 1;
      break;
    case 2:
      document.getElementById('user-one').src = 'img/cards/corazon/tres_de_corazon.svg';
      cardValue = 2;
      break;
    case 3:
      document.getElementById('user-one').src = 'img/cards/corazon/cuatro_de_corazon.svg';
      cardValue = 3;
      break;
    case 4:
      document.getElementById('user-one').src = 'img/cards/corazon/cinco_de_corazon.svg';
      cardValue = 4;
      break;
    case 5:
      document.getElementById('user-one').src = 'img/cards/corazon/seis_de_corazon.svg';
      cardValue = 5;
      break;
    case 6:
      document.getElementById('user-one').src = 'img/cards/corazon/siete_de_corazon.svg';
      cardValue = 6;
      break;
    case 7:
      document.getElementById('user-one').src = 'img/cards/corazon/ocho_de_corazon.svg';
      cardValue = 7;
      break;
    case 8:
      document.getElementById('user-one').src = 'img/cards/corazon/nueve_de_corazon.svg';
      brcardValue = 8;
      breakeak;
    case 9:
      document.getElementById('user-one').src = 'img/cards/corazon/diez_de_corazon.svg';
      cardValue = 9;
      break;
    case 10:
      document.getElementById('user-one').src = 'img/cards/corazon/j_de_corazon.svg';
      cardValue = 10;
      break;
    case 11:
      document.getElementById('user-one').src = 'img/cards/corazon/q_de_corazon.svg';
      cardValue = 11;
      break;
    case 12:
      document.getElementById('user-one').src = 'img/cards/corazon/k_de_corazon.svg';
      cardValue = 12;
      break;
    case 13:
      document.getElementById('user-one').src = 'img/cards/diamante/az_de_diamante.svg';
      cardValue = 13;
      break;
    case 14:
      document.getElementById('user-one').src = 'img/cards/diamante/dos_de_diamante.svg';
      cardValue = 14;
      break;
    case 15:
      document.getElementById('user-one').src = 'img/cards/diamante/tres_de_diamante.svg';
      cardValue = 15;
      break;
    case 16:
      document.getElementById('user-one').src = 'img/cards/diamante/cuatro_de_diamante.svg';
      cardValue = 16;
      break;
    case 17:
      document.getElementById('user-one').src = 'img/cards/diamante/cinco_de_diamante.svg';
      cardValue = 17;
      break;
    case 18:
      document.getElementById('user-one').src = 'img/cards/diamante/seis_de_diamante.svg';
      cardValue = 18;
      break;
    case 19:
      document.getElementById('user-one').src = 'img/cards/diamante/siete_de_diamante.svg';
      cardValue = 19;
      break;
    case 20:
      document.getElementById('user-one').src = 'img/cards/diamante/ocho_de_diamante.svg';
      cardValue = 20;
      break;
    case 21:
      document.getElementById('user-one').src = 'img/cards/diamante/nueve_de_diamante.svg';
      cardValue = 21;
      break;
    case 22:
      document.getElementById('user-one').src = 'img/cards/diamante/diez_de_diamante.svg';
      cardValue = 22;
      break;
    case 23:
      document.getElementById('user-one').src = 'img/cards/diamante/j_de_diamante.svg';
      cardValue = 23;
      break;
    case 24:
      document.getElementById('user-one').src = 'img/cards/diamante/q_de_diamante.svg';
      cardValue = 24;
      break;
    case 25:
      document.getElementById('user-one').src = 'img/cards/diamante/k_de_diamante.svg';
      cardValue = 25;
      break;
    case 26:
      document.getElementById('user-one').src = 'img/cards/pica/az_de_pica.svg';
      cardValue = 26;
      break;
    case 27:
      document.getElementById('user-one').src = 'img/cards/pica/dos_de_pica.svg';
      cardValue = 27;
      break;
    case 28:
      document.getElementById('user-one').src = 'img/cards/pica/tres_de_pica.svg';
      cardValue = 28;
      break;
    case 29:
      document.getElementById('user-one').src = 'img/cards/pica/cuatro_de_pica.svg';
      cardValue = 29;
      break;
    case 30:
      document.getElementById('user-one').src = 'img/cards/pica/cinco_de_pica.svg';
      cardValue = 30;
      break;
    case 31:
      document.getElementById('user-one').src = 'img/cards/pica/seis_de_pica.svg';
      cardValue = 31;
      break;
    case 32:
      document.getElementById('user-one').src = 'img/cards/pica/siete_de_pica.svg';
      cardValue = 32;
      break;
    case 33:
      document.getElementById('user-one').src = 'img/cards/pica/ocho_de_pica.svg';
      cardValue = 33;
      break;
    case 34:
      document.getElementById('user-one').src = 'img/cards/pica/nueve_de_pica.svg';
      cardValue = 34;
      break;
    case 35:
      document.getElementById('user-one').src = 'img/cards/pica/diez_de_pica.svg';
      cardValue = 35;
      break;
    case 36:
      document.getElementById('user-one').src = 'img/cards/pica/j_de_pica.svg';
      cardValue = 36;
      break;
    case 37:
      document.getElementById('user-one').src = 'img/cards/pica/q_de_pica.svg';
      cardValue = 37;
      break;
    case 38:
      document.getElementById('user-one').src = 'img/cards/pica/k_de_pica.svg';
      cardValue = 38;
      break;
    case 39:
      document.getElementById('user-one').src = 'img/cards/trebol/az_de_trebol.svg';
      cardValue = 39;
      break;
    case 40:
      document.getElementById('user-one').src = 'img/cards/trebol/dos_de_trebol.svg';
      cardValue = 40;
      break;
    case 41:
      document.getElementById('user-one').src = 'img/cards/trebol/tres_de_trebol.svg';
      cardValue = 41;
      break;
    case 42:
      document.getElementById('user-one').src = 'img/cards/trebol/cuatro_de_trebol.svg';
      cardValue = 42;
      break;
    case 43:
      document.getElementById('user-one').src = 'img/cards/trebol/cinco_de_trebol.svg';
      cardValue = 43;
      break;
    case 44:
      document.getElementById('user-one').src = 'img/cards/trebol/seis_de_trebol.svg';
      cardValue = 44;
      break;
    case 45:
      document.getElementById('user-one').src = 'img/cards/trebol/siete_de_trebol.svg';
      cardValue = 45;
      break;
    case 46:
      document.getElementById('user-one').src = 'img/cards/trebol/ocho_de_trebol.svg';
      cardValue = 46;
      break;
    case 47:
      document.getElementById('user-one').src = 'img/cards/trebol/nueve_de_trebol.svg';
      cardValue = 47;
      break;
    case 48:
      document.getElementById('user-one').src = 'img/cards/trebol/diez_de_trebol.svg';
      cardValue = 48;
      break;
    case 49:
      document.getElementById('user-one').src = 'img/cards/trebol/j_de_trebol.svg';
      cardValue = 49;
      break;
    case 50:
      document.getElementById('user-one').src = 'img/cards/trebol/q_de_trebol.svg';
      cardValue = 50;
      break;
    case 51:
      document.getElementById('user-one').src = 'img/cards/trebol/k_de_trebol.svg';
      cardValue = 51;
      break;
  }
  return cardValue;
}