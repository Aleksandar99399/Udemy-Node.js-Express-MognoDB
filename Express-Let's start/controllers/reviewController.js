const Review = require('../models/reviewModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews
    }
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) {
    req.body.tour = req.params.tourId;
  }
  // req.user.id - get user from previous middleware or current token
  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  const newReview = await Review.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      newReview
    }
  });
});
