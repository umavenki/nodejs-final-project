import Grid from "@mui/material/Grid";

import MyBookCard from "./BookCard/MyBookCard";

const ListBooks = ({ books = [], onDelete }) => {
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
          <MyBookCard book={book} onDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListBooks;
