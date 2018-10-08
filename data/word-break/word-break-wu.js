let wordBreak = (s, wordDict) => {
  /**
   * 动态规划
   * dp[i] 表示 s 的前 i 个字符构成的子串能否由 wordDict 表示
   */
  if (wordDict.length === 0) {
    return false;
  }
  let n = s.length;
  if (n === 0) return false;
  let dp = new Array(n + 1);
  let maxLength = 0;
  for (let i = 0; i < wordDict.length; i++) {
    maxLength = Math.max(maxLength, wordDict[i].length);
    // 得出 wordDict 中元素的最大长度，减少寻找子串的次数
  }
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    dp[i] = false;
    for (let j = 1; j <= maxLength && j <= i; j++) {
      if (!dp[i - j]) continue;
      let word = s.substring(i - j, i);
      if (wordDict.indexOf(word) !== -1) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}

let s = 'catsandog';
let wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
console.log(wordBreak(s, wordDict));