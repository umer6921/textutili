
import React, { useState } from 'react';
import './App.css';
import Blog from './components/Blog';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/about';





function App() {

  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [alertText, setAlertText] = useState(null);

  let showAlert = (Type, message) => {

    setAlertText({
      type: Type,
      text: message
    })

    setTimeout(() => {
      setAlertText(null);
    }, 1500)
  }


  let toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      setTextColor("light");
      document.body.style.backgroundColor = "#2a3036";
      showAlert("secondary", "Dark mode enabled");

    }
    else {
      setMode("light");
      setTextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("primary", "Light mode enabled");
    }
  }

  return (
    <>
      <Router basename='/'>

        <div className="App">

          <Blog navTitle="Text Utili" about="About" mode={mode} toggleMode={toggleMode} textColor={textColor}></Blog>
          <Alert alertText={alertText}></Alert>


          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />

            <Route exact path="/" element={<div className='container'>
              <TextForm heading={"Enter the text below to analyze"} mode={mode}></TextForm>
              {/* <About heading={"About us"}></About> */}
            </div>} />

          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
