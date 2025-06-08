/**
 * Tests for Tic Tac Toe Game (Node.js version)
 * 
 * To run these tests:
 * node tictactoe.test.js
 */

const TicTacToe = require('./tictactoe');

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
        return new TicTacToe();
    }
    
    // Test initial state
    const game1 = createTestGame();
    assert(game1.getCurrentPlayer() === 'X', 'Game should start with player X');
    assert(game1.isGameActive() === true, 'Game should be active at start');
    assert(game1.getBoard().every(cell => cell === ' '), 'Board should be empty at start');
    
    // Test making a move
    const game2 = createTestGame();
    assert(game2.makeMove(0) === true, 'Valid move should return true');
    assert(game2.getBoard()[0] === 'X', 'Board should be updated after move');
    assert(game2.getCurrentPlayer() === 'O', 'Player should switch after move');
    
    // Test invalid moves
    const game3 = createTestGame();
    game3.makeMove(0); // X plays at position 0
    assert(game3.makeMove(0) === false, 'Should reject move to occupied position');
    assert(game3.makeMove(9) === false, 'Should reject move outside board range');
    
    // Test win detection - horizontal win
    const game4 = createTestGame();
    game4.makeMove(0); // X plays at 0
    game4.makeMove(3); // O plays at 3
    game4.makeMove(1); // X plays at 1
    game4.makeMove(4); // O plays at 4
    assert(game4.makeMove(2) === true, 'X should win with horizontal line');
    assert(game4.isGameActive() === false, 'Game should be inactive after win');
    
    // Test win detection - vertical win
    const game5 = createTestGame();
    game5.makeMove(0); // X plays at 0
    game5.makeMove(1); // O plays at 1
    game5.makeMove(3); // X plays at 3
    game5.makeMove(2); // O plays at 2
    assert(game5.makeMove(6) === true, 'X should win with vertical line');
    assert(game5.isGameActive() === false, 'Game should be inactive after win');
    
    // Test win detection - diagonal win
    const game6 = createTestGame();
    game6.makeMove(0); // X plays at 0
    game6.makeMove(1); // O plays at 1
    game6.makeMove(4); // X plays at 4
    game6.makeMove(2); // O plays at 2
    assert(game6.makeMove(8) === true, 'X should win with diagonal line');
    assert(game6.isGameActive() === false, 'Game should be inactive after win');
    
    // Test draw detection
    const game7 = createTestGame();
    // Fill the board in a way that results in a draw
    game7.makeMove(0); // X plays at 0
    game7.makeMove(1); // O plays at 1
    game7.makeMove(2); // X plays at 2
    game7.makeMove(4); // O plays at 4
    game7.makeMove(7); // X plays at 7
    game7.makeMove(3); // O plays at 3
    game7.makeMove(5); // X plays at 5
    game7.makeMove(8); // O plays at 8
    assert(game7.makeMove(6) === true, 'Last move should complete the game');
    assert(game7.isGameActive() === false, 'Game should be inactive after draw');
    
    // Test game restart
    const game8 = createTestGame();
    game8.makeMove(0);
    game8.restartGame();
    assert(game8.getBoard().every(cell => cell === ' '), 'Board should be empty after restart');
    assert(game8.getCurrentPlayer() === 'X', 'Player should be reset to X after restart');
    assert(game8.isGameActive() === true, 'Game should be active after restart');
    
    // Summary
    console.log(`Tests completed: ${passedTests} passed out of ${totalTests} total tests`);
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed!');
    } else {
        console.log(`😞 ${totalTests - passedTests} tests failed.`);
    }
    
    return passedTests === totalTests;
}

// Run the tests
runTests();