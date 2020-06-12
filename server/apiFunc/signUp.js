const Users = require('../models/users')
const Counter = require('../models/counter')
const UserAccount = require('../models/userAccount')

// signUp
const logHead = '[Sign-up] '
const signUp = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const {
    account, password, name, userpicture, islandname, fruit, intro
  } = req.body

  let userCounter = await Counter.findOneAndUpdate({ name: 'user'}, { $inc: { number: 1 }})
  if (!userCounter) {
    let counter = {
      name: 'user',
      number: 1
    }
    userCounter = await Counter.create(counter)
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

  const user = await Users.create(userData)
  console.log(`${logHead}Create user`)
  const { _id } = user
  const userAccountData = {
    user: _id,
    id: account,
    password
  }

  const userAccount = await UserAccount.create(userAccountData)
  await Users.updateOne({ userId: number }, { userAccount: userAccount._id })
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
