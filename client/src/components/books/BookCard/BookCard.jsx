import { useNavigate } from "react-router-dom";

import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import StyledBookCard from "./BookCard.styles";

const BookCard = ({ book, onAdd, isAdded }) => {
  const navigate = useNavigate();

  const onImageClick = () => {
    navigate(`/books/${book?.book_id || book?.bookId || book?._id}`);
    // navigate(`${book?.book_id}`);
  };

  return (
    <StyledBookCard elevation={6}>
      <CardMedia
        sx={{
          width: "100%",
          transform: "scale(0.9)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        component="img"
        image={book?.bookImage}
        alt={book?.title}
      />
      <CardHeader
        title={
          <Typography variant="subtitle1" color="primary.main">
            Title : {book?.title} Author : {book?.authorName}
          </Typography>
        }
      />

      <CardContent>
        <Button
          variant="outlined"
          color={isAdded ? "success" : "primary"}
          size="small"
          sx={{
            mt: 1,
            textTransform: "none",
            cursor: isAdded ? "not-allowed" : "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            onAdd(book);
          }}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to My Books"}
        </Button>
      </CardContent>
    </StyledBookCard>
  );
};
export default BookCard;
