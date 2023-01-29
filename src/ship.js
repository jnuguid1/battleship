export const Ship = (length = 0) => {
  let hits = 0;

  const getHits = () => {
    return hits;
  }

  const hit = () => {
    hits += 1;
  }

  const isSunk = () => {
    return hits - length >= 0;
  }

  return { getHits, hit, isSunk };
};