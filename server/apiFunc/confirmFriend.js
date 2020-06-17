const Users = require('../models/users')
const to = require('await-to-js').default
const logHead = '[Confirm-friend] '

const confirmFriend = async (req, res) => {
  console.log(`${logHead}Start: ${JSON.stringify(req.body)}`)
  const { hostId, guestId, friendShip } = req.body
  const hostQuery = { userId: hostId }
  const questQuery = { userId: guestId }
  // 雙方都要更新friendsList、刪除hostId的friendRequest
  if (friendShip) {

  } else {

  }
  // Get user data
  // const userData = await Users.findOne(hostQuery)
  // const guestData = await Users.findOne(questQuery)
  // const { userId, username } = guestData
  // let { friendsRequest } = userData
  // let friendsReq = {
  //   userId, username
  // }
  // friendsRequest.push(friendsReq)
  // await Users.update(userQuery, { friendsRequest })

  const response = {
    status: 200,
    message: 'OK'
  }
  res.send(response)
}


module.exports = confirmFriend
