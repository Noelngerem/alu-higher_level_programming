#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error(`code: ${response.statusCode}`);
    return;
  }
  const todos = JSON.parse(body);
  const completedTasks = {};

  for (const task of todos) {
    if (task.completed) {
      completedTasks[task.userId] = (completedTasks[task.userId] || 0) + 1;
    }
  }

  console.log(completedTasks);
});
