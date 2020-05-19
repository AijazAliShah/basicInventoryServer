var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const Product = require("./models/Product");
const passport = require('passport');
var app = express();



var cors = require('cors');
app.use(cors());
//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '1000kb' }));

//DB config
const db = require("./config/keys").mongoURI;
//connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});


//post store
app.post('/add/product', async (req, res) => {
  console.log(req.body)
  let product = new Product({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    serialNo: req.body.serialNo
  });

  product.save(function (err) {
    if (err) {
      console.error(err);
      res.status(200).send({
        success: 'false',
        message: 'product not post',
        product,
      })
    } else {
      res.status(200).send({
        success: 'true',
        message: 'product post',
        product,
      })
    }
  });

});

//get all stores
app.get('/get/products/', (req, res) => {

  Product.find({})
  .then(products => {
    res.json(products);
  })
  .catch(err => res.status(404).json(err));
}

);

//get store by id
app.get('/get/product/:id', (req, res) => {

  Product.findOne({ serialNo: req.params.id })
  .then(product => {
    console.log(product)
    res.json(product);
  })
  .catch(err => res.status(404).json(err));
}

);

//edit store by id
app.put("/edit/product/:id", async (req, res) => {
  console.log("m", req.params.tId)
  Product.updateOne({ _id: req.params.id }, {
    $set: {
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    }
  }, { upsert: true }, function (err, user) {
    res.status(200).send({
      success: 'true',
      message: 'product updated'
    })
  });
});

//edit store by id
app.put("/edit/product/quantity/:id", async (req, res) => {
  console.log("m", req.body.quantity)
  Product.updateOne({ _id: req.params.id }, {
    $set: {
      quantity: req.body.quantity,
    }
  }, { upsert: true }, function (err, user) {
    res.status(200).send({
      success: 'true',
      message: 'product updated'
    })
  });
});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
