import React from 'react';

let PersonComponent = (props) => {
    return (
        <p>{props.person.info()}</p>
    );
}

export default PersonComponent
