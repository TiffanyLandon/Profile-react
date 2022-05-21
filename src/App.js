import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <header>
      <Navbar></Navbar>
      </header>
      <div className='content'>
     <main>
       <About></About>
     </main>
      </div>
    </div>
  );
}

export default App;
