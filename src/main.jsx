import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import { HelmetProvider } from "react-helmet-async";
import Dashboard from "./Dashboard";
import NewTask from "./pages/NewTask/NewTask";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToDo from "./pages/ToDo/ToDo";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <ToDo />,
      },
      {
        path: "add-task",
        element: <NewTask />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>
);
