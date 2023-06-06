#!/usr/bin/node
const arg = process.argv[2];
const mySquare = parseInt(arg);

if (!isNaN(mySquare)) {
  if (mySquare > 0) {
    for (let i = 0; i < mySquare; i++) {
      let row = "";
      for (let j = 0; j < mySquare; j++) {
        row += "X";
      }
      console.log(row);
    }
  } else {
    console.log("Size must be greater than 0");
  }
} else {
  console.log("Missing size");
}
