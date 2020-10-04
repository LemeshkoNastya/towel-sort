module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  } else {
    let answer = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          answer.push(matrix[i][j]);
        }
      } else {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          answer.push(matrix[i][j]);
        }
      }
    }	
    return answer;
  }
}