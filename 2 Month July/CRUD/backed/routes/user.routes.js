const express = require('express');
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.post('/create-user', createUser);
router.put('/update-user/:id', updateUser);
router.delete('/delete-user/:id', deleteUser);

module.exports = router;