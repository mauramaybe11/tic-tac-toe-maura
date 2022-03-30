const store = require('./store.js')
const config = require('./config.js')
const signUp = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
    // same as data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createNewGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
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
    url: config.apiUrl + '/games/' + store.game._id,
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
