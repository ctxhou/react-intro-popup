import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import STYLE from './style';

export default class IntroPopup extends Component {

  constructor(props) {
    super(props);
    // this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }

  render() {

    return (
      <div className={this.props.className}
            style={this.props.style}
            ref={this.props.ref}>
        {this.props.children}
      </div>
    )
  }
}
