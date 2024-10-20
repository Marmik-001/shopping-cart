import { Fragment, useState } from 'react'
import {BrowserRouter, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import ProductListPage from './Pages/Product-List';
import ProductPage from './Pages/Product-Details';
import CartPage from './Pages/Cart';
import GlobalContextProvider from './Context/GlobalContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },  
  {
    path: '/product-list',
    element: <ProductListPage />
  },
  {
    path: '/product-details/:id',
    element: <ProductPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  }
  
  
])

function App() {


  return <RouterProvider router={router} />
}

export default App
