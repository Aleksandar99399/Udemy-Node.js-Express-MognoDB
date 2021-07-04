const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('../controllers/authController');
const router = express.Router();
// const reviewController = require('../controllers/reviewController');
const reviewRouter = require('../routes/reviewRoutes');

// router.param('id', tourController.checkId);

// POST /tour/1211155/reviews
// GET /tour/1211155/reviews
// GET /tour/1211155/reviews/423fewf12
router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'leader-guide', 'guide'),
    tourController.getMonthlyPlan
  );

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
// /tours-distance?distance=233&center=-40,45&unit=miles
// /tours-distance/233/center/-40,45/unit/miles
router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'leader-guide'),
    tourController.createTour
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'leader-guide'),
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'leader-guide'),
    tourController.deleteTour
  );

module.exports = router;
