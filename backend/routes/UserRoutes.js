const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  countAllUsers,
  countByRole,
  checkViewingTime,
  updateViewingSettings,
  getLoggedInUser,
} = require("../controllers/UserController");

const verifyToken = require("../middlewares/verifyToken");

// ========== AUTH ROUTES ==========
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

// ========== USER CRUD ROUTES ==========
router.get("/get-all-users", verifyToken, getAllUsers);
router.get("get-user-by-id/:id", verifyToken, getUserById);
router.put("/update-user/:id", verifyToken, updateUser);
router.delete("/delete-user/:id", verifyToken, deleteUser);

// ========== USER COUNT ROUTES ==========
router.get("/count-all-users/all", verifyToken, countAllUsers);
router.get("/count-user-by-role/user-role", verifyToken, countByRole);

// ========== VIEWING TIME ROUTES ==========
router.post(
  "/update-viewing-settings/update",
  verifyToken,
  updateViewingSettings
);
router.get("/restricted", verifyToken, checkViewingTime, (req, res) => {
  res.json({ message: "Access allowed within viewing time limits" });
});
router.get("/me", getLoggedInUser);

module.exports = router;
