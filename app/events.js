const slugUi = require('./ui.js')
const slugApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')
const store = require('./store.js')

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

const onSignOut = function () {
  slugApi
    .signOut()
    .then((response) => slugUi.onSignOutSuccess(response))
    .catch(() => slugUi.onSignOutFailure())
}
// let cellIndex = function () {
//   console.log(this.getAttribute('data-cell-index'))
// }
// {
//  let gameData = {}
//     "cell": {
//       "index": 0,
//       "value": "x"
//     },
//     "over": false
//   }
// }
// let value=
// let gameOver=
let gameOver = false
let userX = true

const onBoxClick = function () {
  const cellIndex = this.getAttribute('data-cell-index')
  if (store.game.cells[cellIndex]) {
    return
  }
  console.log(cellIndex)
  if (userX) {
    // $(this).text('x')
    $(this).html($('<img>', { class: 'slug-daddy', src: 'https://i.imgur.com/4D7x783.png' }))
    store.game.cells[cellIndex] = 'Green Slug'
    $('#user-turn').html('<p>Time for Pink Slug to Find Love</p>')
  } else {
    $(this).html($('<img>', { class: 'slug-daddy', src: 'https://i.imgur.com/68IXzHA.png' }))
    // $(this).text('o')
    store.game.cells[cellIndex] = 'Pink Slug'
    $('#user-turn').html('<p>Time for Green Slug to Find Love</p>')
  }
  console.log(store.game.cells)
  // check winner for row
  userX = !userX
  // row check
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    console.log(store.game.cells)
    $('.box').off('click')
    $('#user-turn').hide()
  }
  if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[4] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('#user-turn').hide()
  }
  if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('#user-turn').hide()
  }
  if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('#user-turn').hide()
  }
  if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[6] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('#user-turn').hide()
  }
  if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('#user-turn').hide()
  }
  if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('#user-turn').hide()
  }
  // diagonals
  if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('#user-turn').hide()
  }
  if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[6] !== '') {
    $('#Winner').text(store.game.cells[cellIndex] + ' Is the Winner')
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('#user-turn').hide()
  } else if (store.game.cells[0] !== '' && store.game.cells[1] !== '' && store.game.cells[2] !== '' && store.game.cells[3] !== '' && store.game.cells[4] !== '' && store.game.cells[5] !== '' & store.game.cells[6] !== '' && store.game.cells[7] !== '' && store.game.cells[8] !== '') {
    $('#Winner').text("It's a tie!")
    gameOver = !gameOver
    console.log(gameOver)
    $('.box').off('click')
    $('#user-turn').hide()
  }
  console.log(cellIndex, store.game.cells[cellIndex], gameOver)
  slugApi.updateGame(cellIndex, store.game.cells[cellIndex], gameOver)
}
const onCreateNewGame = function () {
  gameOver = false
  userX = true
  slugApi
    .createNewGame()
    .then((response) => slugUi.onStartGameSuccess(response))
  $('.box').on('click', onBoxClick)
  $('#user-turn').html('<p>Green Slug Goes First!</p>')
  $('#user-turn').show()
}
// let game = {
//     cell = {
//       index: [0,1,2,3,4,5,6,7,8]
//       value: [x,o]
//     },
//     over: true
// }

// const onUpdateGame = function () {
//   slugApi.updateGame()
//     .then((response) => slugUi.onUpdateGameSuccess(response))
//     .catch(() => slugUi.onUpdateGameFailure())
// }
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateNewGame,
  onBoxClick
  // onUpdateGame
  // onShowGames

}
