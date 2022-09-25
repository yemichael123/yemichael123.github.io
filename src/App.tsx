import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import { Home } from './components/Home'
import { NavigationBar } from './components/NavigationBar'
// import './App.scss';

function App() {
  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
          <Routes>
            <Route path="/" element={<><Home/><NavigationBar/></>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
