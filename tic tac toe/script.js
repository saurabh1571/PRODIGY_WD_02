let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cell) {
    const cellIndex = Array.from(document.querySelectorAll(".cell")).indexOf(cell);

    if (board[cellIndex] === "" && !gameOver) {
        board[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === "X" ? "red" : "blue";
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkWinner();
    }
}

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.getElementById("message").textContent = `Player ${board[a]} wins!`;
            return;
        }
    }

    if (!board.includes("") && !gameOver) {
        gameOver = true;
        document.getElementById("message").textContent = "It's a draw!";
    }
}

function resetBoard() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.textContent = "";
        cell.style.color = "";
    });
    document.getElementById("message").textContent = "";
}
