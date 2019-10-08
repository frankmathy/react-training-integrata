import React from 'react';

let PersonComponent = (props) => {
    var personString = ""
    if(props.detail) {
        personString = props.person.lastname + ", " + props.person.firstname + ", " 
            + props.person.gender + ", " + props.person.height
    } else {
        personString = props.person.firstname + " " + props.person.lastname
    }
    return (
        <span>{personString}</span>
    );
}

export default PersonComponent
