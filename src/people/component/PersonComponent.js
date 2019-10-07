import React from 'react';
import testPeople from '../model/TestPeople'

function PersonComponent () {
    let infos = testPeople.allInfos()
    return (
        <p>{infos[1]}</p>
    );
}

export default PersonComponent
