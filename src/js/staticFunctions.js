const maxColValInMatrix = (matrix, col, func) => {
  let max = -1;
  matrix.forEach(value => {
    max = Math.max(max, func(value[col]));
  });
  return max;
};
const minColValInMatrix = (matrix, col, func) => {
  let min = Number.MAX_SAFE_INTEGER;
  matrix.forEach(value => {
    min = Math.min(min, func(value[col]));
  });
  return min;
};
export { maxColValInMatrix, minColValInMatrix };
