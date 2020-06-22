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
    username: name,
    userpicture, islandname, fruit, intro
  }

  const userQuery = { userId }
  const [userErr, userInfo] = await to(Users.updateOne(userQuery, userUpdate))
  if (userErr) {
    res.send({
      status: 500,
      message: userErr
    })
  }

  // Get user data
  const [udErr, userData] = await to(Users.findOne(userQuery))
  if (udErr) {
    res.send({
      status: 500,
      message: udErr
    })
  }

  const response = {
    status: 200,
    message: 'OK',
    userId,
    name: userData.username,
    userpicture: userData.userpicture,
    islandname: userData.islandname,
    fruit: userData.fruit,
    intro: userData.intro
  }

  res.send(response)
}


module.exports = updateUser
