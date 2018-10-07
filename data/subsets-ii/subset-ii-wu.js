let subsetsWithDup = nums => {
  if (nums.length === 0) {
    return [[]];
  }
  let res = [];
  let out = [];
  nums.sort((a, b) => a - b);
  let getSubsets = (nums, pos, out, res) => {
    let tmp = out.concat();
    /**
     * 如果直接将 out 数组push进 res 中，
     * 因为 数组 是引用类型，
     * 会导致后续对 out 的修改也同步到 res 中已有的数组，
     * 所以需要拷贝一个新的数组
     */
    res.push(tmp);
    tmp = null;
    for (let i = pos; i < nums.length; i++) {
      out.push(nums[i]);
      getSubsets(nums, i + 1, out, res);
      out.pop();
      while (i + 1 < nums.length && nums[i] === nums[i + 1]) ++i;
      /**
       * 跳过重复的子集
       */
    }
  }
  getSubsets(nums, 0, out, res);
  return res;
}

let subsetsWithDup2 = nums => {
  let result = [];
  if (!nums || !nums.length) {
    return result;
  }
  nums.sort((a, b) => a - b);
  let subsetHelp = (result, tmp, nums, pos) => {
    /** 本质上也是构建了一颗二叉树，
     * 二叉树的第 i + 1 层表示子集加入或不加入第 i 个元素，
     * 左子树表示加入，右子树表示不加入，
     * 所有叶节点即为所求子集
     */
    result.push([].concat(tmp));
    for (let i = pos; i < nums.length; i++) {
      if (i != pos && nums[i] === nums[i - 1]) {
        continue;
      }
      tmp.push(nums[i]);
      subsetHelp(result, tmp, nums, i + 1);
      tmp.pop();
    }
  }
  subsetHelp(result, [], nums, 0);
  return result;
}
let nums = [1, 2, 2];
console.log(subsetsWithDup2(nums));