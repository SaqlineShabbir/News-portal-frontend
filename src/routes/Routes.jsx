
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import LatestArtiDetails from "../components/home/latest-articles/articles/LatestArtiDetails";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: '/article/:articleId',
          element: <LatestArtiDetails></LatestArtiDetails>,
        },
      ]
    },
  ]);