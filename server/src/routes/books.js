const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getMyBooks,
  getBook,
  createBook,
  deleteBook,
} = require("../controllers/books");

router.route("/").post(createBook).get(getMyBooks);
router.route("/all").get(getAllBooks);
router.route("/:id").get(getBook).delete(deleteBook);

module.exports = router;
