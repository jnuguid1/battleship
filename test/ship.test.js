import { Ship } from '../src/ship.js';

test('Hit function increases hits by 1', () => {
  const myShip = Ship();
  myShip.hit();
  expect(myShip.getHits()).toBe(1);
});

test('Two hit functions increases hits by 2', () => {
  const myShip = Ship();
  myShip.hit();
  myShip.hit();
  expect(myShip.getHits()).toBe(2);
});

test ('isSunk returns false after no hits', () => {
  const myShip = Ship(1);
  expect(myShip.isSunk()).toBe(false);
});

test ('isSunk of ship length 1 returns true after 1 hit', () => {
  const myShip = Ship(1);
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
});

test ('isSunk of ship length 2 returns false after 1 hit', () => {
  const myShip = Ship(2);
  myShip.hit();
  expect(myShip.isSunk()).toBe(false);
})

test ('isSunk of ship length 1 returns true after 2 hit calls', () => {
  const myShip = Ship(1);
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
})