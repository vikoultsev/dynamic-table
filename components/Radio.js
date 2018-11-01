import React, { PureComponent } from 'react'
import {
  string,
  number,
  bool,
  func,
  node,
  oneOfType,
} from 'prop-types'


export default class Radio extends PureComponent {
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
      <span
        className='radio'
      >
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
          className='font_p16-regular'
          htmlFor={id}
        >
          {children && <span className='content'>{children}</span>}
        </label><style jsx>{`
          span.radio {
            padding: 10px 0;
            display: inline-block;
          }

          span.radio:hover label::before {
            border-color: rgba(155, 155, 155, 1);
          }

          span.radio:hover input:checked + label::before {
            border-color: #0254d8;
          }

          span.radio:hover input:checked + label::after {
            background-color: #0254d8;
          }

          label {
            position: relative;
            padding-left: 1.5rem;
            display: flex;
            align-items: center;
            min-height: 1.5rem;
            user-select: none;
            cursor: pointer;
          }

          label::before {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            box-sizing: border-box;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid rgba(155, 155, 155, 0.5);
            border-radius: 50%;
            transition: border-color 0.2s ease-out, background-color 0.2s ease-out;
            content: '';
          }

          label::after {
            position: absolute;
            top: 6px;
            left: 6px;
            display: none;
            width: 0.75rem;
            height: 0.75rem;
            background-color: #fff;
            border-radius: 50%;
            content: '';
            transform: rotate(45deg);
          }

          label span.content {
            padding-left: 0.5rem;
            font-size: inherit;
            line-height: inherit;
          }

          span.border {
            position: absolute;
            display: none;
            top: 1px;
            left: 1px;
            display: none;
            box-sizing: border-box;
            width: calc(1.5rem - 2px);
            height: calc(1.5rem - 2px);
            border: 1px solid #fff;
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

          input:checked + label::before {
            border-color: #0076ff;
          }

          input:checked + label::after {
            display: block;
            background-color: #0076ff;
          }
   
        `}</style>
      </span>
    )
  }
}
