import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './component/Navbar/Navbar.jsx';
import Home from './component/Home/Home.jsx';
import Adress from './component/Adress/Adress.jsx';
import Users from './component/USers/Users.jsx';
import Userdetails from './component/UserDetails/Userdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
  },
  {
    path:'/home' ,
    element:<Home></Home>
  },
  {
    path:'/adress',
    element:<Adress></Adress>
  },
  {
    path:'/user',
    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
    element:<Users></Users>
  },
  {
    path:'user/:userid',
    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
    element:<Userdetails></Userdetails>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
