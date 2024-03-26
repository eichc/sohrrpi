//currently making the side bar where classes will display. 
//"Home" will be an empty page with offer to redirect to add courses page
//when a course is picked, redirect to that course's page (likely be a singular page that will populate based on the picked course via database)

// "use client";
// import Navbar from "@/components/SideNav/sidenav";
// import React from "react";
// import Home from "../../app/page";
// import Login from "@/pages/Login/login";


// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Outlet,
//   createRoutesFromElements,
// } from "react-router-dom";

// const AppLayout = () => (
//   <>
//     <Navbar />
//     <Outlet />
//   </>
// );

// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route element={<AppLayout />}>
// //       <Route path="/courseHome" element={<CourseHome />} />
// //       <Route path="/products" element={<Login />} />
// //     </Route>
// //   )
// // );

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")!).render(
//   <RouterProvider router={router} />
// );

import React from "react";
import { BrowserRouter as BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Sidebar from "../components/SideNav/sidebar";
import Home from "./../../app/page";
import Login from "../components/Login/login";
import Courses from "../CourseHome";

const CourseHome = () => {
  return (
    <BrowserRouter>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/login" Component={Login} />
              <Route path="/courses" Component={Courses} />
              <Route Component={NotFound} default={true} />
            </Routes>
          </div>
        </div>
      </Router>
    </BrowserRouter>
  );
};

export default CourseHome;