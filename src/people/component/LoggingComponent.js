import React, { Component } from 'react';
import { Log } from '../model/Log';
import '../../App.css';
import PubSub from 'pubsub-js';

class LoggingComponent extends Component {

    initialized = false

    constructor(props) {
        super(props)

        this.state = {
            log: new Log(props.maxEntries)
        }

        if (!this.initialized) {
            PubSub.subscribe('EVENTS', (msg, data) => {
                let log = this.state.log
                log.add(data)
                this.setState({...this.state, ...{log: log}})
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
