// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AddCourse from './compnent/AddCourse';
import List from './compnent/List';

import UpdateList from './compnent/UpdateList';




function App() {
  return (
    <Router>
    <div className='App'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      {/* <a class="navbar-brand" to="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */}
      <div  class="collapse navbar-collapse" id="navbarNav">
        <ul  class="navbar-nav">
          <li class="nav-item">
            <Link  class="nav-link active" aria-current="page" to="/s">AddCourse</Link>
          </li>
           <li class="nav-item">
            <Link class="nav-link" to="/d">List</Link>
          </li>
         
        </ul> 
      </div>
    </div>
  </nav>

    </div>
    <Routes>
      <Route exact path='/s' element={<AddCourse/>}/>
      <Route exact path='/d' element={<List/>}/>
      <Route exact path='/edit/:id' element={<UpdateList/>}/>
      
    </Routes>

    </Router>
    

  );
}

export default App;
