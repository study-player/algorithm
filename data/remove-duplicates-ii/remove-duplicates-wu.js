let removeDuplication = nums => {
  if (nums.length <= 2) {
    return nums.length;
  }
  let count = 1;
  let pre = nums[0];
  let index = 1;
  while (true) {
    if (nums[index] === pre) {
      count++;
      if (count > 2) {
        nums.splice(index, 1);
      } else {
        index++;
      }
    } else {
      pre = nums[index];
      count = 1;
      index++;
    }
    if (index === nums.length) {
      break;
    }
  }
  return nums.length;
}

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplication(nums));
console.log(nums);