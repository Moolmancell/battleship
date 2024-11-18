export function Ship(l) {
    const length = l;
    let hits = 0;

    const gotHit = () => {
        if (hits < length) hits++;
    };

    const isSunk = () => hits >= length;

    return {
        get length() {
            return length;
        },
        get hits() {
            return hits;
        },
        get isSunk() {
            return isSunk();
        },
        gotHit
    };
}