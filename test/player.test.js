import Player from '../src/player';
import GameBoard from '../src/gameBoard';
import Ship from '../src/ship';

test('Make a legal move with attackPlayer', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], Ship(1));
  const player = Player(gb);
  expect(player.attackEnemy([0,0])).toBe(true);
});

test('Make an illegal move with attackPlayer', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], Ship(1));
  const player = Player(gb);
  expect(player.attackEnemy([0,0])).toBe(true);
  expect(player.attackEnemy([0,0])).toBe(false);
});

test('Make a legal AI move', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], Ship(1));
  const player = Player(gb);
  expect(player.attackEnemyRandomly()).toBe(true);
  expect(player.attackEnemyRandomly()).toBe(true);
  expect(player.attackEnemyRandomly()).toBe(true);
  expect(player.attackEnemyRandomly()).toBe(true);
})