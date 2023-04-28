import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './components/Login.jsx';
import Front from './components/Front.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Front></Front>,
    children:[
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
