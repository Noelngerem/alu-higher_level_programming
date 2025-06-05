#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterUrl1 = 'https://swapi-api.alx-tools.com/api/people/18/';
const characterUrl2 = 'https://swapi-api.alx-tools.com/api/people/18';

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
    if (film.characters.includes(characterUrl1) || film.characters.includes(characterUrl2)) {
      count++;
    }
  }

  console.log(count);
});
