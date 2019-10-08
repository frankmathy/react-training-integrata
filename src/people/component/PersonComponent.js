import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let PersonComponent = (props) => {
    var personString = ""
    if(props.detail) {
        return (
            <Row>
                <Col>{props.person.lastname}</Col>
                <Col>{props.person.firstname}</Col>
                <Col>{props.person.gender}</Col>
                <Col>{props.person.height}</Col>
            </Row>
        )
    } else {
        personString = props.person.firstname + " " + props.person.lastname
    }
    return (
        <Col>{personString}</Col>
    );
}

export default PersonComponent
