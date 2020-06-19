const Users = require('../models/users')
const Counter = require('../models/counter')
const UserAccount = require('../models/userAccount')
const to = require('await-to-js').default

// signUp
const logHead = '[Update-user] '
const updateUser = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const {
    userId, name, userpicture, islandname, fruit, intro
  } = req.body

  let userUpdate = {
    name, userpicture, islandname, fruit, intro
  }

  const [userErr, userInfo] = await to(Users.updateOne({ userId }, userUpdate, { new: true }))
  if (userErr) {
    res.send({
      status: 500,
      message: userErr
    })
  }

  const response = {
    status: 200,
    message: 'OK',
    ...userInfo
  }

  res.send(response)
}


module.exports = updateUser
