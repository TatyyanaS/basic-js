const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    throw new Error('Invalid input');
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      let count = 0;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          const ni = i + x;
          const nj = j + y;

          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            count += matrix[ni][nj] ? 1 : 0;
          }
        }
      }

      row.push(matrix[i][j] ? 1 : count);
    }

    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper
};
