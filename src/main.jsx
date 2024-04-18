import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import ThisMonth from './Pages/ThisMonth.jsx';
import Statistics from './Pages/Statistics.jsx';
import Stocks from './Pages/Stocks.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    path: '/thismonth',
    element: <ThisMonth/>,
  },
  {
    path: '/statistics',
    element: <Statistics/>,
  },
  {
    path: '/stocks',
    element: <Stocks/>,
  },
  

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
