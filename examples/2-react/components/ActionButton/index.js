import React, { Component } from 'react';
import styles from './ActionButton.css';

class ActionButton extends Component {

  getClassName(name) {
    switch (name) {
    case 'warning':
      return styles.warning;

    case 'alert':
      return styles.alert;

    case 'disabled':
      return styles.disabled;

    case 'normal':
    default:
      return styles.normal;
    }
  }

  render() {
    return (
      <button className={ this.getClassName(this.props.type) }>{ this.props.children }</button>
    );
  }
}

export default ActionButton;
