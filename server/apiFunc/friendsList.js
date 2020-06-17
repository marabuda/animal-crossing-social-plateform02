const Users = require('../models/users')
const to = require('await-to-js').default
const logHead = '[Friends-list] '

const firendsList = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId } = req.body
  const userQuery = { userId }
  // Get user data
  const [udErr, userData] = await to(Users.findOne(userQuery))
  if (udErr) {
    res.send({
      status: 500,
      message: udErr
    })
  }
  let { username, friendlist, friendsRequest } = userData

  let firendsList = []
  for (let friendInfo of friendlist) {
    let { userId: friendId } = friendInfo
    let friendQuery = { userId: friendId }
    let [fdErr, friendData] = await to(Users.findOne(friendQuery))
    if (fdErr) {
      res.send({
        status: 500,
        message: fdErr
      })
    }
    let friendInfo = {
      name: friendData.username,
      userId: friendData.userId
    }
    firendsList.push(friendInfo)
  }

  const response = {
    status: 200,
    message: 'OK',
    host: {
      name: username,
      userId
    },
    firendsList,
    friendsRequest
  }
  res.send(response)
}


module.exports = firendsList
