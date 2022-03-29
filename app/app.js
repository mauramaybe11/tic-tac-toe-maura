// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const slugEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', slugEvents.onSignUp)
  $('#sign-in-form').on('submit', slugEvents.onSignIn)
  $('#sign-out-button').on('click', slugEvents.onSignOut)
  $('#slug-sign-out, #tic-tac-toe-game').hide()
  $('#new-game, #user-turn').hide()
  $('#new-game').on('click', slugEvents.onCreateNewGame)
})
