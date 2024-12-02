import React from "react";
import './App.css';
import Pages from "./components/Pages";
import { Route, Routes } from "react-router-dom";  // Correct import

function App() {
    return (
        <div className="App">
            <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Pages />} />
                        <Route path="/pages" element={<Pages />} />
                        <Route path="/posts" element={<Pages />} />
                        <Route path="/categories" element={<Pages />} />
                        <Route path="/tags" element={<Pages />} />
                    </Routes>
            </header>
        </div>
    );
}

export default App;
