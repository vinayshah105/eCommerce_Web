const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');

const start = async () => {
  try {
    await mongoDB();
    app.listen(port, () => {
      console.log(` App listening on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};
