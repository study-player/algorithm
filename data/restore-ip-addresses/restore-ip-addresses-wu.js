let restoreIpAddress = s => {
  /**
   * IP 地址分为 4 节，每节取值范围在 [0, 255]
   * 对于取出的字符串，如果它的第一位是'0'，
   * 那么它的长度只能为1，多位字符不能以0作为开头；
   * 每次取出[1, 3]个字符，判断是否符合 IP 地址的条件，
   * 若符合，则递归剩下的字符串，直到四节都符合，
   * 那么就得到了一个解
   */

  let res = [];
  let dfs = (prefix, idx) => {
    if (prefix.length === 4 && idx === s.length) {
      res.push(prefix.join('.'));
      return;
    }
    if (prefix.length === 4 || idx === s.length) {
      return;
    }
    for (let i = idx; i < s.length; i++) {
      if (i !== idx && s[idx] === '0') return;
      let num = parseInt(s.slice(idx, i + 1));
      if (num > 255) {
        return;
      }
      prefix.push(num);
      dfs(prefix, i + 1);
      prefix.pop();
    }
  }
  dfs([], 0);
  return res;
}

let restoreIpAddress1 = (s) => {
  /**
   * 迭代的写法
   */
  let res = [];
  let len = s.length;
  let isValid = s => {
    if (s.length > 3 ||
        s.length === 0 ||
        (s.charAt(0) === '0' && s.length > 1) ||
        parseInt(s) > 255) return false;
    return true;
  }
  for (let i = 1; i < 4 && i < len - 2; i ++) {
    for (let j = i + 1; j < i + 4 && j < len - 1; j++) {
      for (let k = j + 1; k < j + 4 && k < len; k++) {
        let s1 = s.substring(0, i),
            s2 = s.substring(i, j),
            s3 = s.substring(j, k);
            s4 = s.substring(k, len);
        if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
          res.push([s1, s2, s3, s4].join('.'));
        }
      }
    }
  }
  return res;
}

let s = '25525511135';
console.log(restoreIpAddress(s));

/**
 * 一是只要遇到字符串的子序列或配准问题首先考虑动态规划DP，
 * 二是只要遇到需要求出所有可能情况首先考虑用递归。
 */