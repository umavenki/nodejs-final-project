import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";

import ListMyBooks from "../components/books/ListMyBooks";
import LoadingWrapper from "../components/loading/LoadingWrapper";
import ErrorAlert from "../components/error/ErrorAlert";
import { deleteBook, getMyBooks } from "../util/apiBooks";

const MyBooksPage = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const [myBooks, setMyBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyBooks = async () => {
      try {
        const res = await getMyBooks(user.id, token);
        setMyBooks(res.books || []);
      } catch (err) {
        setError(err.message || "Failed to load My Books");
      }
    };
    fetchMyBooks();
  }, [token]);

  const handleDeleteMyBook = async (book) => {
    try {
      const res = await deleteBook(book.bookId, token);
      console.log("Book delete successfully");
    } catch (err) {
      console.error("Failed to delete book:", err);
    }
  };

  return (
    <>
      <LoadingWrapper>
        {error && <ErrorAlert message={error} />}
        {!error && (
          <ListMyBooks books={myBooks} onDelete={handleDeleteMyBook} />
        )}
      </LoadingWrapper>
    </>
  );
};

export default MyBooksPage;
