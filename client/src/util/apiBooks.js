import { getAllData, deleteData, postData, updateData, getData } from "./index";

const booksApiEndPoint = `${import.meta.env.VITE_APP_API_URL}/api/v1/books`;

const getAuthHeaders = (token) => {
  if (!token) {
    throw new Error("No authentication token found. User is not authorized.");
  }
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

const getAllBooks = async (title, author, token) => {
  const res = await getAllData(
    booksApiEndPoint + "/all",
    { title: title, author: author },
    getAuthHeaders(token)
  );
  if (!res) {
    return {};
  }
  return res.result;
};

const getMyBooks = async (user, token) => {
  const res = await getAllData(
    booksApiEndPoint,
    { user: user },
    getAuthHeaders(token)
  );
  return res || {};
};

const getBook = async (bookId, token) => {
  const res = await getData(
    `${booksApiEndPoint}/${bookId}`,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

const deleteBook = async (bookId, token) => {
  const res = await deleteData(
    `${booksApiEndPoint}/${bookId}`,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

const updateBook = async (book, token) => {
  const { bookId, ...requestBody } = book;
  const res = await updateData(
    `${booksApiEndPoint}/${bookId}`,
    requestBody,
    {},
    getAuthHeaders(token)
  );
  return res || {};
};

const createBook = async (book, token) => {
  const res = await postData(booksApiEndPoint, book, {}, getAuthHeaders(token));
  return res.data || {};
};

export { getAllBooks, getBook, getMyBooks, createBook, updateBook, deleteBook };
