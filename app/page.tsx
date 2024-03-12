import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Navbar from "@/components/SideNav/sidenav";
import React from "react";
import CourseHome from "@/pages/CourseHome/courseHome";
import Login from "@/pages/Login/login";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

const AppLayout = () => (
  <>
    <Header />
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/courseHome" element={<CourseHome />} />
      <Route path="/products" element={<Login />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "products",
//         element: <Products />,
//       },
//       {
//         path: "reports",
//         element: <Reports />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);