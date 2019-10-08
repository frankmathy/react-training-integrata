import React from 'react';
import './App.css';
import PeopleHeaderComponent from "./main/component/PeopleHeaderComponent";
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PersonComponent from './people/component/PersonComponent'
import { userProfile } from './people/model/TestPeople'
import PeopleComponent from './people/component/PeopleComponent';

function App() {
  return (
    <div className="App">
      <PeopleHeaderComponent/>
      <div className="App-currentUser">
        Aktueller User: <PersonComponent person={userProfile} detail={false}/>
      </div>
      <PeopleComponent/>
      <PeopleFooterComponent/>
    </div>
  );
}

export default App;
