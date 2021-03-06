import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PopPop from 'react-poppop';
import classNames from 'classnames';

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
        style = Object.assign({}, style, children.props.style);
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
    let finishBtnName = this.props.finishBtnName ? this.props.finishBtnName : 'finish';
    const {
      lastBtnClass,
      nextBtnClass,
      closeBtn,
      overlayClickClose
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
    } else {
      nextBtnTmpl = <button className={nextBtnClass}
                            onClick={this.props.close}>
                            {finishBtnName}
                    </button>
    }

    return (
      <PopPop overlay={true}
              position="center"
              display='show'
              closeBtn={closeBtn}
              overlayClick={overlayClickClose}>
        <div style={this.props.style}>
          {intro}
          <div className={this.props.introBtnWrapper}>
            {lastBtnTmpl}
            {nextBtnTmpl}
          </div>
        </div>
      </PopPop>
    )
  }
}
