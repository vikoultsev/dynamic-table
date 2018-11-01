const amountRegExp = /^\d+$/

export default values => {
  const errors = {}

  if (!values.userId) {
    errors.userId = 'Required'
  }
  if (!values.companyId) {
    errors.companyId = 'Required'
  }
  if (!values.amount) {
    errors.amount = 'Required'
  } else if (!values.amount.match(amountRegExp)) {
    errors.amount = 'Invalid amoumt format'
  }

  return errors
}
