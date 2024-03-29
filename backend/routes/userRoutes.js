const express = require('express')
const {
  userAuth,
  getUserProfile,
  newUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} = require("../controllers/userController.js");

const { protect , admin} = require("../middlewares/authMiddleware.js");

const router = express.Router();
router.route("/").post(newUser).get(protect,admin, getUsers)
router.post("/login", userAuth);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/:id").delete(protect, admin, deleteUser).get(protect,admin,getUserById).put(protect,admin,updateUser)

module.exports = router;
