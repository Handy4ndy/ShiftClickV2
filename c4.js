function setPlayerNames() {
  const player1Name = prompt("Enter Player 1 name:");
  const player2Name = prompt("Enter Player 2 name:");

  // Update the player names in the textarea
  const displayScore = document.querySelector(".displayScore");
  displayScore.textContent = `Scores:\n${player1Name}: 0\n${player2Name}: 0`;

  // Save the player names in localStorage to persist them across page refreshes
  localStorage.setItem("player1Name", player1Name);
  localStorage.setItem("player2Name", player2Name);

  // Initialize the scores in localStorage to 0
  localStorage.setItem("player1Score", 0);
  localStorage.setItem("player2Score", 0);
}

function updateScores(player1Score, player2Score) {
  const player1Name = localStorage.getItem("player1Name") || "Player 1";
  const player2Name = localStorage.getItem("player2Name") || "Player 2";
  const displayScore = document.querySelector(".displayScore");
  displayScore.textContent = `Scores:\n${player1Name}: ${player1Score}\n${player2Name}: ${player2Score}`;
}


  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const cells = document.querySelectorAll(".cell");
  
    const rows = 6;
    const cols = 7;
    let board = Array.from(Array(rows), () => new Array(cols).fill(0));
  
    let currentPlayer = 1; // Player 1 starts
  
    function checkWin(row, col) {
      const directions = [
        [0, 1], // horizontal
        [1, 0], // vertical
        [1, 1], // diagonal (top-left to bottom-right)
        [-1, 1], // diagonal (bottom-left to top-right)
      ];
  
      for (const [dx, dy] of directions) {
        let count = 1;
        for (let i = 1; i < 4; i++) {
          const newRow = row + i * dx;
          const newCol = col + i * dy;
          if (
            newRow >= 0 && newRow < rows &&
            newCol >= 0 && newCol < cols &&
            board[newRow][newCol] === currentPlayer
          ) {
            count++;
          } else {
            break;
          }
        }
  
        for (let i = 1; i < 4; i++) {
          const newRow = row - i * dx;
          const newCol = col - i * dy;
          if (
            newRow >= 0 && newRow < rows &&
            newCol >= 0 && newCol < cols &&
            board[newRow][newCol] === currentPlayer
          ) {
            count++;
          } else {
            break;
          }
        }
  
        if (count >= 4) {
          return true;
        }
      }
  
      return false;
    }
  
    function makeMove(col) {
      for (let row = rows - 1; row >= 0; row--) {
        if (board[row][col] === 0) {
          board[row][col] = currentPlayer;
          cells[row * cols + col].classList.add(`player${currentPlayer}`);
          if (checkWin(row, col)) {
            setTimeout(() => {
              // Check which player has won and update their score
              if (currentPlayer === 1) {
                alert(`${localStorage.getItem("player1Name")} wins!, ${localStorage.getItem("player2Name")} Try again you got this!`);
                localStorage.setItem("player1Score", Number(localStorage.getItem("player1Score")) + 1);
                updateScores(Number(localStorage.getItem("player1Score")), Number(localStorage.getItem("player2Score")));
              } else {
                alert(`${localStorage.getItem("player2Name")} wins!, ${localStorage.getItem("player1Name")} Try again you got this!`);
                localStorage.setItem("player2Score", Number(localStorage.getItem("player2Score")) + 1);
                updateScores(Number(localStorage.getItem("player1Score")), Number(localStorage.getItem("player2Score")));
              }
        
              resetGame();
            }, 100);
          } else {
            currentPlayer = currentPlayer === 1 ? 2 : 1;
          }
          break;
        }
      }
    }
  
    function resetGame() {
      board = Array.from(Array(rows), () => new Array(cols).fill(0));
      currentPlayer = 1;
      cells.forEach(cell => {
        cell.classList.remove("player1", "player2");
      });
      updateScores(0, 0);
    }
  
    setPlayerNames();
  
    const resetScoreButton = document.getElementById("resetScore");
    resetScoreButton.addEventListener("click", () => {
      localStorage.setItem("player1Score", 0);
      localStorage.setItem("player2Score", 0);
      updateScores(0, 0);
    });
  
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        const col = index % cols;
        makeMove(col);
      });
    });
  
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("player1Name");
      localStorage.removeItem("player2Name");
    });
  });
  