const Users = require('../models/users')
const Counter = require('../models/counter')
const UserAccount = require('../models/userAccount')
const to = require('await-to-js').default

// signUp
const logHead = '[Sign-up] '
const signUp = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const {
    account, password, name, userpicture, islandname, fruit, intro
  } = req.body

  let [ucErr, userCounter] = await to(Counter.findOneAndUpdate({ name: 'user'}, { $inc: { number: 1 }}))
  if (ucErr) {
    res.send({
      status: 500,
      message: ucErr
    })
  }
  if (!userCounter) {
    let counter = {
      name: 'user',
      number: 1
    }
    [ucErr, userCounter] = await to(Counter.create(counter))
    if (ucErr) {
      res.send({
        status: 500,
        message: ucErr
      })
    }
  }
  let { number } = userCounter

  const userData = {
    username: name,
    userId: number,
    userpicture,
    islandname,
    fruit,
    intro,
    provide: [],
    friendlist: [],
    seek: [],
    status: 'Open'
  }

  const [userErr, user] = await to(Users.create(userData))
  if (userErr) {
    res.send({
      status: 500,
      message: userErr
    })
  }
  console.log(`${logHead}Create user`)
  const { _id } = user
  const userAccountData = {
    user: _id,
    id: account,
    password
  }

  const [uaErr, userAccount] = await to(UserAccount.create(userAccountData))
  if (uaErr) {
    res.send({
      status: 500,
      message: uaErr
    })
  }
  const [uuErr] = await to(Users.updateOne({ userId: number }, { userAccount: userAccount._id }))
  if (uuErr) {
    res.send({
      status: 500,
      message: uuErr
    })
  }
  console.log(`${logHead}Create user account`)

  const response = {
    status: 200,
    message: 'OK',
    account,
    userId: number
  }

  res.send(response)
}


module.exports = signUp
