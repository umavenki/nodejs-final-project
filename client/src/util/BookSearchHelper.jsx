import { getAllData, deleteData, postData, updateData, getData } from "./index";

const getAuthHeaders = (token) => {
  if (!token) {
    throw new Error("No authentication token found. User is not authorized.");
  }
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const fetchBooks = async (title, author) => {
  const URL = `${import.meta.env.VITE_APP_API_URL}/api/v1/books/all`;

  const res = await getAllData(URL, {}, getAuthHeaders(token));
  if (!res) {
    return {};
  }
  return res;

  // let url = "https://openlibrary.org/search.json";
  // if (title) {
  //   url = url + "?title=" + title;
  // }
  // // if (author) {
  // //   url = url + "?author=" + author;
  // // }

  // try {
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     throw new Error(`Failed to fetch events: ${response.statusText}`);
  //   }

  //   const data = await response.json();

  //   if (data.message === "No Events Returned") {
  //     return { message: "No Events Returned" }; // Return a specific object
  //   }

  //   if (!data) {
  //     throw new Error("No events found or invalid response from API.");
  //   }
  //   let result = [];
  //   Object.keys(data.docs).forEach((key) => {
  //     const book = data.docs[key];
  //     book["id"] = book["cover_i"] ?? "";
  //     book["title"] = book["title"];
  //     book["author"] = book["author_name"][0] ?? "";
  //     book["image"] =
  //       "https://covers.openlibrary.org/a/olid/" + book["author_key"] + ".jpg";
  //     result[key] = book;
  //   });
  //   return result;

  //   // return data.map((book) => ({
  //   //   id: book.cover_i,
  //   //   title: book.title,
  //   //   author: book.author_name?.[0] ?? "",
  //   //   image:
  //   //     "https://covers.openlibrary.org/a/olid/" + book.author_key?.[0] ??
  //   //     "" + ".jpg",
  //   // }));
  // } catch (err) {
  //   console.error("Error in fetchEvents:", err.message);
  //   throw err;
  // }
};
