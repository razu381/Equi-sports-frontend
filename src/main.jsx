import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import AuthProvider from "./Auth/AuthProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllEquipments from "./pages/AllEquipments";
import AddEquipments from "./pages/AddEquipments";
import MyEquipments from "./pages/MyEquipments";
import UpdateEquipment from "./pages/UpdateEquipment";
import SingleEquipment from "./pages/SingleEquipment";
import PrivateRouter from "./Auth/PrivateRouter";
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
        path: "/all-equipments",
        element: <AllEquipments />,
        loader: () => fetch("http://localhost:3000/equipments/"),
      },
      {
        path: "/all-equipment/:id",
        element: (
          <PrivateRouter>
            <SingleEquipment />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/equipments/${params.id}`),
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRouter>
            <AddEquipments />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-equipment/:id",
        element: (
          <PrivateRouter>
            <UpdateEquipment />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/equipments/${params.id}`),
      },
      {
        path: "/my-equipments",
        element: (
          <PrivateRouter>
            <MyEquipments />
          </PrivateRouter>
        ),
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
