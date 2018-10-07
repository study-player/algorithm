let minimumTotal = triangle => {
  /**
   * 使用递归解题，但是时间复杂度很高
   */
  if (triangle.length === 0 || triangle[0].length === 0) {
    return 0;
  }
  let n = triangle.length;
  let sum = triangle[0][0];
  let flag = 0;
  let getMinimum = (index, count, tmp) => {
    if (count === n) {
      if (!flag) {
        sum = tmp;
        flag = 1;
        return;
      }
      sum = Math.min(sum, tmp);
      return;
    }
    getMinimum(index, count + 1, tmp + triangle[count][index]);
    getMinimum(index + 1, count + 1, tmp + triangle[count][index + 1]);
  }
  getMinimum(0, 1, sum);
  return sum;
}

let minimumTotal2 = triangle => {
  /**
   * 动态规划
   * dp[i][j] = data[i][j] + min(dp[i + 1][j], dp[i + 1][j + 1]);
   * dp[i][j] 表示从第 i 行第 j 列处的数字开始往下到最后一层的最小路径和
   */
  let n = triangle.length;
  if (n === 0) {
    return 0;
  }
  let dp = triangle[triangle.length - 1];
  for (let i = triangle.length - 2; i > -1; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = (dp[j] < dp[j + 1] ? dp[j] : dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
}

let triangle = [
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3],
];

console.log(minimumTotal2(triangle));