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
const onCreateNewGame = function () {
  slugApi.createNewGame()
    .then((response) => { store.game = response.game.cells })
    .then(() => console.log(store))
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

const board = [null, null, null, null, null, null, null, null, null]
let userX = true
const onBoxClick = function () {
  const cellIndex = this.getAttribute('data-cell-index')
  if (board[cellIndex]) {
    return
  }
  console.log(cellIndex)
  if (userX) {
    $(this).text('x')
    board[cellIndex] = 'x'
  } else {
    $(this).text('o')
    board[cellIndex] = 'o'
  }
  console.log(board)
  // check winner for row
  userX = !userX
  // row check
  if (board[0] === board[1] && board[1] === board[2] && board[1] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  if (board[3] === board[4] && board[4] === board[5] && board[4] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  if (board[0] === board[3] && board[3] === board[6] && board[6] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  if (board[1] === board[4] && board[4] === board[7] && board[1] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  if (board[2] === board[5] && board[5] === board[8] && board[2] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  // diagonals
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  if (board[2] === board[4] && board[4] === board[6] && board[6] !== null) {
    $('#Winner').text(board[cellIndex] + ' Is the Winner')
    return
  }
  if (board[1] !== null && board[2] !== null && board[3] !== null && board[4] !== null && board[5] !== null & board[6] !== null && board[7] !== null && board[8] !== null) {
    $('#Winner').text("It's a tie!")
  }
}

// let game = {
//     cell = {
//       index: [0,1,2,3,4,5,6,7,8]
//       value: [x,o]
//     },
//     over: true
// }

/// Trying to think of ways to update books, should we still be using get form fields when we can get the data from a click?

// const onUpdateGameMove = function (event) {
// 	event.preventDefault()
// 	// event.target will tell us more information about the thing that was clicked

// 	const playerClick = event.target.onBoxClick

// 	// we need to find the id of the book
//   const playerId = $(playerClick).data('id')

// 	// use getFormFields to get the data from the form

// 	console.log(data)

// 	console.log(playerId)
// 	// data.book.id = bookId

// 	slugApi
// 		.updateGameMove(data, bookId)
// 		.then(() => slugUi.onUpdateGameMoveSuccess())
// 		.catch(() => slugUi.onUpdateGameMoveFailure())

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateNewGame,
  onBoxClick
  // onIndexGames,
  // onShowGames

}
