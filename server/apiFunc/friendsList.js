const Users = require('../models/users')
const logHead = '[Friends-list] '

const firendsList = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { userId } = req.body
  const userQuery = { userId }
  // Get user data
  const userData = await Users.findOne(userQuery)
  let { username, friendlist, friendsRequest } = userData

  let firendsList = []
  for (let friendInfo of friendlist) {
    let { userId: friendId } = friendInfo
    let friendQuery = { userId: friendId }
    let friendData = await Users.findOne(friendQuery)

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
