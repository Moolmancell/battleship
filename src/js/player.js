import { Gameboard } from "./gameboard";

export function Player(mode = "computer") {

    let playerMode;

    if (mode !== "computer" && mode !== "player") {
        throw new Error("Unknown Mode");
    } else {
        playerMode = mode;
    }

    let gameboard = Gameboard();

    return {gameboard, playerMode}
}

const player = Player();