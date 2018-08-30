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


app.listen(port, function() {
  console.log('Listening on', port);
});
