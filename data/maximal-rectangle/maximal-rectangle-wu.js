let maximalRectangle = matrix => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  Array.prototype.top = function() {
    if (this.length === 0) {
      return undefined;
    }
    return this[this.length - 1];
  }
  Array.prototype.empty = function() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
  let n = matrix.length;
  let m = matrix[0].length;
  let height = new Array(m).fill(0);
  let res = 0;
  for (let i = 0; i < n; i++) {
    let area = [];
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === '0') {
        height[j] = 0;
      } else {
        height[j] += 1;
      }
      if (area.empty() || height[j] > height[area.top()]) {
        area.push(j);
      } else {
        while (area.length && height[area.top()] >= height[j]) {
          let tmp = area.pop();
          let length = 0;
          if (area.empty()) {
            length = j;
          } else {
            length = j - area.top() - 1;
          }
          res = Math.max(res, height[tmp] * length);
        }
        area.push(j);
      }
    }
    while (!area.empty()) {
      let tmp = area.pop();
      let length = 0;
      if (area.empty()) {
        length = m;
      } else {
        length = m - area.top() - 1;
      }
      res = Math.max(res, height[tmp] * length);
    }
  }
  return res;
}

let matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
];

console.log(maximalRectangle(matrix));
