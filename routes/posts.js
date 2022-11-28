const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.put("/completed/:id", postsController.completed);

router.delete("/delete/:id", postsController.delete);


module.exports = router;

