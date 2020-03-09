const express = require('express');
const serverless = require('serverless-http');

const app = express();

const Review = require('../database/Review.js');

const router = express.Router();

router.use('/hostels/:hostelId', express.static(`${__dirname}/../client/dist`));

app.get('/api/hostels/:_id/reviews', (req, res) => {
  Review.find(req.params)
    .exec((err, reviews) => {
      if (err) throw err;
      res.send(reviews);
    });
});

app.use('/.netlify/functions/index', router);



module.exports = app;
module.exports.handler = serverless(app);
