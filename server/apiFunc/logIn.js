const Users = require('../models/users')
const UserAccount = require('../models/userAccount')

// log in
const logHead = '[Log-in] '
const logIn = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { id, password } = req.body
  const userAccountQuery = { id }

  const userAccount = await UserAccount.findOne(userAccountQuery)
  console.log(`${logHead} Create user account`)

  const { _id, password: pw } = userAccount
  const success = (pw === password)

  let userInfo = null
  if (success) {
    userInfo = await User.findOne({ userAccount: _id })
  }

  const response = {
    status: 200,
    message: 'OK',
    id,
    success,
    ...userInfo
  }

  res.send(response)
}


module.exports = logIn
