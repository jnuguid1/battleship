import game from "./game";

export const View = (() => {

  const playSection = document.getElementById('play-section');
  const playerArea = document.getElementById('player-area');
  const enemyArea = document.getElementById('enemy-area');
  const formSection = document.getElementById('ship-form-section');
  const gameStatus = document.getElementById('game-status');
  let playerAttackDisplay;
  let enemyAttackDisplay;
  let isComputerTurn = false;

  //*** Game Status Strings ***/
  const defaultInstructions =
    'Place your ships by entering start and end coordinates below like \'A5\' or \'B2\'. Press confirm when ready.';

  //*** Form  ***/
  const shipForm = document.getElementById('ship-form');
  const randomShipsButton = document.getElementById('randomize-ships-btn');
  const restartButton = document.getElementById('restart-btn');
  const carrierStart = document.getElementById('carrier-start');
  const carrierEnd = document.getElementById('carrier-end');
  const battleshipStart = document.getElementById('battleship-start');
  const battleshipEnd = document.getElementById('battleship-end');
  const cruiserStart = document.getElementById('cruiser-start');
  const cruiserEnd = document.getElementById('cruiser-end');
  const submarineStart = document.getElementById('submarine-start');
  const submarineEnd = document.getElementById('submarine-end');
  const destroyerStart = document.getElementById('destroyer-start');
  const destroyerEnd = document.getElementById('destroyer-end');

  //*** Helpers ***//
  const addDiv = (container, classes, id) => {
    const div = document.createElement('div');
    if (id) div.id = id;
    if (classes) div.className = classes;
    container.appendChild(div);
    return div;
  };

  const addText = (container, text, element, classes) => {
    const textElement = document.createElement(`${element}`);
    if (classes) textElement.className = classes;
    textElement.textContent = `${text}`;
    container.appendChild(textElement);
    return textElement;
  };

  const updateCell = (col, row, colorClass, boardId) => {
    const cells = document.querySelectorAll(`#${boardId} .board-cell`);
    cells[col+row*10].classList.toggle(colorClass);
  };

  const parseCoords = (input) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    return [letters.indexOf(input[0].toUpperCase()), parseInt(input[1])];
  };

  const toggleDisplay = (element, className) => {
    element.classList.toggle(className);
    element.classList.toggle('hidden');
  };

  const iterateShipGrid = (callback) => {
    const opponentBoard = document.querySelectorAll('#opponent-board .board-cell');
    for (let i = 0; i < opponentBoard.length; i++) {
      callback(opponentBoard[i]);
    }
  };

  const toggleComputerTurn = () => {
    isComputerTurn = !isComputerTurn;
    enemyArea.classList.toggle('not-allowed');
  };

  //*** Form Events ***/
  const handleInput = (startForm, endForm, shipName) => {
    const regex = /[A-Ja-z][0-9]/;
    if (startForm.value.length === 2 && endForm.value.length === 2) {
      if (regex.test(startForm.value) && regex.test(endForm.value)) {
        const startCoord = parseCoords([startForm.value[0], startForm.value[1]]);
        const endCoord = parseCoords([endForm.value[0], endForm.value[1]])
        game.handleShipUpdate(startCoord[0], endCoord[0], startCoord[1], endCoord[1], shipName);
      } else {
        changeStatus(gameStatus, 'Input must have a letter from A to J followed by a number from 0 to 9');
      }
    } else {
      resetGameStatus();
    }
  };

  const toggleCell = (cell) => {
    cell.classList.toggle('click-disabled');
  }

  const resetForms = () => {
    const forms = document.querySelectorAll('#ship-form-section input');
    for (let i = 0; i < forms.length; i++) {
      forms[i].value = '';
    }
  };

  const startGame = () => {
    resetForms();
    toggleDisplay(formSection, 'flex-show');
    playSection.classList.toggle('not-allowed');
    changeStatus(gameStatus, 'Click on the enemy board to attack');
    iterateShipGrid(toggleCell);
  }

  const restartGame = () => {
    toggleDisplay(restartButton, 'inline-show');
    toggleDisplay(formSection, 'flex-show');
    refreshEnemyBoard();
    refreshPlayerBoard();
    resetGameStatus();
    changeStatus(playerAttackDisplay, '');
    changeStatus(enemyAttackDisplay, '');
    game.resetGame();
  }

  //*** Form Handlers ***/
  shipForm.addEventListener('submit', (event) => {
    event.preventDefault();
    startGame();
  });
  carrierStart.addEventListener('input', () => {
    handleInput(carrierStart, carrierEnd, 'carrier');
  });
  carrierEnd.addEventListener('input', () => {
    handleInput(carrierStart, carrierEnd, 'carrier');
  });
  battleshipStart.addEventListener('input', () => {
    handleInput(battleshipStart, battleshipEnd, 'battleship');
  });
  battleshipEnd.addEventListener('input', () => {
    handleInput(battleshipStart, battleshipEnd, 'battleship');
  });
  cruiserStart.addEventListener('input', () => {
    handleInput(cruiserStart, cruiserEnd, 'cruiser');
  });
  cruiserEnd.addEventListener('input', () => {
    handleInput(cruiserStart, cruiserEnd, 'cruiser');
  });
  submarineStart.addEventListener('input', () => {
    handleInput(submarineStart, submarineEnd, 'submarine');
  });
  submarineEnd.addEventListener('input', () => {
    handleInput(submarineStart, submarineEnd, 'submarine');
  });
  destroyerStart.addEventListener('input', () => {
    handleInput(destroyerStart, destroyerEnd, 'destroyer');
  });
  destroyerEnd.addEventListener('input', () => {
    handleInput(destroyerStart, destroyerEnd, 'destroyer');
  });
  randomShipsButton.addEventListener('click', () => {
    resetForms();
    game.randomButtonHandler();
  });
  restartButton.addEventListener('click', () => {
    restartGame();
  });
  
  //*** DOM Manipulation Functions ***/
  const changeStatus = (element, text) => {
    element.textContent = text;
  }

  const loadGameBoard = (board, boardElement) => {
    let counter = 0;
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= 10; j++) {
        if (i === 0 && j === 0) {
          addDiv(boardElement); // Add empty space for 0,0 cell
        } else if (i === 0 && j !== 0) {
          addText(boardElement, letters[j-1], 'p');
        } else if (j === 0 && i !== 0) {
          addText(boardElement, counter, 'p');
          counter++;
        } else if (i !== 0 && j!== 0) {
          const boardCell = addDiv(boardElement, 'board-cell');
          boardCell.setAttribute('col', `${j-1}`);
          boardCell.setAttribute('row', `${i-1}`);
          boardCell.setAttribute('board', board);
          boardCell.classList.toggle('click-disabled');
          boardCell.addEventListener('click', () => {
            if (!isComputerTurn) {
              if (game.handlePlayerAttack(j-1, i-1) === null) {
                changeStatus(gameStatus, 'Invalid move. You already attacked this coordinate');
              } else {
                if (game.didPlayerWin()) {
                  handlePlayerWin();
                } else {
                  toggleComputerTurn();
                  game.handleOpponentAttack();
                }
              }
            }
          });
        }
      }
    }
  }

  const loadBoards = () => {
    const playerBoard = addDiv(playerArea, 'game-board', 'player-board');
    const opponentBoard = addDiv(enemyArea, 'game-board', 'opponent-board');
    loadGameBoard('player', playerBoard);
    playerAttackDisplay = addText(playerArea, '', 'p', 'attack-display');
    loadGameBoard('opponent', opponentBoard);
    enemyAttackDisplay = addText(enemyArea, '', 'p', 'attack-display');
  };

  const loadShips = (coordsArray) => {
    const playerCells = document.querySelectorAll('#player-board .board-cell');
    coordsArray.forEach(coords => {
      playerCells[coords[0]+coords[1]*10].classList.toggle('ship');
    });
  };

  const addShip = (coordsArray) => {
    const playerCells = document.querySelectorAll('#player-board .board-cell');
    coordsArray.forEach(coords => {
      playerCells[coords[0]+coords[1]*10].classList.add('ship');
    });
  }

  const removeShip = (coordsArray) => {
    const playerCells = document.querySelectorAll('#player-board .board-cell');
    coordsArray.forEach(coords => {
      playerCells[coords[0]+coords[1]*10].classList.remove('ship');
    });
  }

  const handlePlayerHit = (col, row) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    updateCell(col, row, 'hit', 'opponent-board');
    changeStatus(gameStatus, 'You hit! The computer is making a decision...');
    changeStatus(enemyAttackDisplay, `You target ${letters[col]}${row}. Hit!`);
  };

  const handlePlayerMiss = (col, row) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    updateCell(col, row, 'miss', 'opponent-board');
    changeStatus(gameStatus, 'You miss! The computer is making a decision...');
    changeStatus(enemyAttackDisplay, `You target ${letters[col]}${row}. Miss!`);
  };

  const handleOpponentHit = (coords) => {
    const col = coords[0];
    const row = coords[1];
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    toggleComputerTurn();
    updateCell(col, row, 'hit', 'player-board');
    changeStatus(gameStatus, 'The computer hits! Click on the enemy board to attack');
    changeStatus(playerAttackDisplay, `Enemy targets ${letters[col]}${row}. Hit!`);
  };

  const handleOpponentMiss = (coords) => {
    const col = coords[0];
    const row = coords[1]
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    toggleComputerTurn();
    updateCell(col, row, 'miss', 'player-board');
    changeStatus(gameStatus, 'The computer misses! Click on the enemy board to attack');
    changeStatus(playerAttackDisplay, `Enemy targets ${letters[col]}${row}. Miss!`);
  };

  const refreshPlayerBoard = () => {
    const playerCells = document.querySelectorAll('#player-board .board-cell');
    for (let i = 0; i < playerCells.length; i++) {
      playerCells[i].classList.remove('ship');
      playerCells[i].classList.remove('hit');
      playerCells[i].classList.remove('miss');
    }
  };

  const refreshEnemyBoard = () => {
    const enemyCells = document.querySelectorAll('#opponent-board .board-cell');
    for (let i = 0; i < enemyCells.length; i++) {
      enemyCells[i].classList.remove('ship');
      enemyCells[i].classList.remove('hit');
      enemyCells[i].classList.remove('miss');
    }
  };

  const handlePlayerWin = () => {
    changeStatus(gameStatus, 'You sunk all the enemy ships. You win!');
    playSection.classList.toggle('not-allowed');
    iterateShipGrid(toggleCell);
    toggleDisplay(restartButton, 'inline-show');
  };
  
  const handleOpponentWin = (coords) => {
    const col = coords[0];
    const row = coords[1];
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    updateCell(col, row, 'hit', 'player-board');
    changeStatus(playerAttackDisplay, `Enemy targets ${letters[col]}${row}. Hit!`);
    changeStatus(gameStatus, 'The enemy sunk all your ships. You lose!');
    playSection.classList.toggle('not-allowed');
    iterateShipGrid(toggleCell);
    toggleDisplay(restartButton, 'inline-show');
    toggleComputerTurn();
  };

  const updatePlaceholder = (formStart, formEnd, startCoord, endCoord) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    formStart.placeholder = `${letters[startCoord[0]]}${startCoord[1]}`;
    formEnd.placeholder =  `${letters[endCoord[0]]}${endCoord[1]}`;
  }

  const updateCarrierPlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(carrierStart, carrierEnd, startCoord, endCoord);
  };

  const updateBattleshipPlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(battleshipStart, battleshipEnd, startCoord, endCoord);
  };

  const updateCruiserPlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(cruiserStart, cruiserEnd, startCoord, endCoord);
  };

  const updateSubmarinePlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(submarineStart, submarineEnd, startCoord, endCoord);
  };

  const updateDestroyerPlaceholder = (startCoord, endCoord) => {
    updatePlaceholder(destroyerStart, destroyerEnd, startCoord, endCoord);
  };

  const handleInvalidInput = (message) => {
    changeStatus(gameStatus, message);
  }

  const resetGameStatus = () => {
    changeStatus(gameStatus, defaultInstructions)
  }
 
  return { 
    loadBoards, 
    loadShips,
    addShip,
    removeShip,
    handlePlayerHit, 
    handlePlayerMiss, 
    handleOpponentHit,
    handleOpponentMiss,
    refreshPlayerBoard,
    updateCarrierPlaceholder,
    updateCruiserPlaceholder,
    updateSubmarinePlaceholder,
    updateBattleshipPlaceholder,
    updateDestroyerPlaceholder,
    handleOpponentWin,
    handleInvalidInput,
    resetGameStatus
  }
})();