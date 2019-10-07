import React from 'react';
import './App.css';
import PeopleHeaderComponent from "./main/component/PeopleHeaderComponent";
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import ContentComponent from './content/component/ContentComponent'

function App() {
  return (
    <div className="App">
      <PeopleHeaderComponent/>
      <ContentComponent/>
      <PeopleFooterComponent/>
    </div>
  );
}

export default App;
