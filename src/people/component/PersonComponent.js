import React from 'react';

let PersonComponent = (props) => {
    if(props.detail) {
        return (
            <tr>
                <td>{props.person.lastname}</td>
                <td>{props.person.firstname}</td>
                <td>{props.person.gender}</td>
                <td>{props.person.height}</td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{props.person.lastname}</td>
                <td>{props.person.firstname}</td>
            </tr>
        )
    }
}

export default PersonComponent
