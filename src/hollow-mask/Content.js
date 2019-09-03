import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends PureComponent {
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

  render() {
    const { children, ...others } = this.props;
    return ReactDOM.createPortal(
      <div className="x-hollow-mask__content" {...others}>
        {children}
      </div>,
      this.el
    );
  }
}
