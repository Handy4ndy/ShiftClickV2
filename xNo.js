const gridCells = document.querySelectorAll('.cell');
const playerXImage = 'x.png';
const playerOImage = 'o.png';
let currentPlayer = true;
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Click event listener for each grid cell
gridCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (!cell.hasChildNodes()) {
            const image = document.createElement('img');
            image.src = currentPlayer ? playerXImage : playerOImage;
            cell.appendChild(image);
            currentPlayer = !currentPlayer;
            checkWin();
        }
    });
});

function checkWin() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const cells = gridCells;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            const winner = currentPlayer ? 'Player O' : 'Player X';
            alert(winner + ' wins!');
            return;
        }
    }
}

document.getElementById('playAgain').addEventListener('click', resetGame);

function resetGame() {
    gridCells.forEach(cell => {
        cell.innerHTML = '';
    });
    currentPlayer = true;
}