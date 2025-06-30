const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 3030;
let ninetyDaysInSeconds = 90*24*60*60;

// Hide "X-Powered-By: Express"
app.use(helmet.hidePoweredBy());
//
app.use(helmet.xssFilter());
//
app.use(helmet.ieNoOpen());
// Prevent clickjacking
app.use(helmet.frameguard({ action: 'deny' }));

//maxAge: timeInSeconds, force: true}. You can create a variable ninetyDaysInSeconds = 90*24*60*60; to use for the timeInSeconds.
app.use(helmet.hsts({
  maxAge: timeInSeconds, 
  force: true               // request inclusion in browser preload list
}));
app.use(helmet.noSniff());










































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
