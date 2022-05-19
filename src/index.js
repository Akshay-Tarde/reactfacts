import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';

function ReactFacts() {
  return (
    <div>
      <Header/>
     <List/>
     <Footer/>
    </div>
  )
}






ReactDOM.render(<ReactFacts/>, document.getElementById("root"))
