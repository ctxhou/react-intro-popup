'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPoppop = require('react-poppop');

var _reactPoppop2 = _interopRequireDefault(_reactPoppop);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var IntroPopup = (function (_Component) {
  _inherits(IntroPopup, _Component);

  function IntroPopup(props) {
    _classCallCheck(this, IntroPopup);

    _get(Object.getPrototypeOf(IntroPopup.prototype), 'constructor', this).call(this, props);
    this.handleLastBtn = this.handleLastBtn.bind(this);
    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.close = this.close.bind(this);

    var introLength = this.props.children.length - 1;
    this.state = {
      introLength: introLength,
      active: 0
    };
  }

  _createClass(IntroPopup, [{
    key: 'getIntro',
    value: function getIntro() {
      var intro = [];
      var that = this;
      _react2['default'].Children.forEach(this.props.children, function (children, index) {
        var style = {};
        if (index === that.state.active) {
          style.display = 'block';
        } else {
          style.display = 'none';
        }
        var props = { className: 'intro', ref: 'intro' + index, key: index, style: style };
        intro.push(_react2['default'].cloneElement(children, props));
      });
      return intro;
    }
  }, {
    key: 'handleLastBtn',
    value: function handleLastBtn() {
      _react2['default'].findDOMNode(this.refs['intro' + this.state.active]).style.display = 'none';
      var nextActive = this.state.active - 1;
      this.setState({
        active: nextActive
      }, function () {
        _react2['default'].findDOMNode(this.refs['intro' + nextActive]).style.display = 'block';
      });
    }
  }, {
    key: 'handleNextBtn',
    value: function handleNextBtn() {
      _react2['default'].findDOMNode(this.refs['intro' + this.state.active]).style.display = 'none';
      var nextActive = this.state.active + 1;
      this.setState({
        active: nextActive
      }, function () {
        _react2['default'].findDOMNode(this.refs['intro' + nextActive]).style.display = 'block';
      });
    }
  }, {
    key: 'close',
    value: function close() {}
  }, {
    key: 'render',
    value: function render() {
      var intro = this.getIntro();
      var lastBtnTmpl = '',
          nextBtnTmpl = '';
      var lastBtnName = this.props.lastBtnName ? this.props.lastBtnName : 'last';
      var nextBtnName = this.props.nextBtnName ? this.props.nextBtnName : 'next';
      var finishBtnName = this.props.finishBtnName ? this.props.finishBtnName : 'finish';
      var _props = this.props;
      var lastBtnClass = _props.lastBtnClass;
      var nextBtnClass = _props.nextBtnClass;

      if (this.state.active !== 0) {
        lastBtnTmpl = _react2['default'].createElement(
          'button',
          { className: lastBtnClass,
            onClick: this.handleLastBtn },
          lastBtnName
        );
      }

      if (this.state.active !== this.state.introLength) {
        nextBtnTmpl = _react2['default'].createElement(
          'button',
          { className: nextBtnClass,
            onClick: this.handleNextBtn },
          nextBtnName
        );
      } else {
        nextBtnTmpl = _react2['default'].createElement(
          'button',
          { className: nextBtnClass,
            onClick: this.close },
          finishBtnName
        );
      }
      return _react2['default'].createElement(
        _reactPoppop2['default'],
        { overlay: true,
          position: 'center',
          display: 'show',
          overlayClick: true },
        intro,
        _react2['default'].createElement(
          'div',
          null,
          lastBtnTmpl,
          nextBtnTmpl
        )
      );
    }
  }]);

  return IntroPopup;
})(_react.Component);

exports['default'] = IntroPopup;
module.exports = exports['default'];