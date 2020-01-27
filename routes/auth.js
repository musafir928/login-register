const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// route  GET api/auth
// desc   get current user
// access Private: authentication needed
router.get("/", (req, res) => {
  res.send("get current user");
});

// route  POST api/auth
// desc   authenticate logged in user and get token
router.post(
  "/",
  [
    check("email", "please insert a valid email").isEmail(),
    check("password", "password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email }).select("+password");

      if (!user) {
        return res.status(400).json({ msg: "invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "invalid credentials" });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      const jwtSecret = process.env.jwtSecret || config.get("jwtSecret");

      // todo: create a user selector to set expiresIn value
      const expiresIn = "7d";

      jwt.sign(payload, jwtSecret, { expiresIn }, (err, token) => {
        if (err) {
          throw err;
        }
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
