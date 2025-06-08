/**
 * Tic Tac Toe Game - Command Line Interface
 */
const readline = require('readline');
const TicTacToe = require('./tictactoe');

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create a new game instance
const game = new TicTacToe();

// Display welcome message and instructions
console.log('\n===== TIC TAC TOE =====');
console.log('Welcome to Tic Tac Toe!');
console.log('Enter a position (0-8) to make a move.');
console.log('The board positions are numbered as follows:');
console.log(' -------------');
console.log(' | 0 | 1 | 2 |');
console.log(' -------------');
console.log(' | 3 | 4 | 5 |');
console.log(' -------------');
console.log(' | 6 | 7 | 8 |');
console.log(' -------------');
console.log('\nPlayer X starts the game.');

// Display the initial board
game.displayBoard();

// Main game loop
function promptMove() {
    if (!game.isGameActive()) {
        rl.question('Play again? (y/n): ', (answer) => {
            if (answer.toLowerCase() === 'y') {
                game.restartGame();
                game.displayBoard();
                promptMove();
            } else {
                console.log('Thanks for playing!');
                rl.close();
            }
        });
        return;
    }
    
    rl.question(`Player ${game.getCurrentPlayer()}, enter position (0-8) or 'q' to quit: `, (input) => {
        if (input.toLowerCase() === 'q') {
            console.log('Game ended by player.');
            rl.close();
            return;
        }
        
        const position = parseInt(input);
        
        if (isNaN(position)) {
            console.log('Invalid input. Please enter a number between 0 and 8.');
            promptMove();
            return;
        }
        
        if (game.makeMove(position)) {
            game.displayBoard();
        }
        
        promptMove();
    });
}

// Start the game
promptMove();