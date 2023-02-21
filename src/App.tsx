import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import { Home } from './components/Home'
import { NavigationBar } from './components/NavigationBar'
import { Games } from './components/Games'
// import './App.scss';

function App() {
  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<><Games/><NavigationBar/></>}>
            </Route>
            <Route path="games" element={<Games/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
