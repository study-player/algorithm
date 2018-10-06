let exist = (board, word) => {
  if (board.length === 0 || board[0].length === 0) {
    return false;
  }
  let n = board.length;
  let m = board[0].length;
  let visited = [];
  for (let i = 0; i < n; i++) {
    visited[i] = [];
  }
  let dfs = (board, visited, row, col, index, word) => {
    // 深度搜索
    if (word.length === index) {
      return true;
    }
    if (row < 0 || col < 0 || row >= n || col >= m) return false;
    if (!visited[row][col] && word[index] === board[row][col]) {
      visited[row][col] = true;
      let res = 
          dfs(board, visited, row - 1, col, index + 1, word) ||
          dfs(board, visited, row + 1, col, index + 1, word) ||
          dfs(board, visited, row, col - 1, index + 1, word) ||
          dfs(board, visited, row, col + 1, index + 1, word);
      visited[row][col] = false;
      return res;
    }
    return false;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(board, visited, i, j, 0, word)) return true;
    }
  }
  return false;
}

let board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
let word = 'SAD';
console.log(exist(board, word));