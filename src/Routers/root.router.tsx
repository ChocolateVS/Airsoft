import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Mafia from "../Pages/Mafia";
import Assassin from "../Pages/Assassin";

export const RootRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mafia",
    element: <Mafia />,
  },
  {
    path: "/assassin",
    element: <Assassin />,
  },
];

export default createBrowserRouter(RootRoutes);
