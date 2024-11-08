import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Home/Home.jsx';
import MainLayout from './assets/MainLayout.jsx';
import Timedistribute from './assets/Timedistribute/Timedistribute.jsx';
import Task from './assets/Task/Task.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/timebox',
        element: <Timedistribute />
      },
      {
        path: '/task',
        element: <Task />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
