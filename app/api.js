const store = require('./store.js')

const signUp = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    data
    // same as data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createNewGame = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (cellIndex, userX, gameOver) {
  // console.log(data)

  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cellIndex,
          value: userX
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  createNewGame,
  updateGame
  // changePassword,
  // signOut,
}
