import React, { Component } from 'react';
import '../../App.css';
import { People } from '../model/People'
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent';
import PersonInputComponent from './PersonInputComponent'
import { userProfile } from '../model/PeopleData'

class PeopleAppComponent extends Component {
  state = {
    people: new People(), 
    userProfile: userProfile
  }

  createPersonCallback = (personData) => {
      this.state.people.add(personData.lastname, personData.firstname, personData.gender, personData.height)
      //console.log("CREATE PERSON " + personData)
      this.setState({...this.state, ...{people: this.state.people}})
  }

  render() {
    return (
      <div>
        <div className="App-currentUser">
          Aktueller User: <PersonComponent person={this.state.userProfile} detail={false}/>
        </div>
        <PeopleComponent people={this.state.people}/>
        <PersonInputComponent handleCreatePerson={this.createPersonCallback}/>
      </div>
    );
  }
}

export default PeopleAppComponent;
