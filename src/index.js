import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ReactFacts() {
  return (
    <div>
      <Header/>
     <List/>
     <Footer/>
    </div>
  )
}

function Header() {
  return (
    <header>
    <nav className='nav'>
      <img className='logo' src='/react-logo.png' />
      <ul className='nav-items'>
        <li>Pricing</li> 
        <li>About</li>
        <li>Contact</li>  
      </ul>
    </nav>
  </header>
  )
}

function Footer() {
  return (
    <footer>
    <small> © 2022 Akshay Tarde development. All rights reserved. </small>
    </footer>
  )
}

function List() {
  return (
    <div>
       <h1>Reasons I am excited to learn React.</h1>
      <ol>
      <li>Declarative</li>
      <li>Component Based</li>
      <li>Lots of Money involved.</li>
      </ol>
    </div>
  )
}

ReactDOM.render(<ReactFacts/>, document.getElementById("root"))
