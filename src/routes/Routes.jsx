
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import LatestArtiDetails from "../components/home/latest-articles/articles/LatestArtiDetails";
import NewsDetalils from "../pages/news-details/NewsDetalils";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { LogOut } from "../pages/auth/LogOut";
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
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Register></Register>
        },
        {
            path:'/logout',
            element:<LogOut></LogOut>
        },
        {
          path: '/article/:articleId',
          element: <LatestArtiDetails></LatestArtiDetails>,
        },
        {
          path: '/news/:newsId',
          element: <NewsDetalils></NewsDetalils>,
        },
      ]
    },
  ]);