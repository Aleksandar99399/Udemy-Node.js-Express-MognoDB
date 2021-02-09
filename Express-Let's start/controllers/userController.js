const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res) => {
  // we can to use try catch blok

  const users = await User.find();
  res.status(200).json({
    staus: 'success',
    data: {
      users,
    },
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    staus: 'error',
    message: 'This route is not yet difined',
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    staus: 'error',
    message: 'This route is not yet difined',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    staus: 'error',
    message: 'This route is not yet difined',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    staus: 'error',
    message: 'This route is not yet difined',
  });
};
