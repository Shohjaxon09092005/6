import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import FlightPage from './page/FlightPage';
import HotelPage from './page/HotelPage';
import AccountPage from './page/AccountPage';

const appRouter = createBrowserRouter([{
  element: <App />,
  path: '/',
  errorElement: <ErrorPage />,
  children: [{
    path: '/',
    element: <HomePage />
  },
{
  path:'/flight',
  element:<FlightPage/>
  },
  {
     path:'/hotel',
     element:<HotelPage/>
  },
  {
    path:'/account',
    element:<AccountPage/>
  }

  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

