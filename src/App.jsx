import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Button from '@mui/material/Button';
import Footer from './Footer';

function App() {
  const [change, setChange] = React.useState("");
  const [click,setClick] = React.useState("");
  const [mouseOver,setMouseOver] = React.useState(false);

  function handleChange(event) {
    setChange(event.target.value);
  }

  function handleClick() {
    setClick(change);
    setChange("");
    
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {click} <AccessibilityNewIcon /></h1>
      <input onChange={handleChange} value={change} type="text"  placeholder="Enter your name"/>
      <Button variant="contained" style={{backgroundColor : mouseOver? "black" : "white" , color: "#50a3a2"}}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>Submit</Button>
      <Footer />
    </div>
  );
}

export default App;
