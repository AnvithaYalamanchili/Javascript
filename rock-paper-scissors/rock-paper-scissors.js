let score=JSON.parse(localStorage.getItem('score'))||
            {   wins:0,
                losses:0, 
                ties:0
            };
        updateScore();
        
        function resetScore(){
            score.wins=0;
            score.losses=0;
            score.ties=0
            console.log(score)
            localStorage.removeItem('score')
            updateScore();
        }
        
        function playGame(playerMove)
        {
            const computerMove=pickComputerMove()
            let result=''


            if(playerMove==='scissors'){
                if (computerMove === 'rock') 
                { 
                    result = 'You Lose'; 
                } 
                else if (computerMove === 'paper') 
                {
                    result = 'You Win'; 
                }
                else if (computerMove === 'scissors') 
                { 
                    result = 'Tie'; 
                } 
                }
                
            else if(playerMove==='rock'){
                if (computerMove === 'rock') 
                {
                    result = 'Tie';
                } 
                else if (computerMove === 'paper') 
                { 
                    result = 'You Lose'; 
                } 
                else if (computerMove === 'scissors') 
                { 
                    result = 'You Win'; 
                } 
            }

            else if(playerMove==='paper')
            {
                if (computerMove === 'rock') 
                { 
                    result = 'You Win';
                } 
                else if (computerMove === 'paper') 
                {
                    result = 'Tie'; 
                } 
                else if (computerMove === 'scissors') 
                {
                    result = 'You Lose'; 
                } 
            }
            if(result==='You Win')
            {
                score.wins+=1
            }
            else if(result==='Tie'){
                score.ties+=1
            }
            else if(result==='You Lose')
            {
                score.losses+=1
            }
            console.log(score)
            localStorage.setItem('score',JSON.stringify(score));//localStorage only sypports strings

            updateScore();

            document.querySelector('.js-result').innerHTML=`${result}`

            document.querySelector('.js-moves').innerHTML=`you
        <img class="icons" src="images/${playerMove}-emoji.png" alt="">
        <img class="icons" src="images/${computerMove}-emoji.png" alt="">
        computer`
        }

        function updateScore(){
            document.querySelector('.js-score')
                .innerHTML=`Wins:${score.wins},Loses:${score.losses},Ties:${score.ties}`
        }
        
        let computerMove = '';
        function pickComputerMove() {
            const randomNumber = Math.random();
            if (randomNumber >= 0 && randomNumber < 1/3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
                computerMove = 'paper';
            } else {
                computerMove = 'scissors';
            }
            return computerMove
        }
