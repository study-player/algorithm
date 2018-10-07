let pathSum = (root, sum) => {
  let res = [];
  let current_res = [];
  let dfs = (root, sum, current_res, res) => {
    if (root === null) return;
    current_res.push(root.val);
    if (root.left === null && root.right === null && sum === root.val) {
      res.push(current_res.slice());
      current_res.pop(); // 回溯
      return;
    } else {
      dfs(root.left, sum - root.val, current_res, res);
      dfs(root.right, sum - root.val, current_res, res);
    }
    current_res.pop(); // 回溯
  }
  let dfs2 = (root, sum) => {
    /**
     * dfs 的另一种写法
     */
    if (root === null) return;
    current_res.push(root.val);
    if (root.val === sum && root.right === null && root.left === null) {
      res.push(current_res.slice());
    }
    dfs2(root.left, sum - root.val);
    dfs2(root.right, sum - root.val);
    current_res.pop();
  }
  // dfs(root, sum, current_res, res);
  dfs2(root, sum);
  return res;
}

let generate_tree_node = (num) => {
  if (!Array.isArray(num)) return null;
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  let root = new TreeNode(num[0]);
  let list = [root];
  let index = 1;
  while (list.length) {
    let tmp = list.shift();
    // 采取队列的数据结构，生成二叉树
    if (index < num.length) {
      if (num[index] !== null) {
        let _left = new TreeNode(num[index]);
        tmp.left = _left;
        list.push(_left);
      } else {
        tmp.left = null;
      }
      if (num[index + 1] !== null) {
        let _right = new TreeNode(num[index + 1]);
        tmp.right = _right;
        list.push(_right);
      } else {
        tmp.right = null;
      }
    } else {
      break;
    }
    index += 2;
  }
  return root;
}
let num = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
let root = generate_tree_node(num);
let sum = 22;
console.log(pathSum(root, sum));