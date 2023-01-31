export default function Player(gameBoard) {
  const attackEnemy = (coords) => {
    return gameBoard.receiveAttack(coords);
  };

  const attackEnemyRandomly = () => {
    while (true) {
      const col = Math.floor(Math.random() * 10);
      const row = Math.floor(Math.random() * 10);
      if (gameBoard.receiveAttack([col, row])) return true;
    }
  }

  return { attackEnemy, attackEnemyRandomly }
}