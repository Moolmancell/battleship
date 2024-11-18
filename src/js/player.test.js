import { Player } from "./player";

const player = Player();

test('Create Gameboard for Player', () => {
    expect(player.gameboard.getboard()).toStrictEqual(Array.apply(null, Array(10)).map(e => Array(10)))
});