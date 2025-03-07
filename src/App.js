import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const currentyear = new Date().getFullYear();
  const isLoggedIn = true;

  function message(){
    if(isLoggedIn)
      return "Welcome back!"
    return "please log in"
  }

  return ( 
    <div>
      <h1>"ENSF-381: Full Stack Web Development"</h1>
      <p>"React Components"</p>
      <p>{currentyear}</p>
      <p>{message()}</p>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;


