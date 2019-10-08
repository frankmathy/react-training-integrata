import React, { Component } from 'react';
import './App.css';
import PeopleHeaderComponent from "./main/component/PeopleHeaderComponent";
import PeopleFooterComponent from './main/component/PeopleFooterComponent'
import PersonComponent from './people/component/PersonComponent'
import { testPeople, userProfile } from './people/model/TestPeople'
import PeopleComponent from './people/component/PeopleComponent';

class App extends Component {
  state = {people: testPeople, userProfile: userProfile}

  constructor() {
    super()
    setTimeout(() => {
      userProfile.lastname = "Hoffmann"
      console.log("AFTER TIMEOUT: " + userProfile.info())
      this.setState({ userProfile: userProfile})
    }, 5000)
  }

  componentDidMount() {
    let peopleState = {people: testPeople, userProfile: userProfile}
    this.setState(peopleState)
  }

  render() {
    return (
      <div className="App">
        <PeopleHeaderComponent/>
        <div className="App-currentUser">
          Aktueller User: <PersonComponent person={this.state.userProfile} detail={false}/>
        </div>
        <PeopleComponent people={this.state.people}/>
        <PeopleFooterComponent/>
      </div>
    );
  }
}

export default App;
