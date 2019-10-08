import React from 'react';
import './App.css';
import PeopleHeaderComponent from "./main/component/PeopleHeaderComponent";
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PersonComponent from './people/component/PersonComponent'
import { userProfile } from './people/model/TestPeople'

function App() {
  return (
    <div className="App">
      <PeopleHeaderComponent/>
      <PersonComponent person={userProfile}/>
      <PeopleFooterComponent/>
    </div>
  );
}

export default App;
