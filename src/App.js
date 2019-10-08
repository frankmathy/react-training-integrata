import React from 'react';
import './App.css';
import PeopleHeaderComponent from "./main/component/PeopleHeaderComponent";
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PeopleAppComponent from  './people/component/PeopleAppComponent'
import LoggingComponent from './people/component/LoggingComponent'

function App () {
  return (
    <div className="App">
      <PeopleHeaderComponent/>
      <PeopleAppComponent/>
      <LoggingComponent maxEntries={5}/>
      <PeopleFooterComponent/>
    </div>
  );
}

export default App;
