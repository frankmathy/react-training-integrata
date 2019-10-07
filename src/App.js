import React from 'react';
import './App.css';
import PeopleHeaderComponent from "./main/component/PeopleHeaderComponent";
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PersonComponent from './people/component/PersonComponent'

function App() {
  return (
    <div className="App">
      <PeopleHeaderComponent/>
      <PersonComponent/>
      <PeopleFooterComponent/>
    </div>
  );
}

export default App;
