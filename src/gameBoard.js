import Ship from './ship';

const GameBoard = () => {
  // 10x10 grid of where each ship object is located.
  // Used to check for overlap with other ships.
  let grid = [[],[],[],[],[],[],[],[],[],[]]; 
  let ships = []; // list of ship objects
  // List of the coords of each ship.
  // Used to check if a ship is a hit after an attack.
  let shipCoords = [];
  // List of coords of successful hits.
  const hits = [];
  // List of coords of misses.
  const misses = [];

  const areCoordsValid = (ship, startCoord, endCoord) => {
    // Test for invalid and out of bounds ships
    if (startCoord[0] !== endCoord[0] && startCoord[1] !== endCoord[1]) 
      return { result: false, message: 'Ship must not be diagonal.' };
    if (startCoord[0] > 9 || startCoord[0] < 0 || startCoord[1] > 9 || startCoord[1] < 0) 
      return { result: false, message: 'Ship is out of bounds.' };
    if (endCoord[0] > 9 || endCoord[0] < 0 || endCoord[1] > 9 || endCoord[1] < 0)
      return { result: false, message: 'Ship is out of bounds.' };
    if (startCoord[0] - endCoord[0] === 0 && Math.abs(startCoord[1] - endCoord[1]) !== ship.length - 1)
       return { result: false, message: `Ship is invalid length. It must be ${ship.length} squares long.` };
    if (startCoord[1] - endCoord[1] === 0 && Math.abs(startCoord[0] - endCoord[0]) !== ship.length - 1)
      return { result: false, message: `Ship is invalid length. It must be ${ship.length} squares long.` };
    if (startCoord[0] > endCoord[0] || startCoord[1] > endCoord[1]) 
      return { result: false, message: `Ship must not be inputted in a reverse direction` };
    return { result: true };
  };

  const doSquaresOverlap = (start, end, shipName) => {
    // Check if each grid square between the start and end coords
    // are not occupied already
    if (Math.abs(start[0] - end[0]) > 0) {
      for (let i = start[0]; i <= end[0]; i++) {
        if (grid[i][start[1]] !== undefined) {
          if (shipName && grid[i][start[1]].ship !== shipName) {
            return { result: true, message: `Ship must not overlap with other ships` };
          } else if (!shipName) {
            return { result: true, message: `Ship must not overlap with other ships` }
          }
        }
      }
    } else if (Math.abs(start[1] - end[1]) > 0) {
      for (let i = start[1]; i <= end[1]; i++) {
        if (grid[start[0]][i] !== undefined) {
          if (shipName && grid[start[0]][i].ship !== shipName) {
            return { result: true, message: `Ship must not overlap with other ships` }
          } else if (!shipName) {
            return { result: true, message: `Ship must not overlap with other ships` }
          }
        }
      }
    } else {
      if (grid[start[0]][end[1]] !== undefined) {
        if (shipName && grid[start[0]][end[1]].ship !== shipName) {
          return { result: true, message: `Ship must not overlap with other ships` }
        } else if (!shipName) {
          return { result: true, message: `Ship must not overlap with other ships` }
        }
      }
    }
    return { result: false };
  }

  const pushShip = (startCoord, endCoord, ship) => {
    const addedCoords = [];
    // Fill in the specified coordinates
    if (Math.abs(startCoord[0] - endCoord[0]) > 0) {
      for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        grid[i][startCoord[1]] = ship;
        shipCoords.push([i, startCoord[1]]);
        addedCoords.push([i, startCoord[1]]);
      }
    } else if (Math.abs(startCoord[1] - endCoord[1]) > 0) {
      for (let i = startCoord[1]; i <= endCoord[1]; i++) {
        grid[startCoord[0]][i] = ship;
        shipCoords.push([startCoord[0], i]);
        addedCoords.push([startCoord[0], i]);
      }
    } else {
      grid[startCoord[0]][endCoord[1]] = ship;
      shipCoords.push([startCoord[0], endCoord[1]]);
      addedCoords.push([startCoord[0], endCoord[1]]);
    }
    ships.push(ship);
    return addedCoords
  }
  
  const addShip = (startCoord, endCoord, shipLength, shipName) => {
    const ship = Ship(shipLength, shipName);
    if (!areCoordsValid(ship, startCoord, endCoord).result) return null;
    if (doSquaresOverlap(startCoord, endCoord).result) return null;
    pushShip(startCoord, endCoord, ship);
    return ship;
  };

  const randomlyAddShip = (shipLength, shipName) => {
    let startCoord;
    let endCoord;
    let ship = Ship(shipLength, shipName);
    const direction = Math.floor(Math.random()*2); // Randomly choose ship direction;
    if (direction === 0) { // vertical direction
      while (true) {
        const rowStart = Math.floor(Math.random()*(9-(shipLength-2)));
        const rowEnd = rowStart + (shipLength - 1);
        const colStart = Math.floor(Math.random()*10);
        const colEnd = colStart;
        startCoord = [colStart, rowStart];
        endCoord = [colEnd, rowEnd];
        if (!doSquaresOverlap(startCoord, endCoord).result) {
          pushShip(startCoord, endCoord, Ship(shipLength, shipName));
          break;
        }
      }
    } else { // horizontal direction
      while (true) {
        const rowStart = Math.floor(Math.random()*10); 
        const rowEnd = rowStart;
        const colStart = Math.floor(Math.random()*(9-(shipLength-2)));
        const colEnd = colStart + (shipLength - 1);
        startCoord = [colStart, rowStart];
        endCoord = [colEnd, rowEnd];
        if (!doSquaresOverlap(startCoord, endCoord).result) {
          pushShip(startCoord, endCoord, ship);
          break;
        }
      }
    }
    return { startCoord, endCoord }
  }

  const getShip = (shipName) => {
    for(let i = 0; i < ships.length; i++) {
      if (ships[i].ship === shipName) return ships[i];
    }
  };

  const removeShipFromGrid = (shipName) => {
    const coords = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] !== undefined && grid[i][j].ship === shipName) {
          grid[i][j] = undefined;
          coords.push([i,j]);
        }
      }
    }
    return coords;
  };

  const removeShipFromShipCoords = (coords) => {
    for (let i = 0; i < coords.length; i++) {
      for (let j = 0; j < shipCoords.length; j++) {
        if (shipCoords[j][0] === coords[i][0] && shipCoords[j][1] === coords[i][1]) 
          shipCoords.splice(j, 1);
      }
    }
  }

  const updateShip = (startCoord, endCoord, shipName) => {
    const ship = getShip(shipName);
    if (!areCoordsValid(ship, startCoord, endCoord).result) 
      return { message: areCoordsValid(ship, startCoord, endCoord).message };
    if (doSquaresOverlap(startCoord, endCoord, shipName).result) 
      return { message: doSquaresOverlap(startCoord, endCoord, shipName).message};
    const removedCoords = removeShipFromGrid(shipName);
    removeShipFromShipCoords(removedCoords);
    const addedCoords = pushShip(startCoord, endCoord, ship);
    return {message: null, removedCoords, addedCoords};
  }

  // Returns true if hit, false otherwise.
  // Returns null if invalid move
  const receiveAttack = (coords) => {
    for (let i = 0; i < hits.length; i++) {
      if (hits[i][0] === coords[0] && hits[i][1] === coords[1])
        return null;
    };
    for (let i = 0; i < misses.length; i++) {
      if (misses[i][0] === coords[0] && misses[i][1] === coords[1])
        return null;
    };
    if (grid[coords[0]][coords[1]] !== undefined) {
      grid[coords[0]][coords[1]].hit();
      hits.push(coords);
      return true;
    } else {
      misses.push(coords);
      return false;
    }
  };

  const areAllShipsSunk = () => {
    if (ships.length === 0) return false;
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isSunk() === false) return false;
    }
    return true;
  };

  const reset = () => {
    grid.length = 0;
    ships.length = 0;
    shipCoords.length = 0;
    hits.length = 0;
    misses.length = 0;
    for (let i = 0 ; i < 10; i++) grid.push([]);
  }

  return { 
    addShip,
    randomlyAddShip,
    grid, 
    ships, 
    receiveAttack, 
    misses, 
    areAllShipsSunk, 
    hits,
    shipCoords,
    updateShip,
    reset
  };
};
export default GameBoard;