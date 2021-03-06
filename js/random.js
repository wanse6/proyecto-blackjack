// RANDOMIZING CARDS
function randomCard(who, repeatedID, repeatedID2, repeatedID3, repeatedID4, repeatedID5, repeatedID6, repeatedID7, repeatedID8) {
    random = Math.floor(Math.random() * 52);
  
    if (who == cpu) {
      console.log('CPU Card ID: ' + random);
      } else {
        console.log('USER Card ID: ' + random);
        }
  
    while (random == cardID || random == repeatedID || random == repeatedID2 || random == repeatedID3 || random == repeatedID4 || random == repeatedID5 || random == repeatedID6 || random == repeatedID7 || random == repeatedID8) {
      if (random == 51) {
        random = random - 1;
      } else {
        random = random + 1;
      }
    }
  
  
    if (hand == 1) {
      userCardPosition = 'user-one';
    } else if (hand == 2) {
      userCardPosition = 'user-two';
    } else if (hand == 3) {
      userCardPosition = 'user-three';
    } else if (hand == 4) {
      userCardPosition = 'user-four';
    }

    if (cpuHand == 1) {
      cpuCardPosition = 'cpu-one';
    } else if (cpuHand == 2) {
      cpuCardPosition = 'cpu-two';
    } else if (cpuHand == 3) {
      cpuCardPosition = 'cpu-three';
    } else if (cpuHand == 4) {
      cpuCardPosition = 'cpu-four';
    }
  
    switch (random) {
      case 0:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/corazon/az_de_corazon.svg';
          cardID = 0;
          if(userPoints < 11){
            userCardPoints = 11;
          } else if(userPoints >= 11){
            userCardPoints = 1;
          }
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/corazon/az_de_corazon.svg';
          cardID = 0;
          if(cpuPoints < 11){
            cpuCardPoints = 11;
          } else if(cpuPoints >= 11) {
            cpuCardPoints = 1;
          }
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
          if(userPoints < 11){
            userCardPoints = 11;
          } else if(userPoints >= 11){
            userCardPoints = 1;
          }
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/diamante/az_de_diamante.svg';
          cardID = 13;
          if(cpuPoints < 11){
            cpuCardPoints = 11;
          } else if(cpuPoints >= 11) {
            cpuCardPoints = 1;
          }
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
          document.getElementById(userCardPosition).src = 'img/cards/pica/az_de_pica.svg';
          cardID = 26;
          if(userPoints < 11){
            userCardPoints = 11;
          } else if(userPoints >= 11){
            userCardPoints = 1;
          }
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/az_de_pica.svg';
          cardID = 26;
          if(cpuPoints < 11){
            cpuCardPoints = 11;
          } else if(cpuPoints >= 11) {
            cpuCardPoints = 1;
          }
        }
        break;
      case 27:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/dos_de_pica.svg';
          cardID = 27;
          userCardPoints = 2;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/dos_de_pica.svg';
          cardID = 27;
          cpuCardPoints = 2;
        }
        break;
      case 28:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/tres_de_pica.svg';
          cardID = 28;
          userCardPoints = 3;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/tres_de_pica.svg';
          cardID = 28;
          cpuCardPoints = 3;
        }
        break;
      case 29:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/cuatro_de_pica.svg';
          cardID = 29;
          userCardPoints = 4;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/cuatro_de_pica.svg';
          cardID = 29;
          cpuCardPoints = 4;
        }
        break;
      case 30:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/cinco_de_pica.svg';
          cardID = 30;
          userCardPoints = 5;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/cinco_de_pica.svg';
          cardID = 30;
          cpuCardPoints = 5;
        }
        break;
      case 31:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/seis_de_pica.svg';
          cardID = 31;
          userCardPoints = 6;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/seis_de_pica.svg';
          cardID = 31;
          cpuCardPoints = 6;
        }
        break;
      case 32:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/siete_de_pica.svg';
          cardID = 32;
          userCardPoints = 7;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/siete_de_pica.svg';
          cardID = 32;
          cpuCardPoints = 7;
        }
        break;
      case 33:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/ocho_de_pica.svg';
          cardID = 33;
          userCardPoints = 8;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/ocho_de_pica.svg';
          cardID = 33;
          cpuCardPoints = 8;
        }
        break;
      case 34:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/nueve_de_pica.svg';
          cardID = 34;
          userCardPoints = 9;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/nueve_de_pica.svg';
          cardID = 34;
          cpuCardPoints = 9;
        }
        break;
      case 35:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/diez_de_pica.svg';
          cardID = 35;
          userCardPoints = 10;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/diez_de_pica.svg';
          cardID = 35;
          cpuCardPoints = 10;
        }
        break;
      case 36:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/j_de_pica.svg';
          cardID = 36;
          userCardPoints = 10;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/j_de_pica.svg';
          cardID = 36;
          cpuCardPoints = 10;
        }
        break;
      case 37:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/q_de_pica.svg';
          cardID = 37;
          userCardPoints = 10;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/q_de_pica.svg';
          cardID = 37;
          cpuCardPoints = 10;
        }
        break;
      case 38:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/pica/k_de_pica.svg';
          cardID = 38;
          userCardPoints = 10;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/pica/k_de_pica.svg';
          cardID = 38;
          cpuCardPoints = 10;
        }
        break;
      case 39:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/az_de_trebol.svg';
          cardID = 39;
          if(userPoints < 11){
            userCardPoints = 11;
          } else if(userPoints >= 11){
            userCardPoints = 1;
          }
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/az_de_trebol.svg';
          cardID = 39;
          if(cpuPoints < 11){
            cpuCardPoints = 11;
          } else if(cpuPoints >= 11) {
            cpuCardPoints = 1;
          }
        }
        break;
      case 40:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/dos_de_trebol.svg';
          cardID = 40;
          userCardPoints = 2;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/dos_de_trebol.svg';
          cardID = 40;
          cpuCardPoints = 2;
        }
        break;
      case 41:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/tres_de_trebol.svg';
          cardID = 41;
          userCardPoints = 3;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/tres_de_trebol.svg';
          cardID = 41;
          cpuCardPoints = 3;
        }
        break;
      case 42:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/cuatro_de_trebol.svg';
          cardID = 42;
          userCardPoints = 4;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/cuatro_de_trebol.svg';
          cardID = 42;
          cpuCardPoints = 4;
        }
        break;
      case 43:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/cinco_de_trebol.svg';
          cardID = 43;
          userCardPoints = 5;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/cinco_de_trebol.svg';
          cardID = 43;
          cpuCardPoints = 5;
        }
        break;
      case 44:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/seis_de_trebol.svg';
          cardID = 44;
          userCardPoints = 6;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/seis_de_trebol.svg';
          cardID = 44;
          cpuCardPoints = 6;
        }
        break;
      case 45:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/siete_de_trebol.svg';
          cardID = 45;
          userCardPoints = 7;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/siete_de_trebol.svg';
          cardID = 45;
          cpuCardPoints = 7;
        }
        break;
      case 46:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/ocho_de_trebol.svg';
          cardID = 46;
          userCardPoints = 8;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/ocho_de_trebol.svg';
          cardID = 46;
          cpuCardPoints = 8;
        }
        break;
      case 47:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/nueve_de_trebol.svg';
          cardID = 47;
          userCardPoints = 9;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/nueve_de_trebol.svg';
          cardID = 47;
          cpuCardPoints = 9;
        }
        break;
      case 48:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/diez_de_trebol.svg';
          cardID = 48;
          userCardPoints = 10;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/diez_de_trebol.svg';
          cardID = 48;
          cpuCardPoints = 10;
        }
        break;
      case 49:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/j_de_trebol.svg';
          cardID = 49;
          userCardPoints = 10;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/j_de_trebol.svg';
          cardID = 49;
          cpuCardPoints = 10;
        }
        break;
      case 50:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/q_de_trebol.svg';
          cardID = 50;
          userCardPoints = 10;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/q_de_trebol.svg';
          cardID = 50;
          cpuCardPoints = 10;
        }
        break;
      case 51:
        if (who == user) {
          document.getElementById(userCardPosition).src = 'img/cards/trebol/k_de_trebol.svg';
          cardID = 51;
          userCardPoints = 10;
        } else if (who == cpu) {
          document.getElementById(cpuCardPosition).src = 'img/cards/trebol/k_de_trebol.svg';
          cardID = 51;
          cpuCardPoints = 10;
        }
        break;
    }
    if(who == cpu){
      console.log('CPU CARD POINTS: ' + cpuCardPoints);
    } else {
      console.log('USER CARD POINTS: ' + userCardPoints);
    }
  
    return cardID;
  }