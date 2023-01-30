import GameBoard from '../src/gameBoard';
import Ship from '../src/ship';

test('Add ship length 1 to game board grid', () => {
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[0,0], Ship(1));
  expect(gb.grid[0][0]).toMatchObject(ship);
});

test('Add ship length 2 to game board grid', () => {
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[0,1], Ship(2));
  expect(gb.grid[0][0]).toMatchObject(ship);
  expect(gb.grid[0][1]).toMatchObject(ship);
});

test('Add vertical ship length 3 to game board grid', () => {
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[0,2], Ship(3));
  expect(gb.grid[0][0]).toMatchObject(ship);
  expect(gb.grid[0][1]).toMatchObject(ship);
  expect(gb.grid[0][2]).toMatchObject(ship);
});

test('Add horizontal ship length 3 to game board grid', () => {
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[2,0], Ship(3));
  expect(gb.grid[0][0]).toMatchObject(ship);
  expect(gb.grid[1][0]).toMatchObject(ship);
  expect(gb.grid[2][0]).toMatchObject(ship);
});

test ('Add invalid diagonal ship', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([0,0], [1,1], Ship(2));
  expect(gb.grid[0][0]).toBe(undefined);
  expect(gb.grid[1][1]).toBe(undefined);
  expect(ship1).toBe(null);

  const ship2 = gb.addShip([2,2], [5,5], Ship(4));
  expect(gb.grid[2][2]).toBe(undefined);
  expect(gb.grid[3][3]).toBe(undefined);
  expect(gb.grid[4][4]).toBe(undefined);
  expect(gb.grid[5][5]).toBe(undefined);
  expect(ship2).toBe(null);
});

test ('Add invalid non straight ship', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([0,0], [1,2], Ship(2));
  expect(gb.grid[0][0]).toBe(undefined);
  expect(gb.grid[0][1]).toBe(undefined);
  expect(gb.grid[0][2]).toBe(undefined);
  expect(gb.grid[1][2]).toBe(undefined);
  expect(ship1).toBe(null);
});

test ('Add invalid out of bounds ship', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([9,0], [10,0], Ship(2));
  expect(ship1).toBe(null);
});

test ('Add ship with invalid length', () => {
  const gb1 = GameBoard();
  const ship1 = gb1.addShip([0,0], [0,0], Ship(3));
  expect(gb1.grid[0][0]).toBe(undefined);
  expect(ship1).toBe(null);

  const gb2 = GameBoard();
  const ship2 = gb2.addShip([0,0], [0,4], Ship(1));
  expect(gb2.grid[0][0]).toBe(undefined);
  expect(ship2).toBe(null);

  const gb3 = GameBoard();
  const ship3 = gb3.addShip([0,0], [0,0], Ship(-1));
  expect(gb3.grid[0][0]).toBe(undefined);
  expect(ship3).toBe(null);
})

test ('Add right to left ship', () => {
  const gb = GameBoard();
  const ship = gb.addShip([2,0],[0,0], Ship(3));
  expect(gb.grid[0][0]).toMatchObject(ship);
  expect(gb.grid[1][0]).toMatchObject(ship);
  expect(gb.grid[2][0]).toMatchObject(ship);
});

test ('Prevent ship overlap', () => {
  const gb1 = GameBoard();
  const ship1 = gb1.addShip([0,0],[0,0], Ship(1));
  const ship2 = gb1.addShip([0,0],[0,0], Ship(1));
  expect(gb1.grid[0][0]).toBe(ship1);
  expect(ship2).toBe(null);

  const gb2 = GameBoard();
  const ship3 = gb2.addShip([0,0],[0,2], Ship(3));
  const ship4 = gb2.addShip([0,0],[2,0], Ship(3));
  expect(gb2.grid[0][0]).toBe(ship3);
  expect(gb2.grid[0][1]).toBe(ship3);
  expect(gb2.grid[0][2]).toBe(ship3);
  expect(ship4).toBe(null);
})