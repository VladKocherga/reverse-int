module.exports = function reverse (n) {
 n = String(n);
 let a = n.split('').reverse().join('');
 let result = Number.parseInt(a);
 return result;
}
