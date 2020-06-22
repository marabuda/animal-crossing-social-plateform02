const Users = require('../models/users')
const Counter = require('../models/counter')
const UserAccount = require('../models/userAccount')
const to = require('await-to-js').default

// signUp
const logHead = '[Update-user] '
const updateUser = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const {
    userId, name, userpicture, islandname, fruit, intro, userImg
  } = req.body

  let userUpdate = {
    name, userpicture, islandname, fruit, intro, userImg
  }

  const [userErr, userInfo] = await to(Users.updateOne({ userId }, userUpdate))
  if (userErr) {
    res.send({
      status: 500,
      message: userErr
    })
  }

  const response = {
    status: 200,
    message: 'OK',
    userId,
    name, userpicture, islandname, fruit, intro, userImg
  }

  res.send(response)
}


module.exports = updateUser
