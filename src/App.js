import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from "./components/Footer";
import './index.css'

const App = () => {
  // not necessary to use state here, especially without a Setter
  const [pieces] = useState([
    // { title: 'About' },
    { title: 'Portfolio' },
    { title: 'GitHub' },
    { title: 'LinkedIn' }
  ]);
  const [contactSelected, setContactSelected] = useState(false);

  const [currentPiece, setCurrentPiece] = useState(pieces[0]);

  return (
    <>
      <div className="front-page">
        <Nav 
          pieces={pieces}
          setCurrentPiece={setCurrentPiece}
          currentPiece={currentPiece}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        />
        <About />
      </div>
      <main>
        {!contactSelected ? (
          <>
            
            <Portfolio currentPiece={currentPiece}/>
          </>
        ) : (
          <ContactForm />
        )}
        <Footer />
      </main>
    </>
  );
}

export default App;
