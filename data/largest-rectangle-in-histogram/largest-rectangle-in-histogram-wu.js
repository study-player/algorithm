let largestRectangleArea = heights => {
  /**
   * 最简单的写法是，遍历 heights 的每一个元素，然后对于每个元素，再去往左往右寻找边界
   * 时间复杂度为 O(n^2)
   * 所以考虑使用 单调栈 来优化寻找左右边界的过程
   */
  if (heights.length === 0) {
    return 0;
  }
  let res = 0;
  let s = [];
  /**
   * 设计一个单调栈存放一组下标
   * 对于栈中的每一个下标对应的 heights 中的元素的左边第一个比它小的元素的下标就是栈中前一个下标
   */
  for (let i = 0; i < heights.length; i++) {
    while (s.length && heights[i] <= heights[s[s.length - 1]]) {
      let cur = s.pop();
      let left = s.length ? s[s.length - 1] : -1;
      let tmp =  (i - left - 1) * heights[cur];
      /**
       * 对于栈中的每一个下标对应的 heights 中的元素的左边第一个比它小的元素的下标就是栈中前一个下标
       * 所以 栈中的每一个下标 + 1，才是实际的边界
       * 如，heights = [2, 5, 4, 5],
       * 存放在 栈中可能是 s = [0, 2]
       * 但是对于 heights中值为4的 来说，下标为 1 的元素才是左边界
       */
      res = Math.max(res, tmp);
    }
    s.push(i);
  }
  while (s.length) {
    let cur = s.pop();
    let left = s.length ? s[s.length - 1] : -1;
    let tmp = (heights.length - left - 1) * heights[cur];
    res = Math.max(res, tmp);
  }
  return res;
}

let heights = [6, 2, 5, 4, 6, 5, 1];
console.log(largestRectangleArea(heights));