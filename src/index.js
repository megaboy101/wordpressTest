import React, { Component } from 'react';
import './styles.css';
import { render } from 'react-dom';

class TestClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>The site is online!</h1>
        );
    }
}

render(<TestClass />, document.getElementById('app'));
