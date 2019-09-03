import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class HollowMask extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  onClickMask = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { visible, className, clickable, children, ...others } = this.props;
    if (!visible) return null;
    return ReactDOM.createPortal(
      <>
        <div
          className={classNames('x-hollow-mask', {
            [className]: !!className
          })}
          {...others}
          onClick={this.onClickMask}
        >
          {children}
        </div>
        {clickable ? null : <div className="x-hollow-mask x-hollow-mask__layer" onClick={this.onClickMask}></div>}
      </>,
      this.el
    );
  }
}

HollowMask.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  clickable: PropTypes.bool
};

HollowMask.defaultProps = {
  className: 'x-customed-mask',
  visible: false,
  clickable: false
};
