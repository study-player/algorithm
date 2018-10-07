let candy = ratings => {
  let n = ratings.length;
  let res = new Array(n).fill(1);
  let ans = new Array(n).fill(1);
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      res[i] = res[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      ans[i] = ans[i + 1] + 1;
    }
    sum += Math.max(res[i], ans[i]);
  }
  sum += Math.max(res[n - 1], ans[n - 1]);
  return sum;
}

let ratings = [1, 2, 87, 87, 87, 2, 1];
console.log(candy(ratings));