let users = [];

require('dotenv').config();
const express = require('express'),
  axios = require('axios'),
  bodyParser = require('body-parser');

const app = express();
const { SERVER_PORT } = process.env;

app.use(bodyParser.json());

console.log(users.length);

// fetch 20 users from API, once
app.use(async (req, res, next) => {
  if (users.length < 1) {
    await axios
      .get(
        'https://randomuser.me/api/?nat=us&results=20&inc=gender,picture,location,name,email,dob'
      )
      .then((axiosRes) => {
        // console.log(axiosRes.data.results);
        users.push(axiosRes.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  next();
});

console.log(users);

// PUBLIC ENDPOINTS

// fetch users stored locally
app.get('/api/users', (req, res) => {
  try {
    res.send(users).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// PRIVATE ENDPOINTS

// fetch friends list
app.get('/api/:user/friends', (req, res) => {
  //
});

// add friend to friends list
app.put('/api/:user/:friend', (req, res) => {
  //
});

// remove friend from friends list
app.delete('/api/:user/:friend', (req, res) => {
  //
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening to port ${SERVER_PORT}`);
});
