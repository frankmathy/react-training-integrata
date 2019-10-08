import React, { Component } from 'react';
import { Log } from '../model/Log';
import '../../App.css';
import PubSub from 'pubsub-js';

class LoggingComponent extends Component {

    initialized = false

    constructor() {
        super()
        this.log = new Log(5)
        this.state = {log: this.log}
        if (!this.initialized) {
            PubSub.subscribe('EVENTS', (msg, data) => {
                this.log.add(data)
                this.setState({...this.state, ...{log: this.log}})
                console.log("LoggingComponent received event: " + data)
            })
            this.initialized = true
        }
    }

    render() {
        const allEntries  = this.state.log.logEntries.map(entry =>
            <p>{entry}</p>
        );
        return (
            <div className='App-log'> 
                {allEntries}
            </div>    
        )
    }
}

export default LoggingComponent;
