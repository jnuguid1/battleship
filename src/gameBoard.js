import Ship from './ship.js'

export default function GameBoard() {
  const grid = [[],[],[],[],[],[],[],[],[],[]];
  const ships = [];
  const hits = [];
  const misses = [];
  
  const addShip = (startCoord, endCoord, ship) => {
    // Test for invalid and out of bounds ships
    if (startCoord[0] !== endCoord[0] && startCoord[1] !== endCoord[1]) return null;
    if (startCoord[0] > 9 || startCoord[0] < 0 || startCoord[1] > 9 || startCoord[1] < 0) return null;
    if (endCoord[0] > 9 || endCoord[0] < 0 || endCoord[1] > 9 || endCoord[1] < 0) return null;
    if (startCoord[0] - endCoord[0] === 0 && Math.abs(startCoord[1] - endCoord[1]) !== ship.length - 1 ||
        startCoord[1] - endCoord[1] === 0 && Math.abs(startCoord[0] - endCoord[0]) !== ship.length - 1) return null;

    let start;
    let end;
    // To allow right to left coords
    if (startCoord[0] > endCoord[0] || startCoord[1] > endCoord[1]) {
      start = endCoord;
      end = startCoord;
    } else {
      start = startCoord;
      end = endCoord;
    }
    
    // Check if each grid square between the start and end coords
    // are not occupied already
    if (Math.abs(start[0] - end[0]) > 0) {
      for (let i = start[0]; i <= end[0]; i++) {
        if (grid[i][startCoord[1]] !== undefined) return null;
      }
    } else if (Math.abs(start[1] - end[1]) > 0) {
      for (let i = start[1]; i <= end[1]; i++) {
        if (grid[start[0]][i] !== undefined) return null;
      }
    } else {
      if (grid[start[0]][end[1]] !== undefined) return null;
    }

    // Fill in the specified coordinates
    if (Math.abs(start[0] - end[0]) > 0) {
      for (let i = start[0]; i <= end[0]; i++) {
        grid[i][startCoord[1]] = ship;
      }
    } else if (Math.abs(start[1] - end[1]) > 0) {
      for (let i = start[1]; i <= end[1]; i++) {
        grid[start[0]][i] = ship;
      }
    } else {
      grid[start[0]][end[1]] = ship;
    }
    ships.push(ship);
    return ship;
  };

  // Returns true if legal attack, false otherwise
  const receiveAttack = (coords) => {
    for (let i = 0; i < hits.length; i++) {
      if (hits[i][0] === coords[0] && hits[i][1] === coords[1])
        return false;
    };
    for (let i = 0; i < misses.length; i++) {
      if (misses[i][0] === coords[0] && misses[i][1] === coords[1])
        return false;
    };
    if (grid[coords[0]][coords[1]] !== undefined) {
      grid[coords[0]][coords[1]].hit();
      hits.push(coords);
    } else {
      misses.push(coords);
    }
    return true;
  };

  const areAllShipsSunk = () => {
    if (ships.length === 0) return false;
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isSunk() === false) return false;
    }
    return true;
  }

  return { addShip, grid, ships, receiveAttack, misses, areAllShipsSunk, hits };
};

const gb = GameBoard();
gb.addShip([0,0],[0,0],Ship(1));
gb.receiveAttack([0,0])
gb.receiveAttack([0,0])