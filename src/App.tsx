import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import { Home } from './components/Home'
import { NavigationBar } from './components/NavigationBar'
import { Games } from './components/Games'
import './semantic/dist/semantic.css';
import { Loader } from 'semantic-ui-react';

// import './App.scss';

function App() {
  return (
    <div className="App">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/dist/semantic.min.css"></link>
        <script src="/dist/semantic.min.js"></script>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<><Home/><NavigationBar/></>} />
            <Route path="games" element={<><Games/><NavigationBar/></>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
