const slugUi = require('./ui.js')
const slugApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('now here')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  slugApi
    .signUp(data)
    .then(() => slugUi.onSignUpSuccess())
    .catch(() => slugUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  slugApi
    .signIn(data)
    .then((response) => slugUi.onSignInSuccess(response))
    .catch(() => slugUi.onSignInFailure())
}
module.exports = {
  onSignUp,
  onSignIn
  // onChangePassword,
  // onSignOut,
}
