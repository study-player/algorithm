# 路径总和 II

## 题目描述

给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点

## 输入示例

```javascript
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
    // 采取队列的数据结构生成二叉树
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
```