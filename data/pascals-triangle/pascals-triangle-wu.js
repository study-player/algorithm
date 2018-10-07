let generate = numRows => {
  /**
   * 脑子一动不动写出来的东西……效率比较低
   */
  if (numRows === 0) {
    return [];
  };
  let res = [[1]];
  for (let i = 1; i < numRows; i++) {
    res[i] = [1];
    for (let j = 0; j < res[i  - 1].length; j++) {
      let tmp = res[i - 1][j] + res[i - 1][j + 1];
      if (!isNaN(tmp)) {
        res[i].push(tmp);
      }
    }
    res[i].push(1);
  }
  return res;
}

let generate2 = numRows => {
  let arr = [];
  for(let i = 0; i < numRows; i++){
    let length = i + 1;
    let subArr = new Array(length);
    subArr[0] = 1;
    subArr[length - 1] = 1;
    arr.push(subArr);
  }
  for(let index = 1; index < numRows; index++){
    arr.forEach((subArr, i)=>{
      if (i > index) {
        let last_arr = arr[i - 1];
        let last_1 = last_arr[index - 1];
        let last_2 = last_arr[index];
        subArr[index] = last_1 + last_2;
      }
    });
  }
  return arr;
}

let numRows = 5;
console.log(generate2(numRows));