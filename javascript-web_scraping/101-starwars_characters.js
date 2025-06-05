#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error(`code: ${response.statusCode}`);
    return;
  }
  const data = JSON.parse(body);
  const characters = data.characters;

  const printCharacter = (index) => {
    if (index >= characters.length) {
      return;
    }
    request(characters[index], (err, res, charBody) => {
      if (err) {
        console.error(err);
        return;
      }
      if (res.statusCode !== 200) {
        console.error(`code: ${res.statusCode}`);
        return;
      }
      const character = JSON.parse(charBody);
      console.log(character.name);
      printCharacter(index + 1);
    });
  };

  printCharacter(0);
});
