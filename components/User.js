import React, { PureComponent } from 'react'
import {
  string,
  number,
  bool,
  func,
  node,
  oneOfType,
} from 'prop-types'


export default class User extends PureComponent {
  static propTypes = {
    id: oneOfType([string, number]),
    name: string,
    value: oneOfType([
      string,
      number,
    ]),
    tabIndex: number,
    checked: bool,
    disabled: bool,
    crossed: bool,
    children: node,
    onChange: func,
  }

  static defaultProps = {
    tabIndex: 0,
  }

  handleChange = data => {
    this.props.input.onChange(data)
  }


  render() {
    const {
      id,
      input,
      disabled,
      children,
    } = this.props

    return (
      <span>
        <input
          id={id}
          name={input.name}
          value={input.value}
          checked={input.checked}
          disabled={disabled}
          type='radio'
          disabled={disabled}
          onChange={this.handleChange}
        />
        <label
          htmlFor={id}
        >
          {children}
        </label><style jsx>{`
          span {
            padding: 6px 0;
            display: inline-block;
            height: 44px;
          }

          label {
            position: relative;
            padding: 5px 0;
            display: flex;
            align-items: center;
            min-height: 1.5rem;
            border: 1px solid #ddd;
            width: 130px;
            justify-content: center;
            user-select: none;
            cursor: pointer;
          }

          input {
            position: absolute;
            margin: 0;
            overflow: visible;
            height: 0;
            width: 0;
            border: 0;
            clip: rect(0 0 0 0);
          }

          input:focus {
            outline: none;
          }

          input:checked + label {
            border-color: #0076ff;
          }
   
        `}</style>
      </span>
    )
  }
}
