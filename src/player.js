import GameBoard from "./gameBoard";

export default function Player(gameBoard) {
  const movesQueue = [];
  let currentHit;
  let oppositeCoord;
  let firstHit;

  const attackEnemy = (coords) => {
    return gameBoard.receiveAttack(coords);
  };

  const attackEnemyRandomly = () => {
    while (true) {
      const col = Math.floor(Math.random() * 10);
      const row = Math.floor(Math.random() * 10);
      const coords = [col, row];
      const result = gameBoard.receiveAttack(coords);
      if (result === true) {
        queueMoves(coords);
        currentHit = coords;
      }
      if (result !== null) return { coords, result };
    }
  };

  const hasMovesQueued = () => {
    return !(movesQueue.length === 0);
  };

  const containsCoord = (array, coord) => {
    for (let i = 0; i < array.length; i++) {
      if (coord[0] === array[i][0] && coord[1] === array[i][1]) return true;
    }
    return false;
  }

  const alreadyHit = (coord) => {
    return containsCoord(gameBoard.hits, coord);
  };
  
  const alreadyMiss = (coord) => {
    return containsCoord(gameBoard.misses, coord);
  }

  const queueMoves = (coords) => {
    const leftCoord = [coords[0] - 1, coords[1]];
    const aboveCoord = [coords[0], coords[1] - 1];
    const rightCoord = [coords[0] + 1, coords[1]];
    const bottomCoord = [coords[0], coords[1] + 1];

    if (leftCoord[0] >= 0 && !alreadyHit(leftCoord) && !alreadyMiss(leftCoord)) 
      movesQueue.push(leftCoord);
    if (aboveCoord[1] >= 0 && !alreadyHit(aboveCoord) && !alreadyMiss(aboveCoord)) 
      movesQueue.push(aboveCoord);
    if (rightCoord[0] <= 9 && !alreadyHit(rightCoord) && !alreadyMiss(rightCoord)) 
      movesQueue.push(rightCoord);
    if (bottomCoord[1] <= 9 && !alreadyHit(bottomCoord) && !alreadyMiss(bottomCoord)) 
      movesQueue.push(bottomCoord);
  }

  const executionHelper = (coords) => {
    let newCoords;
    let candidateOppositeCoords;
    if (coords[0] === currentHit[0]) {
      if (coords[1] > currentHit[1]) {
        candidateOppositeCoords = [coords[0], coords[1] - 2];
        if (candidateOppositeCoords[1] >= 0 && !alreadyHit(candidateOppositeCoords) && !alreadyMiss(candidateOppositeCoords)) {
          oppositeCoord = candidateOppositeCoords;
          firstHit = currentHit;
        };
        if (coords[1] + 1 <= 9) {
          newCoords = [coords[0], coords[1] + 1];
          if (!alreadyHit(newCoords) && !alreadyMiss(newCoords)) {
            movesQueue.push(newCoords);
            currentHit = coords;
            return true;
          }
        }
      } else if (coords[1] < currentHit[1]) {
        candidateOppositeCoords = [coords[0], coords[1] + 2];
        if (candidateOppositeCoords[1] <= 9 && !alreadyHit(candidateOppositeCoords) && !alreadyMiss(candidateOppositeCoords)) {
          firstHit = currentHit;
          oppositeCoord = candidateOppositeCoords;
        }
        if (coords[1] - 1 >= 0) {
          newCoords = [coords[0], coords[1] - 1];
          if (!alreadyHit(newCoords) && !alreadyMiss(newCoords)) {
            movesQueue.push(newCoords);
            currentHit = coords;
            return true;
          }
        }
      }
    } else {
      if (coords[0] > currentHit[0]) {
        candidateOppositeCoords = [coords[0] - 2, coords[1]];
        if (candidateOppositeCoords[0] >= 0 && !alreadyHit(candidateOppositeCoords) && !alreadyMiss(candidateOppositeCoords)) {
          firstHit = currentHit;
          oppositeCoord = candidateOppositeCoords;
        }
        if (coords[0] + 1 <= 9) {
          newCoords = [coords[0] + 1, coords[1]];
          if (!alreadyHit(newCoords) && !alreadyMiss(newCoords)) {
            movesQueue.push(newCoords);
            currentHit = coords;
            return true;
          }
        }
      } else if (coords[0] < currentHit[0]) {
        candidateOppositeCoords = [coords[0] + 2, coords[1]];
        if (candidateOppositeCoords[0] <= 9 && !alreadyHit(candidateOppositeCoords) && !alreadyMiss(candidateOppositeCoords)) {
          firstHit = currentHit;
          oppositeCoord = candidateOppositeCoords;
        }
        if (coords[0] - 1 >= 0) {
          newCoords = [coords[0] - 1, coords[1]];
          if (!alreadyHit(newCoords) && !alreadyMiss(newCoords)) {
            movesQueue.push(newCoords);
            currentHit = coords;
            return true;
          }
        }
      }
    }
    return false;
  }

  const executeQueuedMove = () => {
    const coords = movesQueue.shift();
    if (alreadyHit(coords)) {
      if (!executionHelper(coords)) {
        if (oppositeCoord) {
          movesQueue.push(oppositeCoord);
          oppositeCoord = null;
          currentHit = firstHit;
          firstHit = null;
        } else {
          attackEnemyRandomly();
        }
      } else {
        return executeQueuedMove();
      }
    }
    const result = gameBoard.receiveAttack(coords);
    if (result === true) {
      movesQueue.length = 0;
      executionHelper(coords);
    } else if (result == false && !hasMovesQueued()) {
      currentHit = null;
      if (oppositeCoord) {
        movesQueue.push(oppositeCoord);
        oppositeCoord = null;
        currentHit = firstHit;
        firstHit = null;
      }
    }
    return { coords, result }
  }

  return { attackEnemy, attackEnemyRandomly, hasMovesQueued, movesQueue, queueMoves, executeQueuedMove }
}