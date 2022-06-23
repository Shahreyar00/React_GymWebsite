import React from 'react';
import { Footer, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ExerciseDetail from "./pages/exerciseDetail/ExerciseDetail";

const App = () => {
    return (
        <Router>
            <div className="app__container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App