var numbers = process.argv.slice(2);
var sum = 0;
numbers.forEach(function(n) {
  sum += +n;
});

console.log(sum);