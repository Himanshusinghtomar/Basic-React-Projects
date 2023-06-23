import React, { useLayoutEffect } from 'react'
import "./App.css";
import Header from "./Components/Header";


function App() {
  
  useLayoutEffect(() => {
      document.body.style.backgroundColor = "gray";
  });
  return (
    <>
      <div>
        <Header/>
        
      </div>
    </>
  );
}

export default App;
