/**
 * Tests for Tic Tac Toe Game
 * 
 * To run these tests:
 * 1. Open the browser console in the game page
 * 2. Call runTests() function
 */

function runTests() {
    console.log('Running Tic Tac Toe tests...');
    
    let passedTests = 0;
    let totalTests = 0;
    
    function assert(condition, message) {
        totalTests++;
        if (condition) {
            console.log(`✅ PASS: ${message}`);
            passedTests++;
        } else {
            console.error(`❌ FAIL: ${message}`);
        }
    }
    
    // Create a fresh game instance for testing
    function createTestGame() {
        const game = new TicTacToe();
        
        // Mock DOM elements
        game.statusDisplay = { textContent: '' };
        game.boardElement = document.createElement('div');
        game.restartButton = document.createElement('button');
        
        // Initialize with empty board
        game.board = Array(9).fill('');
        game.currentPlayer = 'X';
        game.gameActive = true;
        
        return game;
    }
    
    // Test initial state
    const game1 = createTestGame();
    assert(game1.getCurrentPlayer() === 'X', 'Game should start with player X');
    assert(game1.isGameActive() === true, 'Game should be active at start');
    assert(game1.getBoard().every(cell => cell === ''), 'Board should be empty at start');
    
    // Test player switching
    const game2 = createTestGame();
    game2.board[0] = 'X';
    game2.currentPlayer = 'O'; // Simulate a move by X
    assert(game2.getCurrentPlayer() === 'O', 'Current player should be O after X plays');
    
    // Test win detection - horizontal win
    const game3 = createTestGame();
    game3.board = ['X', 'X', 'X', '', '', '', '', '', ''];
    assert(game3.checkWin() === true, 'Should detect horizontal win');
    
    // Test win detection - vertical win
    const game4 = createTestGame();
    game4.board = ['O', '', '', 'O', '', '', 'O', '', ''];
    assert(game4.checkWin() === true, 'Should detect vertical win');
    
    // Test win detection - diagonal win
    const game5 = createTestGame();
    game5.board = ['X', '', '', '', 'X', '', '', '', 'X'];
    assert(game5.checkWin() === true, 'Should detect diagonal win');
    
    // Test draw detection
    const game6 = createTestGame();
    game6.board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    assert(game6.checkDraw() === true, 'Should detect a draw when board is full');
    
    // Test game restart
    const game7 = createTestGame();
    game7.board = ['X', 'O', 'X', '', '', '', '', '', ''];
    game7.restartGame();
    assert(game7.getBoard().every(cell => cell === ''), 'Board should be empty after restart');
    assert(game7.getCurrentPlayer() === 'X', 'Player should be reset to X after restart');
    assert(game7.isGameActive() === true, 'Game should be active after restart');
    
    // Summary
    console.log(`Tests completed: ${passedTests} passed out of ${totalTests} total tests`);
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed!');
    } else {
        console.log(`😞 ${totalTests - passedTests} tests failed.`);
    }
    
    return passedTests === totalTests;
}

// Add instructions for running tests
console.log('Tic Tac Toe tests loaded. Run tests by calling runTests() in the console.');