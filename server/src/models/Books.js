const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema(
  {
    bookId: {
      type: Number,
      required: [true, "Please provide a book id"],
    },
    authorKey: {
      type: String,
      required: [true, "Please provide aauthor key"],
    },
    authorName: {
      type: String,
      required: [true, "Please provide aauthor name"],
    },
    bookTitle: {
      type: String,
      required: [true, "Please provide book title"],
    },
    bookImage: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user ID who created the Booking"],
    },
  },
  { timestamps: true }
);

BooksSchema.pre("save", function (next) {
  // For any pre save items to do
  next();
});

module.exports = mongoose.model("Books", BooksSchema);
