let player1Score = 0;
let player2Score = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function chooseWinner() {
    for (let roll = 0; roll < 3; roll++) {
        player1Score += rollDice();
        player2Score += rollDice();
    }

    console.log("Player 1 score:", player1Score);
    console.log("Player 2 score:", player2Score);

    if (player1Score > player2Score) {
        console.log("Player 1 wins!");
    } else if (player1Score < player2Score) {
        console.log("Player 2 wins!");
    } else {
        console.log("Friendship wins!");
    }
}

chooseWinner();