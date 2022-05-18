import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ReactFacts() {
  return (
    <div>
      <header>
        <nav>
          <img src='./logo512.png' width="20px"/>
        </nav>
      </header>
      <h1>Reasons I am excited to learn React.</h1>
      <ol>
      <li>Declarative</li>
      <li>Component Based</li>
      <li>Lots of Money involved.</li>
      </ol>
      <footer>
      © 2022 Tarde development. All rights reserved.
      </footer>
    </div>
  )
}
  

ReactDOM.render(<ReactFacts/>, document.getElementById("root"))
