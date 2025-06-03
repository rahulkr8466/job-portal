const express = require("express");
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
