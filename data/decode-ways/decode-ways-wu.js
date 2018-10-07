let numDecodings = s => {
  /** 特殊的斐波那契数列
   * dp[i] = dp[i - 1] + dp[i - 2];
   * 1212
   */
  String.prototype.empty = function() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
  if (s.empty() || s.length > 1 && s[0] === '0') {
    return 0;
  }
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < dp.length; i++) {
    dp[i] = (s[i - 1] === '0') ? 0 : dp[i - 1];
    if (i > 1 && (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6'))) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[dp.length - 1];
}

console.log(numDecodings('226'));
