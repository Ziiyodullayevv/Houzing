import useUniqueId from "../hooks/useId";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/home",
    element: <HomePage />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Properties",
    path: "/properties",
    element: <PropertiesPage />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Sign In",
    path: "/signin",
    element: <h1>Sign In</h1>,
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
