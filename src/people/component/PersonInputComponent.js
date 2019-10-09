import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class PersonInputComponent extends Component {
    state = {
        fields: {
            lastname: '',
            firstname: '',
            gender: 'm',
            height: 175
        }
    }

    handleFormSubmit = (event) => {
        this.props.handleCreatePerson(this.state.fields)
        event.preventDefault()
    }

    handleChange = (event) => {
        let target = event.target
        let result = this.state.fields
        result[target.name] = target.value
        this.setState({fields: result})
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                &nbsp;
                <input placeholder="Lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>&nbsp;
                <input placeholder="Firstname" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>&nbsp;
                <label>
                    Gender:&nbsp;
                    <select value={this.state.gender} onChange={this.handleChange}>
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>                
                </label>&nbsp;
                <input placeholder="Height" name="height" value={this.state.height} onChange={this.handleChange}/>&nbsp;
                <Button type="submit">Create Person</Button>
            </form>
        )
    }
}

export default PersonInputComponent
