const Books = require("../models/Books");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

// GET ALL BOOKS from Public API
const getAllBooks = async (req, res) => {
  let url = "https://openlibrary.org/search.json";
  console.dir(req.body, { depth: null });
  let title = req.body.title ?? req.query.title;
  console.log("Request title:" + title);
  if (title) {
    url = url + "?title=" + title;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.message === "No Events Returned") {
      return { message: "No Events Returned" }; // Return a specific object
    }

    if (!data) {
      throw new Error("No events found or invalid response from API.");
    }
    let result = [];
    Object.keys(data.docs).forEach((key) => {
      const book = data.docs[key];

      // book["bookId"] =
      //   book["key"] || book["cover_edition_key"] || book["edition_key"]?.[0];
      book["bookId"] = book["cover_i"];
      book["bookTitle"] = book["title"];
      book["authorKey"] = book["author_key"]?.[0] ?? "";
      book["authorName"] = book["author_name"]?.[0] ?? "";
      book["bookImage"] =
        "https://covers.openlibrary.org/a/olid/" + book["author_key"] + ".jpg";
      book["coverImage"] =
        "https://covers.openlibrary.org/a/olid/" +
        book["cover_edition_key"] +
        ".jpg";
      result.push(book);
    });
    res.status(StatusCodes.OK).json({ result, count: result.length });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    });
  }
};

// GET ALL User Favorite BOOKS
const getMyBooks = async (req, res) => {
  try {
    console.log("Request user:" + req.user.userId);
    console.log("Request title:" + req.user.title);
    const books = await Books.find({ createdBy: req.user.userId }).sort({
      createdAt: -1,
    });
    res.status(StatusCodes.OK).json({ books, count: books.length });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    });
  }
};
// GET SINGLE BOOKING
const getBook = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await Books.findOne({ _id: bookId, createdBy: userId });

  if (!book) {
    throw new NotFoundError(`No book found with id: ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};

// CREATE FAV BOOK
const createBook = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log("Create:", req.body);
  const book = await Books.create(req.body);

  res.status(StatusCodes.CREATED).json({ book });
};

// DELETE FAV Book
const deleteBook = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await Books.findOneAndDelete({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`No book found with id: ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ msg: "The entry was deleted." });
};

module.exports = {
  getAllBooks,
  getMyBooks,
  getBook,
  createBook,
  deleteBook,
};
