import React, { Component } from 'react';
import styles from './DummyButton.css';

class DummyButton extends Component {

  render() {
    return (
      <button className={ styles.dummy }>{ this.props.children }</button>
    );
  }
}

export default DummyButton;
