import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./routes/RootLayour";
import React from "react";
import ErrorPage from "./components/ErrorPage";
import Films from "./routes/Films";
import Journal from "./routes/Journal";
import Lists from "./routes/Lists";
import Members from "./routes/Members";
import Profile from "./routes/Profile";
import HomePage from "./routes/HomePage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/> },
      {
        path: 'films',
        element: <Films/>
      },
      {
        path: 'journal',
        element: <Journal/>
      },
      {
        path: 'lists',
        element: <Lists/>
      },
      {
        path: 'members',
        element: <Members/>
      },
      {
        path: 'profile',
        element: <Profile/>
      }
    ]
      }
])
function App() {
  return <RouterProvider router={router}/>;
  }

export default App;
