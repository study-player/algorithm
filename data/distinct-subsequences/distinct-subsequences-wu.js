let numDistinct = (s, t) => {
  /**
   * 递归的写法，但在本题中效率不如动态规划高
   */
  if (s.length === 0) return t.length === 0 ? 1 : 0;
  if (t.length === 0) return 1;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === t.charAt(0)) {
      res += numDistinct(s.substring(i + 1), t.substring(1));
    }
  }
  return res;
}

let numDistinct2 = (s, t) => {
  /**
   * 动态规划的写法
   * 
   *   Ø r a b b i t
   * Ø 1 0 0 0 0 0 0
   * r 1 1 0 0 0 0 0
   * a 1 1 1 0 0 0 0
   * b 1 1 1 1 0 0 0
   * b 1 1 1 2 1 0 0
   * b 1 1 1 3 3 0 0
   * i 1 1 1 3 3 3 0
   * t 1 1 1 3 3 3 3
   * 
   * dp[i][j] = dp[i - 1][j] + (t[i - 1] === s[j - 1] ? dp[i - 1][j - 1] : 0)
   * 类似 0 1 背包问题
   */
  if (s === null || t === null) return 0;
  let dp = [];
  for (let i = 0; i < s.length + 1; i++) {
    dp[i] = new Array(t.length + 1).fill(0);
    dp[i][0] = 1;
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      dp[i][j] = dp[i - 1][j];
      if (s.charAt(i - 1) === t.charAt(j - 1)) {
        dp[i][j] += dp[i - 1][j - 1];
      }
    }
  }
  return dp[s.length][t.length];
}
let numDistinct3 = (s, t) => {
  /**
   * 动态规划 一维数组的写法
   * 三种方法中最快的一种
   */
  let dp = new Array(t.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = t.length; j > 0; j--) {
      dp[j] += t[j - 1] === s[i - 1] ? dp[j - 1] : 0;
    }
  }
  return dp[t.length];
}

let s = 'rabbbit';
let t = 'rabbit';
console.log(numDistinct3(s, t));