require("dotenv").config();
const { PORT = 8000 } = process.env;
const app = require("./app");
const connectDB = require("./db/connect");

const baseUrl = process.env.NODE_ENV === "http://localhost:8000";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
