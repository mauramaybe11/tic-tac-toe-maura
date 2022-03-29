const store = require('./store.js')

const onSignUpSuccess = function () {
  $('#slug-success-display').html('<p>Your slug successfully signed up, its on the way to finding love</p>')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#slug-error-display').html('<p>Your Slug can not find love because it did not successfully sign up</p>')
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#slug-sign-up-form, #slug-sign-in-form, #slug-error-display').hide()
  $('#slug-success-display').html('<p>User signed in successfully</p>')
  $('#new-game, #slug-sign-out').show()
  // reset all forms

  console.log(response)
  // store data from the response in my store object
  store.user = response.user

  // reset single form
  // $('#sign-in-form').trigger('reset')
}

const onSignInFailure = function () {
  $('#slug-error-display').html('<p>Error while signing in</p>')
}

const onSignOutSuccess = function () {
  $('#slug-success-display').html('<p>User signed out successfully</p>')

  $('form').trigger('reset')
  $('#slug-sign-up-form, #slug-sign-in-form').show()
  $('#new-game, #tic-tac-toe-game').hide()
}

const onSignOutFailure = function () {
  $('#slug-error-display').html('<p>Error while signing out</p>')
}
const clearBoard = function () {
  // set value = to null
  $('.box').text('Click Me')
  $('#Winner').text('Who Will Win?')
}

const onStartGameSuccess = function (response) {
  store.game = response.game
  console.log(response)
  $('#tic-tac-toe-game').show()
  clearBoard()
}

const onStartGameFailure = function () {
  $('#slug-error-display').html('<p>Error while starting new game!</p>')
}

const onUpdateGameSuccess = function (response) {
  console.log(response)
  store.game = response.game
}
const onUpdateGameFailure = function (response) {
  console.log(response)
  $('#slug-error-display').html('<p>Error while updating the game!</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  // onChangePasswordSuccess,
  // onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onStartGameSuccess,
  onStartGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
