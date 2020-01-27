const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// route  GET api/users/
// desc   get all users except current user
// private
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user.id } }).sort({
      role: "asc"
    });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// route  PUT api/users/:id
// desc   Update user role
// private
router.put("/:id/:role", auth, async (req, res) => {
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { role: req.params.role },
      {
        new: true
      }
    );

    res.send(user);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// route  POST api/users/:id
// desc   confirm a user
// private
router.post("/:id", auth, async (req, res) => {
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { confirmed: true },
      {
        new: true
      }
    );
    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// route  DELETE api/users/:id
// desc   delete user
// private
router.delete("/:id", auth, async (req, res) => {
  try {
    await User.findByIdAndRemove({ _id: req.params.id });
    res.json({ msg: "user removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
