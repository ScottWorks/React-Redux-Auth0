require('dotenv').config();

const express = require('express'),
  axios = require('axios'),
  bodyParser = require('body-parser');

const app = express();
const { SERVER_PORT } = process.env;

app.use(bodyParser.json());

app.listen(SERVER_PORT, () => {
  console.log(`Listening to port ${SERVER_PORT}`);
});
