let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let print = name => {
  console.log(`Hello, ${name}!`);
}
console.log('What is your name?');
rl.on('line', line => {
  print(line);
  rl.close();
});

/**
 * 为方便起见，
 * 实际编写算法的时候，可以只定义[解决问题的函数]，
 * 调用函数，硬编码输入参数进行验证
 */
