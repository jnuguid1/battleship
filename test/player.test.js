import Player from '../src/player';
import GameBoard from '../src/gameBoard';

test('Make a legal move with attackPlayer', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], 1);
  const player = Player(gb);
  expect(player.attackEnemy([0,0])).toBe(true);
});

test('Make an illegal move with attackPlayer', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], 1);
  const player = Player(gb);
  expect(player.attackEnemy([0,0])).toBe(true);
  expect(player.attackEnemy([0,0])).toBe(null);
});

test('Make a legal AI move', () => {
  const gb = GameBoard();
  gb.addShip([0,0], [0,0], 1);
  const player = Player(gb);
  expect(player.attackEnemyRandomly().result).not.toBe(null);
  expect(player.attackEnemyRandomly().result).not.toBe(null);
  expect(player.attackEnemyRandomly().result).not.toBe(null);
  expect(player.attackEnemyRandomly().result).not.toBe(null);
});

test('Check if moves queued is empty', () => {
  const player = Player();
  expect(player.hasMovesQueued()).toBe(false);
});

test('Queue moves queues the four adjacent squares of inputted coord', () => {
  const gb = GameBoard();
  const player = Player(gb);
  player.queueMoves([1,1]);
  expect(player.movesQueue).toContainEqual([1,0]);
  expect(player.movesQueue).toContainEqual([0,1]);
  expect(player.movesQueue).toContainEqual([2,1]);
  expect(player.movesQueue).toContainEqual([1,2]);
});

test('Queue moves queues less than 4 squares when edge/corner coord inputted', () => {
  const gb = GameBoard();
  const player = Player(gb);
  player.queueMoves([0,0]);
  expect(player.movesQueue).not.toContainEqual([-1,0]);
  expect(player.movesQueue).not.toContainEqual([0,-1]);
  expect(player.movesQueue).toContainEqual([1,0]);
  expect(player.movesQueue).toContainEqual([0,1]);
});

test('Queue moves does not queue attempted moves', () => {
  const gb = GameBoard();
  gb.receiveAttack([1,0]);
  gb.receiveAttack([0,1]);
  const player = Player(gb);
  player.queueMoves([0,0]);
  expect(player.movesQueue).not.toContainEqual([1,0]);
  expect(player.movesQueue).not.toContainEqual([0,1]);
});

test('Execute queued moves executes move at front of queue', () => {
  const gb = GameBoard();
  const player = Player(gb);
  player.queueMoves([0,0]);
  player.executeQueuedMove();
  expect(gb.misses).toContainEqual([1,0]);
}) 