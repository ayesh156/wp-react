import React from "react";
import './App.css';
import Pages from "./components/Pages";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gasp from "./components/Gasp";
import GaspMenu from "./components/GaspMenu";
import InScroll from "./components/InScroll";  // Correct import

function App() {
    return (
        <div className="App">
            <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/animation" element={<GaspMenu />} />
                        <Route path="/gasp" element={<Gasp />} />
                        <Route path="/pages" element={<Pages />} />
                        <Route path="/infinite" element={<InScroll />} />
                    </Routes>
            </header>
        </div>
    );
}

export default App;
