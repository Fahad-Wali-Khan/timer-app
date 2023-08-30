import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Protected from './components/Protected';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,Route,createRoutesFromElements
} from "react-router-dom";
import Home from './components/Home';
import Signin from './components/Signin';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/"element={<Protected/>}>
         <Route path="/" index element={<Home />}/>
      </Route>
      
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router} />
);

