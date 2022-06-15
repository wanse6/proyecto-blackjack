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
function randomCard() {
  random = Math.floor(Math.random() * 52);
  console.log(random);

  switch (random) {
    case 0:
      document.getElementById('cpu-one').src = 'img/cards/corazon/az_de_corazon.svg';
      break;
    case 1:
      document.getElementById('cpu-one').src = 'img/cards/corazon/dos_de_corazon.svg';
      break;
    case 2:
      document.getElementById('cpu-one').src = 'img/cards/corazon/tres_de_corazon.svg';
      break;
    case 3:
      document.getElementById('cpu-one').src = 'img/cards/corazon/cuatro_de_corazon.svg';
      break;
    case 4:
      document.getElementById('cpu-one').src = 'img/cards/corazon/cinco_de_corazon.svg';
      break;
    case 5:
      document.getElementById('cpu-one').src = 'img/cards/corazon/seis_de_corazon.svg';
      break;
    case 6:
      document.getElementById('cpu-one').src = 'img/cards/corazon/siete_de_corazon.svg';
      break;
    case 7:
      document.getElementById('cpu-one').src = 'img/cards/corazon/ocho_de_corazon.svg';
      break;
    case 8:
      document.getElementById('cpu-one').src = 'img/cards/corazon/nueve_de_corazon.svg';
      break;
    case 9:
      document.getElementById('cpu-one').src = 'img/cards/corazon/diez_de_corazon.svg';
      break;
    case 10:
      document.getElementById('cpu-one').src = 'img/cards/corazon/j_de_corazon.svg';
      break;
    case 11:
      document.getElementById('cpu-one').src = 'img/cards/corazon/q_de_corazon.svg';
      break;
    case 12:
      document.getElementById('cpu-one').src = 'img/cards/corazon/k_de_corazon.svg';
      break;
    case 13:
      document.getElementById('cpu-one').src = 'img/cards/diamante/az_de_diamante.svg';
      break;
    case 14:
      document.getElementById('cpu-one').src = 'img/cards/diamante/dos_de_diamante.svg';
      break;
    case 15:
      document.getElementById('cpu-one').src = 'img/cards/diamante/tres_de_diamante.svg';
      break;
    case 16:
      document.getElementById('cpu-one').src = 'img/cards/diamante/cuatro_de_diamante.svg';
      break;
    case 17:
      document.getElementById('cpu-one').src = 'img/cards/diamante/cinco_de_diamante.svg';
      break;
    case 18:
      document.getElementById('cpu-one').src = 'img/cards/diamante/seis_de_diamante.svg';
      break;
    case 19:
      document.getElementById('cpu-one').src = 'img/cards/diamante/siete_de_diamante.svg';
      break;
    case 20:
      document.getElementById('cpu-one').src = 'img/cards/diamante/ocho_de_diamante.svg';
      break;
    case 21:
      document.getElementById('cpu-one').src = 'img/cards/diamante/nueve_de_diamante.svg';
      break;
    case 22:
      document.getElementById('cpu-one').src = 'img/cards/diamante/diez_de_diamante.svg';
      break;
    case 23:
      document.getElementById('cpu-one').src = 'img/cards/diamante/j_de_diamante.svg';
      break;
    case 24:
      document.getElementById('cpu-one').src = 'img/cards/diamante/q_de_diamante.svg';
      break;
    case 25:
      document.getElementById('cpu-one').src = 'img/cards/diamante/k_de_diamante.svg';
      break;
    case 26:
      document.getElementById('cpu-one').src = 'img/cards/pica/az_de_pica.svg';
      break;
    case 27:
      document.getElementById('cpu-one').src = 'img/cards/pica/dos_de_pica.svg';
      break;
    case 28:
      document.getElementById('cpu-one').src = 'img/cards/pica/tres_de_pica.svg';
      break;
    case 29:
      document.getElementById('cpu-one').src = 'img/cards/pica/cuatro_de_pica.svg';
      break;
    case 30:
      document.getElementById('cpu-one').src = 'img/cards/pica/cinco_de_pica.svg';
      break;
    case 31:
      document.getElementById('cpu-one').src = 'img/cards/pica/seis_de_pica.svg';
      break;
    case 32:
      document.getElementById('cpu-one').src = 'img/cards/pica/siete_de_pica.svg';
      break;
    case 33:
      document.getElementById('cpu-one').src = 'img/cards/pica/ocho_de_pica.svg';
      break;
    case 34:
      document.getElementById('cpu-one').src = 'img/cards/pica/nueve_de_pica.svg';
      break;
    case 35:
      document.getElementById('cpu-one').src = 'img/cards/pica/diez_de_pica.svg';
      break;
    case 36:
      document.getElementById('cpu-one').src = 'img/cards/pica/j_de_pica.svg';
      break;
    case 37:
      document.getElementById('cpu-one').src = 'img/cards/pica/q_de_pica.svg';
      break;
    case 38:
      document.getElementById('cpu-one').src = 'img/cards/pica/k_de_pica.svg';
      break;
    case 39:
      document.getElementById('cpu-one').src = 'img/cards/trebol/az_de_trebol.svg';
      break;
    case 40:
      document.getElementById('cpu-one').src = 'img/cards/trebol/dos_de_trebol.svg';
      break;
    case 41:
      document.getElementById('cpu-one').src = 'img/cards/trebol/tres_de_trebol.svg';
      break;
    case 42:
      document.getElementById('cpu-one').src = 'img/cards/trebol/cuatro_de_trebol.svg';
      break;
    case 43:
      document.getElementById('cpu-one').src = 'img/cards/trebol/cinco_de_trebol.svg';
      break;
    case 44:
      document.getElementById('cpu-one').src = 'img/cards/trebol/seis_de_trebol.svg';
      break;
    case 45:
      document.getElementById('cpu-one').src = 'img/cards/trebol/siete_de_trebol.svg';
      break;
    case 46:
      document.getElementById('cpu-one').src = 'img/cards/trebol/ocho_de_trebol.svg';
      break;
    case 47:
      document.getElementById('cpu-one').src = 'img/cards/trebol/nueve_de_trebol.svg';
      break;
    case 48:
      document.getElementById('cpu-one').src = 'img/cards/trebol/diez_de_trebol.svg';
      break;
    case 49:
      document.getElementById('cpu-one').src = 'img/cards/trebol/j_de_trebol.svg';
      break;
    case 50:
      document.getElementById('cpu-one').src = 'img/cards/trebol/q_de_trebol.svg';
      break;
    case 51:
      document.getElementById('cpu-one').src = 'img/cards/trebol/k_de_trebol.svg';
      break;
  }
}