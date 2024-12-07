import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import AuthProvider from "./Auth.jsx/AuthProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllEquipments from "./pages/AllEquipments";
import AddEquipments from "./pages/AddEquipments";
import MyEquipments from "./pages/MyEquipments";
import UpdateEquipment from "./pages/UpdateEquipment";
import SingleEquipment from "./pages/SingleEquipment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-quipment",
        element: <AllEquipments />,
      },
      {
        path: "/all-equipment/:id",
        element: <SingleEquipment />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/equipments/${params.id}`),
      },
      {
        path: "/add-equipment",
        element: <AddEquipments />,
      },
      {
        path: "/update-equipment/:id",
        element: <UpdateEquipment />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/equipments/${params.id}`),
      },
      {
        path: "/my-equipments",
        element: <MyEquipments />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
