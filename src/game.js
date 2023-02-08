import GameBoard from './gameBoard';
import Player from './player';
import { View } from './view';

const game = (() => {
  const gameBoard1 = GameBoard();
  const gameBoard2 = GameBoard();
  const player1 = Player(gameBoard2);
  const player2 = Player(gameBoard1);

  const randomShipPlacement = () => {
    gameBoard1.reset();
    View.refreshPlayerBoard();
    const destroyerCoords = gameBoard1.randomlyAddShip(2, 'destroyer');
    const submarineCoords = gameBoard1.randomlyAddShip(3, 'submarine');
    const cruiserCoords = gameBoard1.randomlyAddShip(3, 'cruiser');
    const battleshipCoords = gameBoard1.randomlyAddShip(4, 'battleship');
    const carrierCoords = gameBoard1.randomlyAddShip(5, 'carrier');
    View.updateDestroyerPlaceholder(destroyerCoords.startCoord, destroyerCoords.endCoord);
    View.updateSubmarinePlaceholder(submarineCoords.startCoord, submarineCoords.endCoord);
    View.updateCruiserPlaceholder(cruiserCoords.startCoord, cruiserCoords.endCoord);
    View.updateBattleshipPlaceholder(battleshipCoords.startCoord, battleshipCoords.endCoord);
    View.updateCarrierPlaceholder(carrierCoords.startCoord, carrierCoords.endCoord);

    View.loadShips(gameBoard1.shipCoords);
  }

  const setupBoards = () => {
    gameBoard1.addShip([3,8],[3,9], 2, 'destroyer');
    gameBoard1.addShip([0,0],[0,2], 3, 'submarine');
    gameBoard1.addShip([7,1],[9,1],3, 'cruiser');
    gameBoard1.addShip([4,4],[7,4],4, 'battleship');
    gameBoard1.addShip([1,5],[1,9],5, 'carrier');

    gameBoard2.randomlyAddShip(2, 'destroyer');
    gameBoard2.randomlyAddShip(3, 'submarine');
    gameBoard2.randomlyAddShip(3, 'cruiser');
    gameBoard2.randomlyAddShip(4, 'battleship');
    gameBoard2.randomlyAddShip(5, 'carrier');

    View.updateCarrierPlaceholder([1,5],[1,9]);
    View.updateBattleshipPlaceholder([4,4],[7,4]);
    View.updateCruiserPlaceholder([7,1],[9,1]);
    View.updateSubmarinePlaceholder([0,0],[0,2]);
    View.updateDestroyerPlaceholder([3,8],[3,9]);
  }

  const setupGame = () => {
    View.loadBoards();
    setupBoards();
    View.loadShips(gameBoard1.shipCoords);
  };

  const resetGame = () => {
    gameBoard1.reset();
    gameBoard2.reset();
    setupBoards();
    View.loadShips(gameBoard1.shipCoords);
  }

  const handleShipUpdate = (colStart, colEnd, rowStart, rowEnd, ship) => {
    const start = [colStart, rowStart];
    const end = [colEnd, rowEnd];
    const coords = gameBoard1.updateShip(start, end, ship);
    if (coords.message !== null) {
      View.handleInvalidInput(coords.message);
    } else {
      View.removeShip(coords.removedCoords);
      View.addShip(coords.addedCoords)
      View.resetGameStatus();
    }
  }

  const handlePlayerAttack = (col, row) => {
    const attackResult = player1.attackEnemy([col, row]);
    if (attackResult) {
      View.handlePlayerHit(col, row);
    } else if (attackResult === false) {
      View.handlePlayerMiss(col, row);
    }
    return attackResult;
  }

  // Add timeout to give a pause between player turn and ai turn
  const handleOpponentAttack = () => {
    setTimeout(() => {
      let attackResult;
      if (player2.hasMovesQueued()) {
        attackResult = player2.executeQueuedMove();
      } else {
        attackResult = player2.attackEnemyRandomly();
      }
      if (didEnemyWin()) {
        View.handleOpponentWin(attackResult.coords);
      } else {
        if (attackResult.result) {
          View.handleOpponentHit(attackResult.coords);
        } else if (attackResult.result === false) {
          View.handleOpponentMiss(attackResult.coords);
        }
      }
      return attackResult;
    }, 1200); 
  };

  const randomButtonHandler = () => {
    randomShipPlacement();
  };

  const didPlayerWin = () => {
    return gameBoard2.areAllShipsSunk();
  }

  const didEnemyWin = () => {
    return gameBoard1.areAllShipsSunk();
  }
  
  return { 
    setupGame, 
    handlePlayerAttack,
    handleOpponentAttack,
    handleShipUpdate,
    randomButtonHandler,
    didPlayerWin,
    didEnemyWin,
    resetGame
  }
})();

export default game