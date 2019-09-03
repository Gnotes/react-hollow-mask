import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import $ from '../utils/selector';

export default class Rect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onClickRect = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  getStyle() {
    const { selector, padding } = this.props;
    const $el = $(selector);
    if ($el) {
      const rect = $el.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;
      const left = rect.left;
      const right = rect.right;
      const width = rect.width || right - left;
      const height = rect.height || bottom - top;
      return { top: top - padding, left: left - padding, width: width + 2 * padding, height: height + 2 * padding };
    }
    return {};
  }

  componentDidMount() {
    const { selector } = this.props;
    this.$el = $(selector);
    if (this.$el) {
      this.zIndex = getComputedStyle(this.$el).zIndex;
      this.setZIndex();
    }
  }

  componentWillUnMount() {
    this.$el && this.reset();
  }

  setZIndex = () => {
    this.$el.style.setProperty('z-index', 999991, 'important');
  };

  reset = () => {
    this.$el.style.setProperty('z-index', this.zIndex);
  };

  render() {
    const { shadow, round, children } = this.props;
    const style = this.getStyle();

    return (
      <div
        className={classNames('x-hollow-mask__rect', {
          'rect-shadow': shadow,
          'rect-round': round
        })}
        style={style}
      >
        {children}
      </div>
    );
  }
}

Rect.propTypes = {
  className: PropTypes.string,
  selector: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  round: PropTypes.bool,
  padding: PropTypes.bool
};

Rect.defaultProps = {
  className: 'x-customed-rect',
  shadow: true,
  round: true,
  padding: 10
};
