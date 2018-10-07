class TreeNode {
  constructor(val) {
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
  if (index < num.length) {
    let _left = new TreeNode(num[index]);
    tmp.left = _left;
    list.push(_left);
    let _right = new TreeNode(num[index + 1]);
    tmp.right = _right;
    list.push(_right);
  }
  index += 2;
}
console.log(rot);