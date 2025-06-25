import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const SearchBooks = ({ title, setTitle, author, setAuthor, handleSearch }) => {
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <Box
      className="m-container"
      display="flex"
      gap={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        mt: 4,
        mb: 4,
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <TextField
        label="Title"
        onChange={handleTitleChange}
        sx={{
          width: {
            xs: "100%",
            sm: "300px",
          },
        }}
      />
      <TextField
        label="Author"
        onChange={handleAuthorChange}
        sx={{
          width: {
            xs: "100%",
            sm: "300px",
          },
        }}
      />

      <Button
        variant="contained"
        sx={{ height: "54px" }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBooks;
