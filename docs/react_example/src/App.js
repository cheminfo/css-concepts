import React, { Component } from 'react';
import './App.css';
import TestComponent from './TestComponent.js'
import Container from './Container.js'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
            <TestComponent/>
            <TestComponent/>
            <TestComponent/>
            <TestComponent/>
            <TestComponent/>
            <TestComponent/>
            <TestComponent/>
            <TestComponent/>
            <TestComponent/>
        </Container>
      </div>
    );
  }
}

export default App;
