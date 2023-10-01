// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 注意: Switch から Routes に変更
import Home from './pages/Home';
import About from './pages/About';
import Note from './pages/Note';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notes" element={<Note />} />
            </Routes>
        </Router>
    );
};

export default App;
