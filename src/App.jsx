import './App.css';
import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import  'bootstrap/dist/css/bootstrap.min.css';


<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>


function App() {
  return (
    <div className="navBar">
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
