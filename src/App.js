import React from "react";
import './App.css';
import Pages from "./components/Pages";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gasp from "./components/Gasp";  // Correct import

function App() {
    return (
        <div className="App">
            <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Gasp />} />
                        <Route path="/pages" element={<Pages />} />
                        <Route path="/animation" element={<Home />} />
                        <Route path="/posts" element={<Pages />} />
                        <Route path="/tags" element={<Pages />} />
                    </Routes>
            </header>
        </div>
    );
}

export default App;
