import { ships } from "./ship";

test('Create Ship', () => {
    expect(ships(3).length).toBe(3);
});