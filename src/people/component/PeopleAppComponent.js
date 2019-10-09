import React, { Component } from 'react';
import '../../App.css';
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent';
import PersonInputComponent from './PersonInputComponent'
import { peopleData, userProfile } from '../model/PeopleData'
import PersonSearchComponent from './PersonSearchComponent';

class PeopleAppComponent extends Component {
  state = {people: peopleData, userProfile: userProfile}

  createPersonCallback = (personData) => {
      peopleData.add(personData.lastname, personData.firstname, personData.gender, personData.height)
      //console.log("CREATE PERSON " + personData)
      this.setState({...this.state, ...{people: peopleData}})
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
