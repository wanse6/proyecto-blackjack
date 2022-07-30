function gameDecision() {
    switch(hand){
        case 2:
            // IF USER MAKE BLACKJACK
            if(userPoints == 21){
                roundWon++;
                // document.getElementById('rounds-won').innerText = roundWon;
                disableButtons();
                
                console.log('BLACKJACK - USER WIN');
                userTimeout = setTimeout(userWin, COUNTDOWN);
                userWon = true;
                stopIt = true;
            }
            break; 
    
        case 3:
            // IF USER BUST 21 POINTS
            if(userPoints > 21 && stopIt != true){
                roundLose++;
                // document.getElementById('rounds-lose').innerText = roundLose;
                disableButtons();
    
                console.log('USER BUSTED - CPU WIN');
                cpuTimeout = setTimeout(cpuWin, COUNTDOWN);
                stopIt = true;
            }
    
            // IF USER MAKE 21 POINTS
            if(userPoints == 21 && stopIt != true) {
                disableButtons();
                cpuTurn();
                stopIt = true;
            }
            break; 
    
        case 4:
            // IF USER BUST 21 POINTS
            if(userPoints > 21 && stopIt != true){
                roundLose++;
                // document.getElementById('rounds-lose').innerText = roundLose;
                disableButtons();
    
                console.log('USER BUSTED - CPU WIN');
                cpuTimeout = setTimeout(cpuWin, COUNTDOWN);
                stopIt = true;
            }
    
            // IF USER COME UP TO LAST HAND WITH 21 OR LESS POINTS
            if(userPoints <= 21 && stopIt != true){
                disableButtons();
                cpuTurn();
                stopIt = true;
            }

            // IF USER MAKE 21 POINTS
            if(userPoints == 21 && stopIt != true) {
                disableButtons();
                cpuTurn();
                stopIt = true;
            }
            break; 
    }

    switch(cpuHand) {
        case 2:
            // IF CPU MAKE BLACKJACK
            if(cpuPoints ==  21 && stopCpu != true){
                roundLose++;
                // document.getElementById('rounds-lose').innerText = roundLose;
                disableButtons();
    
                console.log('BLACKJACK - CPU WIN');
                cpuTimeout = setTimeout(cpuWin, COUNTDOWN);
                stopCpu = true;
            }
    
            // IF CPU POINTS ARE EQUAL TO USER POINTS AND BOTH ARE MORE THAN 17
            if(cpuPoints == userPoints && cpuPoints >= 17 && stopCpu != true) {
                disableButtons();
    
                console.log('TIE - PUSH');
                tieTimeout = setTimeout(push, COUNTDOWN);
                stopCpu = true;
            }
    
            // IF CPU POINTS ARE GREATER THAN USER POINTS
            if(cpuPoints > userPoints && stopCpu != true) {
                roundLose++;
                // document.getElementById('rounds-lose').innerText = roundLose;
                disableButtons();
    
                console.log('CPU WIN');
                cpuTimeout = setTimeout(cpuWin, COUNTDOWN);
                stopCpu = true;
            }

            // IF CPU POINTS ARE LOWER THAN USER POINTS AND BOTH ARE MORE THAN 17
            if(cpuPoints < userPoints && cpuPoints >= 17 && stopCpu != true) {
                roundWon++;
                // document.getElementById('rounds-won').innerText = roundWon;
                disableButtons();
                
                console.log('USER WIN');
                userTimeout = setTimeout(userWin, COUNTDOWN);
                userWon = true;
                stopCpu = true;
            }
            break; 
    
        case 3:
            // IF CPU BUST 21 POINTS
            if(cpuPoints > 21 && stopCpu != true) {
                roundWon++;
                // document.getElementById('rounds-won').innerText = roundWon;
                disableButtons();
                
                console.log('CPU BUSTED - USER WIN');
                userTimeout = setTimeout(userWin, COUNTDOWN);
                userWon = true;
                stopCpu = true;
            }
    
            // IF CPU POINTS ARE EQUAL TO USER POINTS AND BOTH ARE MORE THAN 17
            if(cpuPoints == userPoints && cpuPoints >= 17 && stopCpu != true) {
                disableButtons();
    
                console.log('TIE - PUSH');
                tieTimeout = setTimeout(push, COUNTDOWN);
                stopCpu = true;
            }
    
            // IF CPU POINTS ARE GREATER THAN USER POINTS
            if(cpuPoints > userPoints && stopCpu != true) {
                roundLose++;
                // document.getElementById('rounds-lose').innerText = roundLose;
                disableButtons();
                
                console.log('CPU WIN');
                cpuTimeout = setTimeout(cpuWin, COUNTDOWN);
                stopCpu = true;
            }

            // IF CPU POINTS ARE LOWER THAN USER POINTS AND BOTH ARE MORE THAN 17
            if(cpuPoints < userPoints && cpuPoints >= 17 && stopCpu != true) {
                roundWon++;
                // document.getElementById('rounds-won').innerText = roundWon;
                disableButtons();
                
                console.log('USER WIN');
                userTimeout = setTimeout(userWin, COUNTDOWN);
                userWon = true;
                stopCpu = true;
            }
            break; 
    
        case 4:
            // IF CPU BUST 21 POINTS
            if(cpuPoints > 21 && stopCpu != true) {
                roundWon++;
                // document.getElementById('rounds-won').innerText = roundWon;
                disableButtons();
                
                console.log('CPU BUSTED - USER WIN');
                userTimeout = setTimeout(userWin, COUNTDOWN);
                userWon = true;
                stopCpu = true;
            }
    
            // IF CPU POINTS ARE EQUAL TO USER POINTS AND BOTH ARE MORE THAN 17
            if(cpuPoints == userPoints && cpuPoints >= 17 && stopCpu != true) {
                disableButtons();
    
                console.log('TIE - PUSH');
                tieTimeout = setTimeout(push, COUNTDOWN);
                stopCpu = true;
            }
            
            // IF CPU POINTS ARE GREATER THAN USER POINTS
            if(cpuPoints > userPoints && stopCpu != true) {
                roundLose++;
                // document.getElementById('rounds-lose').innerText = roundLose;
                disableButtons();
                
                console.log('CPU WIN');
                cpuTimeout = setTimeout(cpuWin, COUNTDOWN);
                stopCpu = true;
            }

            // IF CPU POINTS ARE LOWER THAN USER POINTS
            if(cpuPoints < userPoints && stopCpu != true) {
                roundWon++;
                // document.getElementById('rounds-won').innerText = roundWon;
                disableButtons();
                
                console.log('USER WIN');
                userTimeout = setTimeout(userWin, COUNTDOWN);
                userWon = true;
                stopCpu = true;
            }
            break;
    }
}