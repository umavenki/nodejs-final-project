import Grid from "@mui/material/Grid";

import BookCard from "./BookCard/BookCard";

const ListBooks = ({ books = [], onAdd }) => {
  if (!Array.isArray(books)) {
    return <div>NO books found.</div>;
  }
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 3, sm: 8, md: 12, lg: 16 }}
      marginTop={2}
      marginBottom={2}
      className="m-container"
    >
      {books?.map((book) => (
        <Grid
          key={book?.book_id || book?.bookId}
          size={{ xs: 3, sm: 4, md: 4 }}
        >
          <BookCard book={book} onAdd={onAdd} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListBooks;
