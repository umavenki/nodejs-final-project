import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeModeProvider } from "./context/ThemeModeContext";

import ProtectedRoutes from "./routers/ProtectedRoutes";

import MainLayout from "./layouts/MainLayout";

import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Forgot from "./components/Authentication/ForgotPassword";
import ResetPassword from "./components/Authentication/ResetPassword";

import Home from "./pages/Home";
import About from "./pages/About";
import BooksPage from "./pages/BooksPage";
import MyBooksPage from "./pages/MyBooksPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "forgotpassword", element: <Forgot /> },
      { path: "reset-password/:token", element: <ResetPassword /> },
      { path: "books", element: <BooksPage /> },
      { path: "mybooks", element: <MyBooksPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <ThemeModeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeModeProvider>
  );
}

export default App;
