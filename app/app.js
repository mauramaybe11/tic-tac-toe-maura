// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const slugEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', slugEvents.onSignUp)
  $('#sign-in-form').on('submit', slugEvents.onSignIn)
  $('#sign-out-button').on('click', slugEvents.onSignOut)
  $('#how-to-play').on('click', slugEvents.onHowToPlay)
  $('#hide-how-to-play').on('click', slugEvents.onHideHowToPlay)
  $('#hide-new-slug').on('click', slugEvents.onSlugIsNew)
  $('#new-slug').on('click', slugEvents.onNewSlug)
  $('#slug-sign-out, #tic-tac-toe-game, #hide-how-to-play').hide()
  $('#new-game, #user-turn, #slug-success-display, #Winner, #sign-up, #hide-new-slug').hide()
  $('#new-game').on('click', slugEvents.onCreateNewGame)
})
