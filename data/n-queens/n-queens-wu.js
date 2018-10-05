let n_queens = n => {
  let queen = new Array(n).fill(-1);  
  // 初始化一个长度为n的数组，并给每一项赋值为 -1
  /* Tip：因为一行只可能有一个皇后，
       所以可以使用一个一维数组来存储每一行皇后所对应的列数 */
  count = 0;
  let available = (row, col) => {
    for (let i = 0;i < row;i++) {
      if ((queen[i] == col) || (Math.abs(queen[i]-col) == Math.abs(i - row))) {
        //Tip: 检查是否存在同一列或者斜对角线上
        return false;
      }
    }
    return true;
  }
  let find = row => {
    if (row === n) {
      count += 1;
    } else {
      for (let col = 0;col < n;col++) {
        if (available(row, col)) {
          //Tip: 深度优先算法
          queen[row] = col;
          find(row + 1);
        }
      }
    }
  }
  find(0);
  return count;
}