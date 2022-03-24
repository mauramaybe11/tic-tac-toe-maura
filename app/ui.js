const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#slug-success-display').html('<p>Your slug successfully signed up, its on the way to finding love</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#slug-error-display').html('<p>Your Slug can not find love because it did not successfully sign up</p>')
}

const onSignInSuccess = function (response) {
  $('#slug-success-display').html('<p>User signed in successfully</p>')
  $('#slug-error-display').hide()
  // reset all forms
  $('form').trigger('reset')

  console.log(response)
  // store data from the response in my store object
  store.user = response.user

  // reset single form
  // $('#sign-in-form').trigger('reset')
}

const onSignInFailure = function () {
  $('#slug-error-display').html('<p>Error while signing in</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
  // onChangePasswordSuccess,
  // onChangePasswordFailure,
  // onSignOutSuccess,
  // onSignOutFailure,
}
