import { createBrowserRouter } from "react-router-dom";
import Root from "../outlet/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // children: [
    //   {
    //     path: "/project",
    //     element: <Project />,
    //   },
    //   {
    //     path: "/technoligies",
    //     element: <Technologies />,
    //   },
    //   {
    //     path: "/about",
    //     element: <About />,
    //   },
    // ],
  },
]);