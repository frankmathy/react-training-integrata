import React, { Component } from 'react';
import '../../App.css';
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent';
import { peopleData, userProfile } from '../model/PeopleData'

class PeopleAppComponent extends Component {
  state = {people: peopleData, userProfile: userProfile}

  constructor() {
    super()
    setTimeout(() => {
      userProfile.lastname = "Hoffmann"
      console.log("AFTER TIMEOUT: " + userProfile.info())
      this.setState({ ...this.state, ...{userProfile: userProfile}})
    }, 5000)
    setTimeout(() => {
        peopleData.add('Mathy', 'Frank', 'm', 180)
        this.setState({ ...this.state, ...{people: peopleData}})
      }, 3000)
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
