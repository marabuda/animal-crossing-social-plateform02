const Users = require('../models/users')
const UserAccount = require('../models/userAccount')
const to = require('await-to-js').default

// log in
const logHead = '[Log-in] '
const logIn = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { account, password } = req.body
  const userAccountQuery = { id: account }

  const [uaErr, userAccount] = await to(UserAccount.findOne(userAccountQuery))
  if (uaErr) {
    res.send({
      status: 500,
      message: uaErr
    })
  }
  console.log(`${logHead} Create user account`)

  const { user, id: userId, password: pw } = userAccount
  const success = (pw === password && account === userId)

  let userInfo = null
  let uiErr
  if (success) {
    [uiErr, userInfo] = await to(Users.findOne({ _id: user }))
    if (uiErr) {
      res.send({
        status: 500,
        message: uiErr
      })
    }
  }

  const response = {
    status: 200,
    message: 'OK',
    userId: userInfo.userId,
    success,
    userInfo
  }

  res.send(response)
}


module.exports = logIn
