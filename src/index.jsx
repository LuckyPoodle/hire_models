import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Details from './components/Details';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
   <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<Search />} />
            </Routes>
   </BrowserRouter> 
  </React.StrictMode>
);


