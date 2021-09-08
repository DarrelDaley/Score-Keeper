// Declare variables

const playerOne = {
    score: 0,
    button: document.querySelector("#addPlayerOneScore"),
    scoreBoard: document.querySelector("#playerOne")
}

const playerTwo = {
    score: 0,
    button: document.querySelector("#addPlayerTwoScore"),
    scoreBoard: document.querySelector("#playerTwo")
}

const scorePicker = document.querySelector("#score");
const resetButton = document.querySelector("#resetBtn");
let winningScore = 3;
let isGameOver = false;

//Update Score
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.scoreBoard.classList.add('text-success')
            opponent.scoreBoard.classList.add('text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.scoreBoard.textContent = player.score;
    }
}

//change max score + reset game when points are added
scorePicker.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

//listen for points being added
playerOne.button.addEventListener('click', function () {
    updateScores(playerOne, playerTwo);
})
playerTwo.button.addEventListener('click', function () {
    updateScores(playerTwo, playerOne);
})

//Reset score
resetButton.addEventListener('click', reset)

//reset score
function reset() {
    isGameOver = false;
    for (let player of [playerOne, playerTwo]) {
        player.score = 0;
        player.scoreBoard.textContent = 0;
        player.scoreBoard.classList.remove('text-success', 'text-danger')
        player.button.disabled = false;
    }
}