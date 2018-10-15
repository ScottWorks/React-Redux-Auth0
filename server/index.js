require('dotenv').config();

const express = require('express'),
  axios = require('axios'),
  bodyParser = require('body-parser');

const app = express();
const { SERVER_PORT } = process.env;

app.use(bodyParser.json());

// PUBLIC ENDPOINTS

// fetch 20 users from API
app.get('/api/users', (req, res) => {
  axios
    .get(
      'https://randomuser.me/api/?nat=us&results=20&inc=gender,picture,location,name,email,dob'
    )
    .then((axiosRes) => {
      res.send(axiosRes.data.results).status(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
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
