let grayCode = n => {
  if (n === 0) {
    return [0];
  }
  let res = [];
  let len = Math.pow(2, n);
  for (let i = 0; i < len; i++) {
    res.push((i >> 1) ^ i);
  }
  return res;
}

let n = 2;
console.log(grayCode(n));