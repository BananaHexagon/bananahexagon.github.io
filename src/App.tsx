// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Note } from './pages/Note';
import { Note as Notes2023 } from './pages/notes/2023.tsx';
import { Note as Note2023_0401 } from './pages/notes/2023/0401.tsx';
import { Note as Note2023_0801 } from './pages/notes/2023/0801.tsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/note" element={<Note />} />
                <Route path="/note/2023" element={<Notes2023 />} />
                <Route path="/note/2023/0401" element={<Note2023_0401 />} />
                <Route path="/note/2023/0801" element={<Note2023_0801 />} />
            </Routes>
        </Router>
    );
};

export default App;
