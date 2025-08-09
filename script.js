const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
const computerHTML = document.querySelector('.computer-pick');
const playerHTML = document.querySelector('.player-pick');
const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');
const modal = document.getElementById('modal');
const no = document.getElementById('no');
const yes = document.getElementById('yes')
const score = {
  player: JSON.parse(localStorage.getItem('RPSScore')).player || 0,
  computer: JSON.parse(localStorage.getItem('RPSScore')).computer || 0
}

computerScore.innerHTML = `<span>Computer:</span> ${JSON.parse(localStorage.getItem('RPSScore')).computer}` || '<span>Computer:</span> ' + 0;
playerScore.innerHTML = `<span>Player:</span> ${JSON.parse(localStorage.getItem('RPSScore')).player}` || '<span>Player: </span>' + 0

function playGame(playerChoice){
  const computerChoice = pickComputerChoice();
  if(playerChoice === computerChoice){
    result.innerHTML = "IT'S A TIE!"
    result.classList = 'tie'
    return;
  } else{
    switch(playerChoice){
      case 'rock':
        if(computerChoice === 'scissors'){
          result.innerHTML = 'YOU WIN!'
          score.player++;
          updateScore()
          getScore()
          result.classList = 'win'
          break
        } else{
          result.innerHTML = 'YOU LOSE'
          score.computer++;
          updateScore()
          getScore()
          result.classList = 'lose'
          break
        }
      case "paper":
        if(computerChoice === 'rock'){
          result.innerHTML = 'YOU WIN!'
          score.player++;
          updateScore();
          getScore();
          result.classList = 'win'
          break
        } else{
          result.innerHTML = 'YOU LOSE!'
          score.computer++;
          updateScore();
          getScore();
          result.classList = 'lose'
          break
        }
      case 'scissors':
        if(computerChoice === 'paper'){
          result.innerHTML = 'YOU WIN!';
          score.player++;
          updateScore()
          getScore()
          result.classList = 'win'
          break
        } else{
          result.innerHTML = 'YOU LOSE!'
          score.computer++;
          updateScore()
          getScore();
          result.classList = 'lose'
          break
        }
    }
  }
}

function pickComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if(computerChoice === 1){
    computerHTML.innerHTML = '<span>Computer</span> ✊'
    return 'rock';
  } else if(computerChoice === 2){
    computerHTML.innerHTML = '<span>Computer</span> ✋'
    return 'paper'
  } else if(computerChoice === 3){
    computerHTML.innerHTML = '<span>Computer</span> ✌️'
    return 'scissors'
  }
}

rock.addEventListener('click', ()=>{
  playerHTML.innerHTML = '<span>You</span> ✊'
  playGame('rock')
})

paper.addEventListener('click', ()=>{
  playerHTML.innerHTML = '<span>You</span> ✋'
  playGame('paper')
})

scissors.addEventListener('click', ()=>{
  playerHTML.innerHTML='<span>You</span> ✌️'
  playGame('scissors')
})

function updateScore(){
  localStorage.setItem('RPSScore', JSON.stringify(score));
}

function getScore(){
  const scores = JSON.parse(localStorage.getItem('RPSScore'));
  computerScore.innerHTML = '<span>Computer:</span> ' + score.computer;
  playerScore.innerHTML = '<span>You:</span> ' + score.player
}

document.querySelector('#reset').addEventListener('click', () =>{
  modal.style.top = '0'
});

no.addEventListener('click', ()=>{
  modal.style.top = '-20rem'
})

yes.addEventListener('click', ()=>{
  reset()
  modal.style.top = '-20rem'
})

function reset(){
  score.player = 0;
  score.computer = 0;
  updateScore();
  getScore();
  result.innerHTML = ''
  playerHTML.innerHTML = ''
  computerHTML.innerHTML = ''
}