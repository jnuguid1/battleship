export default function Ship(length = 0, ship) {
  let hits = 0;

  const getHits = () => {
    return hits;
  }

  const hit = () => {
    hits += 1;
  }

  const isSunk = () => {
    return length - hits <= 0;
  }

  return { getHits, hit, isSunk, length, ship };
};