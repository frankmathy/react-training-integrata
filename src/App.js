import React from 'react';
import './App.css';
import PeopleComponent from './people/component/People'
import FooterComponent from './footer/component/Footer'

function App() {
  return (
    <div className="App">
      <PeopleComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
