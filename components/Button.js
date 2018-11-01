import React, { PureComponent, Fragment } from 'react'
import { node, oneOf, bool, func } from 'prop-types'
import cn from 'classnames'

export default class Button extends PureComponent {
  static propTypes = {
    disabled: bool,
    type: oneOf(['button', 'submit']),
    children: node,
    onClick: func,
  }

  static defaultProps = {
    type: 'button',
  }

  render() {
    const {
      disabled,
      type,
      children,
      onClick,
    } = this.props

    const classNames = cn('button', {
      button_state_disabled: disabled,
    })

    return (
      <Fragment>
        <button
          type={type}
          className={classNames}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button><style jsx>{`
          .button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 48px;
            background: none;
            color: #ffffff;
            background-color: #0076ff;
            transition: background-color 0.3s ease-out;
            font-size: 18px;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            user-select: none;
          }

          .button_state_disabled {
            pointer-events: none;
            opacity: 0.3;
          }

          .button:hover,
          .button:active {
            background-color: #0254d8;
          }
        `}</style>
      </Fragment>
    )
  }
}
