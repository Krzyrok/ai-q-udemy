/**
 * Tic Tac Toe Game
 */
class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.statusDisplay = document.getElementById('status');
        this.boardElement = document.getElementById('board');
        this.restartButton = document.getElementById('restart');
        
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
        
        this.init();
    }
    
    /**
     * Initialize the game
     */
    init() {
        // Add click event listeners to all cells
        document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener('click', () => this.handleCellClick(cell));
        });
        
        // Add click event listener to restart button
        this.restartButton.addEventListener('click', () => this.restartGame());
        
        // Set initial status message
        this.updateStatusMessage();
    }
    
    /**
     * Handle cell click event
     * @param {HTMLElement} cell - The clicked cell
     */
    handleCellClick(cell) {
        const cellIndex = parseInt(cell.getAttribute('data-cell-index'));
        
        // Check if cell is already played or game is not active
        if (this.board[cellIndex] !== '' || !this.gameActive) {
            return;
        }
        
        // Update the board state and UI
        this.board[cellIndex] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLowerCase());
        
        // Check if the game is won or drawn
        if (this.checkWin()) {
            this.statusDisplay.textContent = `Player ${this.currentPlayer} has won!`;
            this.gameActive = false;
            return;
        }
        
        if (this.checkDraw()) {
            this.statusDisplay.textContent = "Game ended in a draw!";
            this.gameActive = false;
            return;
        }
        
        // Switch player
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatusMessage();
    }
    
    /**
     * Check if the current player has won
     * @returns {boolean} True if the current player has won
     */
    checkWin() {
        for (let i = 0; i < this.winningConditions.length; i++) {
            const [a, b, c] = this.winningConditions[i];
            if (
                this.board[a] !== '' &&
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
        return !this.board.includes('');
    }
    
    /**
     * Update the status message
     */
    updateStatusMessage() {
        this.statusDisplay.textContent = `Player ${this.currentPlayer}'s turn`;
    }
    
    /**
     * Restart the game
     */
    restartGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        
        // Reset UI
        document.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
        
        this.updateStatusMessage();
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

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
    
    // Make game accessible globally for testing
    window.ticTacToe = game;
});