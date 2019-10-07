import React from 'react';
import testPeople from '../model/TestPeople'

function PersonComponent () {
    let infos = testPeople.allInfos()
    let html = infos.map(info => <li>{info}</li>)
    return (
        <p><ol>{html}</ol></p>
    );
}

export default PersonComponent
