import React, { Component } from "react";
import { CourseList } from "./views/CourseList";
import { VleresonKursin } from "./views/VleresonKursin";
import { Home } from "./views/Home";
import { Login } from "./views/Login";

const dashboardRoutes = [
  {
    path: "",
    name: "Dashboard",
    icon: "pe-7s-graph",
    element: <Home />,
    layout: "/",
  },

  {
    path: "",
    name: "Dashboard",
    icon: "pe-7s-graph",
    element: <CourseList />,
    layout: "/courses",
  },

  {
    path: "",
    name: "Dashboard",
    icon: "pe-7s-graph",
    element: <VleresonKursin />,
    layout: "/course/:id/:name",
  },
];

export default dashboardRoutes;
