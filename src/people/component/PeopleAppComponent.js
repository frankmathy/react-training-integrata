import React, { Component } from 'react';
import '../../App.css';
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent';
import { testPeople, userProfile } from '../model/TestPeople'

class PeopleAppComponent extends Component {
  state = {people: testPeople, userProfile: userProfile}

  constructor() {
    super()
    setTimeout(() => {
      userProfile.lastname = "Hoffmann"
      console.log("AFTER TIMEOUT: " + userProfile.info())
      this.setState({ userProfile: userProfile, people: testPeople})
    }, 5000)
  }

  componentDidMount() {
    let peopleState = {people: testPeople, userProfile: userProfile}
    this.setState(peopleState)
  }

  render() {
    return (
      <div>
        <div className="App-currentUser">
          Aktueller User: <PersonComponent person={this.state.userProfile} detail={false}/>
        </div>
        <PeopleComponent people={this.state.people}/>
      </div>
    );
  }
}

export default PeopleAppComponent;
