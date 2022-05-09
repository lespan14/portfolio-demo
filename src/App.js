//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './component/Header';
import About from './component/About';
import Projects from './component/Projects';
import Contactus from './component/Contactus';
import ToTop from './component/ToTop';
import End from './component/End';
//import Comment from './component/Comment';

import React, { useEffect, useState } from "react";

function App() {


  return (
    <main>
      
      
      <Header />

      <About />

      <Projects />

      <Contactus />

      <End />

      <ToTop />
      
      
    </main>

    
  );
}



export default App;

