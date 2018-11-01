import React, { PureComponent } from 'react'
import cn from 'classnames'
import { string, bool } from 'prop-types'

export default class Input extends PureComponent {
  static propTypes = {
    id: string,
    placeholder: string,
    label: string,
    autoFocus: bool,
    type: string,
    disabled: bool,
  }

  handleChange = event => {
    const { value } = event.target
    this.props.input.onChange(value)
  }

  render() {
    const {
      id,
      placeholder,
      label,
      autoFocus,
      type,
      disabled,
      input: {
        name,
        value,
        onBlur,
        onFocus,
      },
    } = this.props

    return (
      <div
        className={cn({
          textfield_filled: value,
        })}
      >
        <input
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          tabIndex={disabled ? -1 : 0}
          autoFocus={autoFocus}
          type={type}
          disabled={disabled}
        />
        {label && <label
          htmlFor={id}
        >
          {label}
        </label>}<style jsx>{`
        div {
          position: relative;
          height: 48px;
        }
      
        input {
          padding-top: 10px;
          padding-left: 10px;
          padding-right: 10px;
          display: block;
          width: 100%;
          height: 100%;
          border: solid 1px #e1e1e1;
          caret-color: #4a4a4a;
          box-sizing: border-box;
        }

        label {
          position: absolute;
          margin: auto;
          top: 16px;
          left: 10px;
          height: 16px;
          line-height: 1;
          font-size: 16px;
          color: #9b9b9b;
          pointer-events: none;
          user-select: none;
        }

        input:focus + label {
          color: #0076ff;
        }
        
        div.textfield_filled label,
        div input:focus + label {
          top: 5px;
          font-size: 10px;
        }
      `}</style>
      </div>
    )
  }
}
