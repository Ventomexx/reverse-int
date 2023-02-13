module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  let arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return +str;
}
