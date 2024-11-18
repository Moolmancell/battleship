export function ships(length) {
    const length = length;
    let hitTimes = 0;
    let isSunk = false;

    const hit = () => {
        hitTimes=+1;
    }

    const hasSunk = () => {
        if (hitTimes === length) isSunk = true;
    }

    return {length, hitTimes, isSunk, hit, hasSunk}
}