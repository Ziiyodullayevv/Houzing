import React from "react";
import { Slider } from "antd";
import useUniqueId from "../hooks/useId";

// pages:
import SignInPage from "../pages/Register";
import Favourite from "../pages/Favourite";
import Signin from "../components/SignIn";
import MyProfilePage from "../pages/MyPofile";
import AddNewHousePage from "../pages/AddHause";
// React.lazy pages:
const HomePage = React.lazy(() => import("../pages/Home"));
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const HouseItemPage = React.lazy(() => import("../pages/HouseItem"));

export const navbar = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/home",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Slider />
          </React.Fragment>
        }
      >
        <HomePage />
      </React.Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Properties",
    path: "/properties",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Slider />
          </React.Fragment>
        }
      >
        <PropertiesPage />
      </React.Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Single House",
    path: "/properties/:id",
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Slider />
          </React.Fragment>
        }
      >
        <HouseItemPage />
      </React.Suspense>
    ),
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Sign In",
    path: "/signin",
    element: <SignInPage />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Favourite",
    path: "/favourite",
    element: <Favourite />,
    private: true,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "My profile",
    path: "/myprofile",
    element: <MyProfilePage />,
    private: true,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Add New Hosue",
    path: "myprofile/newhouse",
    element: <AddNewHousePage />,
    private: true,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: <AddNewHousePage />,
    title: "Add New House",
    path: "/myprofile/edithouse/:id",
    private: true,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Sign Up",
    path: "/signup",
    element: <Signin />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Sign Up",
    path: "/signup",
    element: <Signin />,
    private: false,
    hidden: true,
  },
];
