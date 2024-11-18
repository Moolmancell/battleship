export function Gameboard() {
    const board = Array.apply(null, Array(10)).map(e => Array(10));
    
    function checkBounds(x, y) {
        return x > 9 || y > 9 || 0 > x || 0 > y;
    }

    function placeShip(x, y, target) {
        if (checkBounds(x, y)) {
            return "Out of Bounds";
        } else {
            board[x][y] = target;
        }
    }

    function allShipsSunk() {
        const ships = new Set();
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] && board[i][j] !== "X" && board[i][j] !== "Hit") {
                    ships.add(board[i][j]);
                }
            }
        }
        return [...ships].every(ship => ship.isSunk());
    }

    function receiveAttack(x, y, callback) {
        if (checkBounds(x, y)) {
            return "Out of Bounds";
        } else {
            if (board[x][y] !== undefined && board[x][y] !== "X") {
                callback(board[x][y]);
                board[x][y] = "Hit";
            } else {
                board[x][y] = "X";
            }
        }
    }

    const getboard = () => board;

    return {getboard, placeShip, receiveAttack, allShipsSunk}
}