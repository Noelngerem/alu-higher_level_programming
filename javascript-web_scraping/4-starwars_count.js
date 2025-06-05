#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = '/18/';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error(`code: ${response.statusCode}`);
    return;
  }
  const data = JSON.parse(body);
  let count = 0;

  for (const film of data.results) {
    if (film.characters.some(charUrl => charUrl.endsWith(characterId))) {
      count++;
    }
  }

  console.log(count);
});
