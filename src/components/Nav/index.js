import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {
  // destructure el's out of props
  const {
    pieces = [],
    setCurrentPiece,
    currentPiece,
    contactSelected,
    setContactSelected
  } = props;

  // capitalize first letter of each namr
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPiece.title);
    // returned el
  }, [currentPiece]);


  return(
    <header>        
      <nav>
          <ul className='flex-row'>
              {/* another short circuit function, if contactSelected add navActive as class */}
              <li className={`mx-1 ${contactSelected && 'navActive'}`}>
                  <a data-testid='about' href='#about' onClick={() => setContactSelected(false)}>
            
                  </a>
              </li>
              <li>
                  <span onClick={() => setContactSelected(true)}>Contact </span>
              </li>
              {/* note that the .map() must return only a single JSX element - (), versus multiple - {} */}
              {pieces.map((piece) => (
                  <li
                      // 'Short-circuit' expression, 
                      className={`mx-1 ${
                          // as long as left side is true, the right side gets evaluated and sets navActive as a class
                          currentPiece.title === piece.title && !contactSelected && `navActive`
                      }`} key={piece.title}
                  >
                      <span onClick={() => {
                          setCurrentPiece(piece);
                          setContactSelected(false);
                          }}
                      >
                          {capitalizeFirstLetter(piece.title)}
                      </span>
                  </li>
              ))}
          </ul>
      </nav>
  </header>
  )
} 

export default Nav;