let wordBreak = (s, wordDict) => {
  /**
   * 一般思路是写递归
   * 但是可以先检查是否可分
   * 如果可分再进行递归
   */
  let isBreak = () => {
    let n = s.length;
    if (n === 0) return [];
    let dp = new Array(n + 1);
    let maxLength = 0;
    for (let i = 0; i < wordDict.length; i++) {
      maxLength = Math.max(maxLength, wordDict[i].length);
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
  let res = [];
  let dfs = (s, wordDict, list) => {
    if (s.length === 0) {
      let concat = '';
      for (let i = 0; i < list.length; i++) {
        concat += list[i];
        if (i !== list.length - 1) {
          concat += ' ';
        }
      }
      res.push(concat);
    }
    for (let i = 0; i < wordDict.length; i++) {
      let cur = wordDict[i];
      if (cur.length > s.length) {
        continue;
      }
      let substr = s.substring(0, cur.length);
      if (substr === cur) {
        list.push(substr);
        dfs(s.substring(cur.length), wordDict, list);
        list.pop();
      }
    }
  }
  if (isBreak(s, wordDict)) {
    dfs(s, wordDict, []);
  } else {
    return [];
  }
  return res;
}

let s = 'catsanddog';
let wordDict = ["cat", "cats", "and", "sand", "dog"];
console.log(wordBreak(s, wordDict));