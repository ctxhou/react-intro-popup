import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import PopPop from '../../react-poppop/index';
import PopPop from 'react-poppop';
import classNames from 'classnames';
import STYLE from './style';

export default class IntroPopup extends Component {

  constructor(props) {
    super(props);
    this.handleLastBtn = this.handleLastBtn.bind(this);
    this.handleNextBtn = this.handleNextBtn.bind(this);

    const introLength = this.props.children.length - 1;
    this.state = {
      introLength: introLength,
      active: 0
    }
  }

  getIntro() {
    var intro = [];
    var that = this;
    React.Children.forEach(this.props.children, function(children, index) {
      let style = {};
      if (index === that.state.active) {
        style.display = 'block';
      } else {
        style.display = 'none';
      }
      var props = {className: 'intro', ref: 'intro'+index, key:index, style: style};
      intro.push(React.cloneElement(children, props));
    })
    return intro;
  }

  handleLastBtn() {
    ReactDOM.findDOMNode(this.refs['intro'+this.state.active]).style.display = 'none';
    const nextActive = this.state.active - 1;
    this.setState({
      active: nextActive
    }, function() {
      ReactDOM.findDOMNode(this.refs['intro'+nextActive]).style.display = 'block';
    })
  }

  handleNextBtn() {
    ReactDOM.findDOMNode(this.refs['intro'+this.state.active]).style.display = 'none';
    const nextActive = this.state.active + 1;
    this.setState({
      active: nextActive
    }, function() {
      ReactDOM.findDOMNode(this.refs['intro'+nextActive]).style.display = 'block';
    })
  }

  render() { 
    const intro = this.getIntro();
    let lastBtnTmpl = '',
        nextBtnTmpl = '';
    let lastBtnName = this.props.lastBtnName ? this.props.lastBtnName : 'last';
    let nextBtnName = this.props.nextBtnName ? this.props.nextBtnName : 'next';
    const {
      lastBtnClass,
      nextBtnClass
    } = this.props;
    if (this.state.active !== 0) {
      lastBtnTmpl = <button className={lastBtnClass}
                            onClick={this.handleLastBtn}>
                            {lastBtnName}
                    </button>;
    }

    if (this.state.active !== this.state.introLength) {
      nextBtnTmpl = <button className={nextBtnClass}
                            onClick={this.handleNextBtn}>
                            {nextBtnName}
                    </button>
    }
    return (
      <PopPop overlay={true}
              position="center"
              display='show'
              overlayClick={true}>
        {intro}
        <div>
          {lastBtnTmpl}
          {nextBtnTmpl}
        </div>
      </PopPop>
    )
  }
}