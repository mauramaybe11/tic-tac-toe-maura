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
let userX = true
const onBoxClick = function () {
  console.log('this click this click')
  if (userX) {
    $(this).text('x')
  } else {
    $(this).text('o')
  }
  userX = !userX
}

// let game = {
//     cell = {
//       index: [0,1,2,3,4,5,6,7,8]
//       value: [x,o]
//     },
//     over: true
// }



// const onIndexGames = () => {
//   console.log('in event listener!!!!!')
//   // get the books from the API
//   // check the Network tab!
//   slugApi
//     .indexGames()
// }

// const onShowGames = (event) => {
//   event.preventDefault()
//   console.log('in events.js')
//   slugApi
//     .showGames(data)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateNewGame,
  onBoxClick
  // onIndexGames,
  // onShowGames

}
