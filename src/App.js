import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio'

const App = () => {
  // not necessary to use state here, especially without a Setter
  const [pieces] = useState([
    { title: 'Portfolio' },
    { title: 'GitHub' },
    { title: 'LinkedIn' },
    { title: 'Twitter' }
  ])

  return (
    <div>

    </div>
  );
}

export default App;
