import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Details from './components/Details';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <BrowserRouter>

   <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<App />} />
   </Routes>
   </BrowserRouter> 
 
);


