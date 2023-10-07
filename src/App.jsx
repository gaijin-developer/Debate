import { useState } from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./ui/Navbar";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
