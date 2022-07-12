import React from 'react'
import TodoContainer from './components/TodoContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import NotMatch from "./pages/NotMatch";
import Navbar from './components/Navbar';


function App() {
  return ( 
    <>
    <Router> 
      <Navbar /> 
     <Routes>
      <Route exact path='/' element={<TodoContainer />}></Route>  
      <Route path='/About' element={<About />}></Route> 
      <Route path='*' element={<NotMatch />}></Route>
      </Routes>
    </Router> 
    </>
  );
}

export default App;
