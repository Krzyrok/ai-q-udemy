# Tic Tac Toe Game

A simple Tic Tac Toe game implemented in JavaScript, available in both browser and Node.js versions.

## Features
- Interactive 3x3 game board
- Two-player gameplay (X and O)
- Win detection
- Game state tracking
- Restart game functionality

## Browser Version

### How to Play in Browser
1. Open `index.html` in your browser
2. Players take turns clicking on the board to place their mark (X or O)
3. The game will detect when a player has won or when the game ends in a draw
4. Click the "Restart Game" button to play again

## Node.js Version

### Requirements
- Node.js installed on your system

### How to Play in Terminal
1. Run `node main.js` in your terminal
2. Players take turns entering a position (0-8) to place their mark
3. The game will detect when a player has won or when the game ends in a draw
4. Choose to play again when prompted

### Running Tests
To run the tests for the Node.js version:
```
node tictactoe.test.js
```

## Board Layout
The positions on the board are numbered as follows:
```
 -------------
 | 0 | 1 | 2 |
 -------------
 | 3 | 4 | 5 |
 -------------
 | 6 | 7 | 8 |
 -------------
```
