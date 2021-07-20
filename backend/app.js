
const express = require('express');
const morgan = require('morgan');  // HTTP request logger middleware for Node.js and Express
const cors = require('cors');//configure your API server to allow these types of cross-origin requests from trusted origins
const csurf = require('csurf');
const helmet = require('helmet');  //Helmet helps you secure your Express apps by setting various HTTP headers.
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { environment } = require('./config');
const { ValidationError } = require('sequelize');
const isProduction = environment === 'production'; //checking the environment key in the configuration file 

const app = express();  //initialize the express application

app.use(morgan('dev'));  //connect morgan middleware for logging info about req/res
app.use(cookieParser());  // middleware for parsing cookies
app.use(express.json());  //middleware for parsing JSON bodies of requests with Content-Type of "application/json"

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}
// helmet helps set a variety of headers to better secure your app
app.use(helmet({
    contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
//The csurf middleware will add a _csrf cookie that is HTTP-only (can't be read by JavaScript) to any server response
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",  //cookies need to be set and read via HTTPS connections. But from February, cookies will default into “SameSite=Lax,” which means cookies are only set when the domain in the URL of the browser matches the domain of the cookie — a first-party cookie.
            httpOnly: true,
        },
    })
);


app.use(routes); //connects all the routes

// Catch unhandled requests and forward to error handler.
//next invoked with nothing means error handlers defined after this middleware will not be invoked. But next invoked with an error means that error handlers defined after this middleware will be invoked.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;