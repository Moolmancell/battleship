import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

let gameboard1 = Gameboard();
let ship1 = Ship(4)

test('Place Ships on Gameboard', () => {
    gameboard1.placeShip(3, 3, ship1)
    gameboard1.placeShip(3, 4, ship1)
    gameboard1.placeShip(3, 5, ship1)
    gameboard1.placeShip(3, 6, ship1)
    expect(gameboard1.getboard()[3][3]).toBe(ship1);
    expect(gameboard1.getboard()[3][4]).toBe(ship1);
    expect(gameboard1.getboard()[3][5]).toBe(ship1);
    expect(gameboard1.getboard()[3][6]).toBe(ship1);
    expect(gameboard1.getboard()[1][3]).toBe(undefined)
    expect(gameboard1.placeShip(3, 11, ship1)).toBe("Out of Bounds");
});

test('Test Attacks', () => {
    gameboard1.receiveAttack(1,1, function(target) {
        target.gotHit();
    });
    expect(gameboard1.getboard()[1][1]).toBe("X");

    gameboard1.receiveAttack(3,3, function(target) {
        target.gotHit();
    });
    expect(ship1.hits).toBe(1)
    expect(gameboard1.getboard()[3][3]).toBe("Hit");

    gameboard1.receiveAttack(3,4, function(target) {
        target.gotHit();
    });
    expect(ship1.hits).toBe(2)
    expect(gameboard1.getboard()[3][4]).toBe("Hit");

    gameboard1.receiveAttack(3,5, function(target) {
        target.gotHit();
    });
    expect(ship1.hits).toBe(3)
    expect(gameboard1.getboard()[3][5]).toBe("Hit");

    gameboard1.receiveAttack(3,6, function(target) {
        target.gotHit();
    });
    expect(ship1.hits).toBe(4)
    expect(gameboard1.getboard()[3][6]).toBe("Hit");

    expect(gameboard1.receiveAttack(1,11, function(target) {
        target.gotHit();
    })).toBe("Out of Bounds");
});

test('Its sunken', () => {
    expect(gameboard1.allShipsSunk()).toBe(true);
});