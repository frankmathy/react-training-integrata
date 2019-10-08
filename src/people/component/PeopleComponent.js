import React from 'react';
import PersonComponent from './PersonComponent'
import Table from 'react-bootstrap/Table'

let PeopleComponent = (props) => {
    const allPeople = props.people.all().map(person =>
        <PersonComponent person={person} detail={true}/>
    );
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Gender</th>
                    <th>Size</th>
                </tr>
            </thead>
            <tbody>
                {allPeople}
            </tbody>
        </Table>
    )
}

export default PeopleComponent
