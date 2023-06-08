#!/usr/bin/node

const file = process.argv[2];
const f1 = require('f1');

f1.readFile(file, 'utf8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
