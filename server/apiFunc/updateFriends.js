const Users = require('../models/users')
const lodash = require('lodash')
const logHead = '[Update-friends] '

const updateFriends = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { hostId, unfriend, friendId, mark } = req.body
  const userQuery = { userId: hostId }
  const response = {
    status: 200,
    message: 'OK'
  }
  // Get user data
  const userData = await Users.findOne(userQuery)
  let { friendlist } = userData

  let friendIdx = _.findIndex(friendlist, f => f.userId === friendId)
  if (unfriend) {
    friendlist = _.slice(friendlist, friendIdx, friendIdx + 1)
  } else {
    friendlist[friendIdx].mark = mark
  }
  await Users.update(userQuery, { friendlist })

  res.send(response)
}


module.exports = updateFriends
