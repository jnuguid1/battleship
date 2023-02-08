import GameBoard from '../src/gameBoard';

test('Add ship length 1 to game board grid', () => {
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[0,0], 1);
  expect(gb.grid[0][0]).toMatchObject(ship);
});

test('Add ship length 2 to game board grid', () => {
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[0,1], 2);
  expect(gb.grid[0][0]).toMatchObject(ship);
  expect(gb.grid[0][1]).toMatchObject(ship);
});

test('Add vertical ship length 3 to game board grid', () => {
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[0,2], 3);
  expect(gb.grid[0][0]).toMatchObject(ship);
  expect(gb.grid[0][1]).toMatchObject(ship);
  expect(gb.grid[0][2]).toMatchObject(ship);
});

test('Add horizontal ship length 3 to game board grid', () => {
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[2,0], 3);
  expect(gb.grid[0][0]).toMatchObject(ship);
  expect(gb.grid[1][0]).toMatchObject(ship);
  expect(gb.grid[2][0]).toMatchObject(ship);
});

test ('Add invalid diagonal ship', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([0,0], [1,1], 2);
  expect(gb.grid[0][0]).toBe(undefined);
  expect(gb.grid[1][1]).toBe(undefined);
  expect(ship1).toBe(null);

  const ship2 = gb.addShip([2,2], [5,5], 4);
  expect(gb.grid[2][2]).toBe(undefined);
  expect(gb.grid[3][3]).toBe(undefined);
  expect(gb.grid[4][4]).toBe(undefined);
  expect(gb.grid[5][5]).toBe(undefined);
  expect(ship2).toBe(null);
});

test ('Add invalid non straight ship', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([0,0], [1,2], 2);
  expect(gb.grid[0][0]).toBe(undefined);
  expect(gb.grid[0][1]).toBe(undefined);
  expect(gb.grid[0][2]).toBe(undefined);
  expect(gb.grid[1][2]).toBe(undefined);
  expect(ship1).toBe(null);
});

test ('Add invalid out of bounds ship', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([9,0], [10,0], 2);
  expect(ship1).toBe(null);
});

test ('Add ship with invalid length', () => {
  const gb1 = GameBoard();
  const ship1 = gb1.addShip([0,0], [0,0], 3);
  expect(gb1.grid[0][0]).toBe(undefined);
  expect(ship1).toBe(null);

  const gb2 = GameBoard();
  const ship2 = gb2.addShip([0,0], [0,4], 1);
  expect(gb2.grid[0][0]).toBe(undefined);
  expect(ship2).toBe(null);

  const gb3 = GameBoard();
  const ship3 = gb3.addShip([0,0], [0,0], -1);
  expect(gb3.grid[0][0]).toBe(undefined);
  expect(ship3).toBe(null);
});

test ('Prevent right to left ship', () => {
  const gb = GameBoard();
  const ship = gb.addShip([2,0],[0,0], 3);
  expect(gb.grid[0][0]).toBe(undefined);
  expect(gb.grid[1][0]).toBe(undefined);
  expect(gb.grid[2][0]).toBe(undefined);
});

test ('Prevent ship overlap', () => {
  const gb1 = GameBoard();
  const ship1 = gb1.addShip([0,0],[0,0], 1);
  const ship2 = gb1.addShip([0,0],[0,0], 1);
  expect(gb1.grid[0][0]).toBe(ship1);
  expect(ship2).toBe(null);

  const gb2 = GameBoard();
  const ship3 = gb2.addShip([0,0],[0,2], 3);
  const ship4 = gb2.addShip([0,0],[2,0], 3);
  expect(gb2.grid[0][0]).toBe(ship3);
  expect(gb2.grid[0][1]).toBe(ship3);
  expect(gb2.grid[0][2]).toBe(ship3);
  expect(ship4).toBe(null);
});

test('Added ship is in ships array', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([0,0], [0,0], 1);
  const ship2 = gb.addShip([1,1], [1,1], 1);
  expect(gb.ships).toContain(ship1);
  expect(gb.ships).toContain(ship2);
});

test('Register hit on ship after receiveAttack', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([0,0], [0,0], 1);
  gb.receiveAttack([0,0]);
  expect(ship1.getHits()).toBe(1);
});

test('No hit registered on miss from receiveAttack', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([0,0], [0,0], 1);
  gb.receiveAttack([1,1]);
  expect(ship1.getHits()).toBe(0);
});

test('Records missed shot in misses array after receiveAttack', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], 1);
  gb.receiveAttack([1,1]);
  expect(gb.misses).toContainEqual([1,1]);
});

test('reportAllSunk correctly reports true', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], 1);
  gb.receiveAttack([0,0]);
  gb.addShip([1,1],[1,1], 1);
  gb.receiveAttack([1,1]);
  expect(gb.areAllShipsSunk()).toBe(true);
});

test('reportAllSunk correctly reports false', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], 1);
  gb.receiveAttack([0,0]);
  gb.addShip([1,1],[1,1], 1);
  expect(gb.areAllShipsSunk()).toBe(false);
});

test('reportAllSunk called on empty array returns false', () => {
  const gb = GameBoard();
  expect(gb.areAllShipsSunk()).toBe(false);
});

test('receiveAttack pushes hits onto hits array', () => {
  const gb = GameBoard();
  gb.addShip([0,0],[0,0],1);
  gb.receiveAttack([0,0]);
  expect(gb.hits).toContainEqual([0,0]);
});

test('receiveAttack returns true on hit', () => {
  const gb = GameBoard();
  gb.addShip([0,0],[0,0],1);
  expect(gb.receiveAttack([0,0])).toBe(true);
});

test('receiveAttack returns null when attacking same square twice', () => {
  const gb = GameBoard();
  gb.addShip([0,0],[0,0],1);
  expect(gb.receiveAttack([0,0])).toBe(true);
  expect(gb.receiveAttack([0,0])).toBe(null);

  expect(gb.receiveAttack([1,1])).toBe(false);
  expect(gb.receiveAttack([1,1])).toBe(null);
});


test ('Ship coordinates are pushed into shipCoords after add ship', () => {
  const gb = GameBoard();
  gb.addShip([0,0],[0,2],3);
  expect(gb.shipCoords).toContainEqual([0,0]);
  expect(gb.shipCoords).toContainEqual([0,1]);
  expect(gb.shipCoords).toContainEqual([0,2]);

  gb.addShip([1,0],[3,0],3);
  expect(gb.shipCoords).toContainEqual([1,0]);
  expect(gb.shipCoords).toContainEqual([2,0]);
  expect(gb.shipCoords).toContainEqual([3,0]);

  gb.addShip([7,7],[7,7],1);
  expect(gb.shipCoords).toContainEqual([7,7]);
});

test('Update ship updates ship coords', () =>{
  const gb = GameBoard();
  const ship = gb.addShip([0,0],[0,4],5,'battleship');
  gb.updateShip([4,4],[4,8],'battleship');
  expect(gb.grid[4][4]).toMatchObject(ship);
  expect(gb.grid[4][5]).toMatchObject(ship);
  expect(gb.grid[4][6]).toMatchObject(ship);
  expect(gb.grid[4][7]).toMatchObject(ship);
  expect(gb.grid[4][8]).toMatchObject(ship);
  expect(gb.grid[0][0]).toBe(undefined);
  expect(gb.grid[0][1]).toBe(undefined);
  expect(gb.grid[0][2]).toBe(undefined);
  expect(gb.grid[0][3]).toBe(undefined);
  expect(gb.grid[0][4]).toBe(undefined);
  expect(gb.shipCoords).toContainEqual([4,4]);
  expect(gb.shipCoords).toContainEqual([4,5]);
  expect(gb.shipCoords).toContainEqual([4,6]);
  expect(gb.shipCoords).toContainEqual([4,7]);
  expect(gb.shipCoords).toContainEqual([4,8]);
  expect(gb.shipCoords).not.toContainEqual([0,0]);
  expect(gb.shipCoords).not.toContainEqual([0,1]);
  expect(gb.shipCoords).not.toContainEqual([0,2]);
  expect(gb.shipCoords).not.toContainEqual([0,3]);
  expect(gb.shipCoords).not.toContainEqual([0,4]);
  expect(gb.shipCoords).not.toContainEqual([0,5]);
})

test('Update ship does not overlap on other ships', () => {
  const gb = GameBoard();
  const ship1 = gb.addShip([0,0],[0,4],5,'battleship');
  const ship2 = gb.addShip([9,9],[9,9],1,'destroyer');
  expect(gb.updateShip([0,0],[0,0],'destroyer').message).not.toBe(null);
  expect(gb.grid[0][0]).toMatchObject(ship1);
});