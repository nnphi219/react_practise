import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

export class Test2 extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App2.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export class Test1 extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App1.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTest1: true
        };
    }
    render() {
        return (
            <div>
                {
                    this.state.isTest1 ?
                        <Test1 />
                        : <Test2 />
                }
                <button onClick={() => this.setState({ isTest1: !this.state.isTest1 })}>test</button>
            </div>

        );
    }
}

export default Test;
