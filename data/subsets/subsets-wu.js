/**
 * 关于不含重复元素的整数数组求子集——
 */

/** dfs
 * 数组中每一个元素在子集中有两种状态：要么存在，要么不存在
 * 构建一个二叉树，
 * 二叉树的第 i + 1 层表示子集加入或不加入第 i 个元素，
 * 左子树表示加入，右子树表示不加入，
 * 所有叶节点即为所求子集
 */

let subsets = nums => {
  let res = [];
  let temp = [];
  let getSubsets = (nums, temp, level, res) => {
    let tmp = temp.concat();
    if (level === nums.length) {
      res.push(tmp);
      return;
    }
    getSubsets(nums, tmp, level + 1, res);
    tmp.push(nums[level]);
    getSubsets(nums, tmp, level + 1, res);
  }
  getSubsets(nums, temp, 0, res);
  return res;
}

/**
 * 2，基于同质的递归
 * 找到比原问题规模小却同质的问题，都可以使用递归
 * 例如——
 * [1] 的子集为 [], [1]
 * [1, 2] 的子集为 [], [1], [2], [1, 2]
 * [1, 2] 的子集是在 [1] 的子集的基础上每一项加上 2，同时保留 [1] 的子集组成的
 */

/**
 * 3，位运算
 * 求子集问题就是求组合问题
 * 数组中的 n 个数可以用 n 个二进制位表示，
 * 当某一位为 1 表示选择对应的数，
 * 当为 0 表示不选择对应的数
 */

let nums = [1, 2, 3, 4];
console.log(subsets(nums));