let isPalindrome = s => {
  if (s.length === 0) {
    return true;
  }
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let half = Math.floor(s.length / 2);
  let flag = 0;
  for (let i = 0; i < half; i++) {
    if (s.charAt(i) !== s.charAt(s.length - i - 1)) {
      flag = 1;
      break;
    }
  }
  if (flag === 1) {
    return false;
  }
  return true;
}

let isPalindrome2 = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  let _s = s.split('').reverse().join('');
  if (s === _s) {
    return true;
  }
  return false;
}

let s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome2(s));