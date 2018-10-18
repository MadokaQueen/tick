const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.get("/", (req, res) => {
  User.find()
    .sort({ email: 1 })
    .then(users => res.json(users));
});

router.get("/byEmail/:email/:num", (req, res) => {
  console.log("by email:", { email: req.params.email });
  User.find({ email: req.params.email }).then(users => res.json(users));
});

router.post("/", (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password
  });
  console.log({ newUser });
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.json({ success: false, err }));
});

router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, err }));
});

module.exports = router;
