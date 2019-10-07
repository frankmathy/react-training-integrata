import React from 'react';

function TestComponent() {
    let a = 1;
    a = a * 3;
    return (
    <div>
        <h1>Testkomponente</h1>
        <p>Dies ist eine Testkomponente {a}</p>
    </div>
    );
}

export default TestComponent;
