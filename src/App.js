import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PeopleHeaderComponent from "./main/component/PeopleHeaderComponent";
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PeopleFromServerAppComponent from  './people/component/PeopleFromServerAppComponent'
import LoggingComponent from './people/component/LoggingComponent'

function App () {
  return (
    <div className="App">
      <PeopleHeaderComponent/>
      <PeopleFromServerAppComponent/>
      <LoggingComponent maxEntries="5"/>
      <PeopleFooterComponent/>
    </div>
  );
}

export default App;
