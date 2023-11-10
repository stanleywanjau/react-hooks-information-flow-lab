import React from 'react';
function Header ({clicked,isDarkMode}){
  return(
   
      <header>
        <h2>Shopster</h2>
        <button onClick={clicked}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    
  )

}
export default Header;