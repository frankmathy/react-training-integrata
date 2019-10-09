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

  async loadData()  {
    try {
      let result = await fetch('http://localhost:8080/people')
      this.state.people.persons = await result.json()
      this.setState({...this.state, ...{people: this.state.people}})
    } catch(error) {
      alert("Error loading person data: " + error)
    }
  }

  createPersonCallback = (personData) => {
      this.state.people.add(personData.lastname, personData.firstname, personData.gender, personData.height)
      //console.log("CREATE PERSON " + personData)
      this.setState({...this.state, ...{people: this.state.people}})
  }

  componentDidMount() {
    this.loadData()
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
