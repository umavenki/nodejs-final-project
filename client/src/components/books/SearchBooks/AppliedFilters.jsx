import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AppliedFilters = ({ searchTerm }) => {
  const title = searchTerm?.title;
  const author = searchTerm?.author;

  return (
    <Alert className="m-container" severity="info" variant="outlined">
      <AlertTitle sx={{ fontWeight: "bold", color: "primary.main", mb: 1 }}>
        Applied Filters:
      </AlertTitle>
      <Box display="flex" flexWrap="wrap" gap={2}>
        <Typography>Title: {title}</Typography>
        <Typography>Author: {author}</Typography>
      </Box>
    </Alert>
  );
};

export default AppliedFilters;
