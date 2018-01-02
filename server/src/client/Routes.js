import React from "react";
import Home from "./components/home";
import UsersList ,{loadData}from "./components/usersList";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    loadData,
    path: "/users",
    component: UsersList
  }
];
