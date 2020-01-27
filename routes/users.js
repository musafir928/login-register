const express = require("express");
const router = express.Router();

// route  GET api/users/
// desc   get all users
router.post("/", (req, res) => {
  res.send("get all users");
});

// route  PUT api/users/:id
// desc   Update user role
// private
router.put("/:id", (req, res) => {
  res.send("update user role" + id);
});

// route  DELETE api/users/:id
// desc   delete user
// private
router.delete("/:id", (req, res) => {
  res.send("delete a user" + id);
});

module.exports = router;
