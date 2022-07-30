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
  if((cpuHand == 2 || cpuHand == 3) && cpuPoints == userPoints && (cpuPoints >= 17 && userPoints >= 17)) {
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
  if(userPoints >= 17 && cpuPoints >= 17 && (cpuHand == 2 || cpuHand == 3)) {
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