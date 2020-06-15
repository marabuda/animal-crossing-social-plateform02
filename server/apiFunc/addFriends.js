const Users = require('../models/users')
const logHead = '[Add-friends] '

const addFriends = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { hostId, guestId } = req.body
  const hostQuery = { userId: hostId }
  const questQuery = { userId: guestId }
  // Get user data
  const userData = await Users.findOne(hostQuery)
  const guestData = await Users.findOne(questQuery)
  const { userId, username } = guestData
  let { friendsRequest } = userData
  let friendsReq = {
    userId, username
  }
  friendsRequest.push(friendsReq)
  await Users.update(userQuery, { friendsRequest })

  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}


module.exports = addFriends
