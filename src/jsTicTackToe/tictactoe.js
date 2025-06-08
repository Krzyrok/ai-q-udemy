/**
 * Tic Tac Toe Game for Node.js
 */
class TicTacToe {
    constructor() {
        this.board = Array(9).fill(' ');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.winningConditions = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal top-left to bottom-right
            [2, 4, 6]  // Diagonal top-right to bottom-left
        ];
    }
    
    /**
     * Make a move on the board
     * @param {number} position - Position on the board (0-8)
     * @returns {boolean} True if the move was valid
     */
    makeMove(position) {
        // Check if position is valid
        if (position < 0 || position > 8) {
            console.log('Invalid position. Please choose a position between 0 and 8.');
            return false;
        }
        
        // Check if cell is already played or game is not active
        if (this.board[position] !== ' ' || !this.gameActive) {
            console.log('Invalid move. Cell is already taken or game is over.');
            return false;
        }
        
        // Update the board state
        this.board[position] = this.currentPlayer;
        
        // Check if the game is won or drawn
        if (this.checkWin()) {
            console.log(`Player ${this.currentPlayer} has won!`);
            this.gameActive = false;
            return true;
        }
        
        if (this.checkDraw()) {
            console.log("Game ended in a draw!");
            this.gameActive = false;
            return true;
        }
        
        // Switch player
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        console.log(`Player ${this.currentPlayer}'s turn`);
        return true;
    }
    
    /**
     * Check if the current player has won
     * @returns {boolean} True if the current player has won
     */
    checkWin() {
        for (let i = 0; i < this.winningConditions.length; i++) {
            const [a, b, c] = this.winningConditions[i];
            if (
                this.board[a] !== ' ' &&
                this.board[a] === this.board[b] &&
                this.board[a] === this.board[c]
            ) {
                return true;
            }
        }
        return false;
    }
    
    /**
     * Check if the game is a draw
     * @returns {boolean} True if the game is a draw
     */
    checkDraw() {
        return !this.board.includes(' ');
    }
    
    /**
     * Display the current board state
     */
    displayBoard() {
        console.log('\n Current Board:');
        console.log(' -------------');
        for (let i = 0; i < 3; i++) {
            let row = ' | ';
            for (let j = 0; j < 3; j++) {
                row += this.board[i * 3 + j] + ' | ';
            }
            console.log(row);
            console.log(' -------------');
        }
        console.log('');
    }
    
    /**
     * Restart the game
     */
    restartGame() {
        this.board = Array(9).fill(' ');
        this.currentPlayer = 'X';
        this.gameActive = true;
        console.log('Game restarted. Player X starts.');
    }
    
    /**
     * Get the current board state (for testing)
     * @returns {Array} The current board state
     */
    getBoard() {
        return [...this.board];
    }
    
    /**
     * Get the current player (for testing)
     * @returns {string} The current player ('X' or 'O')
     */
    getCurrentPlayer() {
        return this.currentPlayer;
    }
    
    /**
     * Check if the game is active (for testing)
     * @returns {boolean} True if the game is active
     */
    isGameActive() {
        return this.gameActive;
    }
}

module.exports = TicTacToe;