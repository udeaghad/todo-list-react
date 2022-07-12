import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<TodoContainer />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
