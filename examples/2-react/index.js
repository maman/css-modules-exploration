import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from './main.css';

import ActionButton from './components/ActionButton';
import DummyButton from './components/DummyButton';

class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <ActionButton>Normal</ActionButton>
        <ActionButton type="warning">Warning</ActionButton>
        <ActionButton type="alert">Alert</ActionButton>
        <ActionButton type="disabled">Disabled</ActionButton>
        <DummyButton>Halo Dunia</DummyButton>
      </div>
    );
  }
}

const body = document.body;
const container = document.getElementById('app');
body.className = styles.body;
render(<App />, container);
