import React, { Component } from 'react';
import '../../App.css';
import { People } from '../model/People'
import PersonComponent from './PersonComponent'
import PeopleComponent from './PeopleComponent';
import PersonInputComponent from './PersonInputComponent'
import PersonSearchComponent from './PersonSearchComponent'
import { userProfile } from '../model/PeopleData'
import NavigationComponent from './NavigationComponent'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class PeopleAppComponent extends Component {
  state = {
    people: new People(), 
    userProfile: userProfile
  }

  async loadData()  {
    try {
      let result = await fetch('http://localhost:8080/people')
      this.state.people.setPersons(await result.json())
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
      <BrowserRouter>
          Aktueller User: <PersonComponent person={this.state.userProfile} detail={false}/>
          <NavigationComponent/>
          <hr/>
          <Switch>
            <Route path='/people' render={(props) => <PeopleComponent {...props} people={this.state.people}/>} />
            <Route path='/peopleInput' render={(props) => <PersonInputComponent {...props} handleCreatePerson={this.createPersonCallback}/>} />
            <Route path='/peopleSearch' component={PersonSearchComponent}/>    
          </Switch>
      </BrowserRouter>
    );
  }
}

export default PeopleAppComponent;
