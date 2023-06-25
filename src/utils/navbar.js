import React from "react";
import useUniqueId from "../hooks/useId";

// pages:
import SignInPage from "../pages/SignIn";

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
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
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
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
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
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
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
    title: "Sign Up",
    path: "/signup",
    element: <h1>Sign Up</h1>,
    private: false,
    hidden: true,
  },
];
