#!/usr/bin/node
function add(a, b) {
  return a + b;
}

function incr(num) {
  return num + 1;
}

const result = add(3, 4);
console.log(result);

const incrementedValue = incr(5);
console.log(incrementedValue);
