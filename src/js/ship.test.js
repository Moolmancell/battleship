import { Ship } from "./ship";

test('Create Ship', () => {
    let ship1 = Ship(5);
    expect(ship1.length).toBe(5);
    let ship2 = Ship(3);
    expect(ship2.length).toBe(3);
});

test('Hit Ship', () => {
    let ship1 = Ship(3);
    ship1.gotHit();
    ship1.gotHit();
    ship1.gotHit(); 
    expect(ship1.hits).toBe(3);
    
    let ship2 = Ship(3);
    ship2.gotHit();
    ship2.gotHit();
    ship2.gotHit();
    ship2.gotHit();
    expect(ship2.hits).toBe(3);
});

test('Sunk Ship', () => {
    let ship1 = Ship(3);
    ship1.gotHit();
    ship1.gotHit();
    ship1.gotHit(); 
    expect(ship1.isSunk).toBe(true); 
});