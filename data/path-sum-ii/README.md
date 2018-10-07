# 路径总和 II

## 题目描述

给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点

## 输入示例

```javascript
class TreeNode {
  construct(val) {
    this.val = val;
    this.left = this.right = null;
  }
}
let num = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
let rot = new TreeNode(num[0]);
let list = [rot];
let index = 1;
while (list.length) {
  let tmp = list.shift();
  if (num[index] !== null && index < num.length) {
    if (index % 2 !== 0) {
      let _left = new TreeNode(num[index]);
      tmp.left = _left;
      list.push(_left);
    } else {
      let _right = new TreeNode(num[index]);
      tmp.right = _right;
      list.push(_right);
    }
  }
}
console.log(rot);
```