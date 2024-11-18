import { Gameboard } from "./gameboard";

export function Player(mode = "computer") {
    const playerMode = mode;
    let gameboard = Gameboard();

    return {gameboard, playerMode}
}

const player = Player();