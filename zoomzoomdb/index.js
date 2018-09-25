const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const router = express.Router();
const extra_cash_router = require('./controllers/cash/extra_cash_router');
const register_reading_router = require('./controllers/register/register_reading_router');
const login_router = require('./controllers/user/login_router');
const cash_in_flow_router = require('./controllers/total/cash_in_flow_router');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/cash', extra_cash_router);

app.use('/register', register_reading_router);
app.use('/total', cash_in_flow_router);

app.use('/user', login_router);

// app.use(verifyJWT);

app.listen(port, function() {
  console.log('Listening on', port);
});


function verifyJWT(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, require('./config/secret_key'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
}
