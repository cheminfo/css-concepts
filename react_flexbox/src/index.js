import React from 'react'
import { render } from 'react-dom'
import Box from './Box'
import Children from './Children'
import Group from './Group'
import './index.css'

const App = () => (
  <div className="container">
    <Box color="blue"/>
    <Box color="green"/>
    <Box color="red"/>
    <Box color="yellow" noMobile="true"/>
    <Group>
      <Children color="blue"/>
      <Children color="green"/>
      <Children color="red"/>
    </Group>

  </div>
);

render(<App />, document.getElementById('root'));
