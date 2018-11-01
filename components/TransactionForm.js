import React, { PureComponent } from 'react'
import { Field } from 'react-final-form'
import Button from './Button'
import Input from './Input'
import Radio from './Radio'
import User from './User'


export default class TransactionForm extends PureComponent {
  static propTypes = {
    // prop: PropTypes
  }

  handleSubmit = e => {
    const { handleSubmit } = this.props

    return handleSubmit(e)
  }

  renderUser = ({ id, name }) => (
    <div key={id}>
      <Field
        id={id}
        name='userId'
        value={id}
        type='radio'
        component={User}
      >
        {name}
      </Field>
    </div>
  )

  renderCompany = ({ id, title }) => (
    <div key={id}>
      <Field
        id={id}
        name='companyId'
        value={id}
        type='radio'
        component={Radio}
      >
        {title}
      </Field>
    </div>
  )

  render() {
    const {
      users,
      companies,
      submitting,
      hasValidationErrors,
      hasSubmitErrors,
      dirtySinceLastSubmit,
    } = this.props

    const isSubmitButtonDisabled =
      submitting ||
      hasValidationErrors ||
      (hasSubmitErrors && !dirtySinceLastSubmit)

    return (
      <form onSubmit={this.handleSubmit}>
        <div className='users'>{users.map(this.renderUser)}</div>
        <div className='companies'>{companies.map(this.renderCompany)}</div>
        <div className='input'>
          <Field
            id='amount'
            name='amount'
            component={Input}
            type='text'
            label='Amount'
          />
        </div>
        <div className='button'>
          <Button
            type='submit'
            disabled={isSubmitButtonDisabled}
          >
            Transfer
          </Button>
        </div><style jsx>{`
          form {
            margin: 0 -20px;
            display: flex;
            justify-content: space-between;
          }

          form div {
            padding: 0 20px;
            width: 25%;
          }
        `}</style>
      </form>
    )
  }
}
