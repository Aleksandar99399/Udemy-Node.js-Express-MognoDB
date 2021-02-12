const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('../controllers/authController');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// router.param('id', tourController.checkId);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'leader-guide'),
    tourController.deleteTour
  );

// POST /tour/1211155/reviews
// GET /tour/1211155/reviews
// GET /tour/1211155/reviews/423fewf12

router
  .route('/:tourId/reviews')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
