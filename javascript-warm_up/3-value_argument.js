#!/usr/bin/node
const arg = process.argv[4];
if (arg === undefined) {
	console.log('No argument');
} else {
	console.log(arg);
}
