import React from 'react';
import './App.css';
import {LightModeProvider} from "./components/LightModeContext";
import Calculator from "./components/Calculator";

function App() {
  return (
      <div className="App">
        <LightModeProvider>
          <Calculator />
        </LightModeProvider>
      </div>
  );
}

export default App;
