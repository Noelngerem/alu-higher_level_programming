#!/usr/bin/node
const args = process.argv.slice(2).map(x => parseInt(x));

if (args.length < 2) {
  console.log(0);
} else {
  let max = args[0];
  let secondMax = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < args.length; i++) {
    if (args[i] > max) {
      secondMax = max;
      max = args[i];
    } else if (args[i] > secondMax && args[i] !== max) {
      secondMax = args[i];
    }
  }

  console.log(secondMax === Number.NEGATIVE_INFINITY ? 0 : secondMax);
}
