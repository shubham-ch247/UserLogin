const express = require("express");
const {
  forgotPassword,
  newPassword,
  signup,
  verifyLink,
  login,
} = require("../../controllers/auth");
const handleValidationErrors = require("../../middleware/auth");
const forgotValidation = require("../../validation/auth");
const authRouter = express.Router();

authRouter.post("/signup", forgotValidation, handleValidationErrors, signup);
authRouter.post("/login", handleValidationErrors, login);
authRouter.post("/forgotPassword", forgotPassword);
// new password
authRouter.get("/newpassword/:id/:token", verifyLink);
authRouter.post(
  "/newpassword/:id/:token",
  forgotValidation,
  handleValidationErrors,
  newPassword
);
module.exports = authRouter;