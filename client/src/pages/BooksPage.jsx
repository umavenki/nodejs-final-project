import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ListBooks from "../components/books/ListBooks";
import LoadingWrapper from "../components/loading/LoadingWrapper";
import ErrorAlert from "../components/error/ErrorAlert";
import SearchBooks from "../components/books/SearchBooks/SearchBooks";
import AppliedFilters from "../components/books/SearchBooks/AppliedFilters";
import { getAllBooks } from "../util/apiBooks";
import { createBook } from "../util/apiBooks";

const BooksPage = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const titleVal = "";
  const authorVal = "";

  const [title, setTitle] = useState(titleVal);
  const [author, setAuthor] = useState(authorVal);
  const [listBooks, setListBooks] = useState([]);

  const [searchTerm, setSearchTerm] = useState({
    title: titleVal,
    author: authorVal,
  });

  useEffect(() => {
    setListBooks(listBooks);
  }, [listBooks]);

  const handleSearch = async () => {
    console.log("handleSearch:" + title);
    if (title || author) {
      setSearchTerm({
        title,
        author,
      });
      try {
        const books = await getAllBooks(title, author, token);
        setListBooks(books);
      } catch (err) {
        console.error("Error fetching books", err);
      }
    }
  };
  const handleAddToMyBooks = async (book) => {
    try {
      const res = await createBook(book, token);
      console.log("Added to My Books:", res.book);
    } catch (err) {
      console.error("Failed to add book:", err);
    }
  };

  return (
    <>
      <SearchBooks
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        handleSearch={handleSearch}
      />
      {searchTerm && <AppliedFilters searchTerm={searchTerm} />}
      <LoadingWrapper>
        <ListBooks books={listBooks} onAdd={handleAddToMyBooks} />
      </LoadingWrapper>
    </>
  );
};

export default BooksPage;
